import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { createClient } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';

import SuperAgentHttpService from './services/SuperAgentHttpService';

import FightRegistrationController from './controllers/FightRegistrationController';
import ProfileController from './controllers/ProfileController';
import FightController from './controllers/FightController';

import FightRegistration from './bff/FightRegistration';
import Profile from './bff/Profile';
import Fight from './bff/Fight';
import RoundController from './controllers/RoundController';
import RemainingTimeLogic from './logic/RemainingTimeLogic';

// TODO:
// - Logging system
// - refactoring

const pubClient = createClient({
  url: `${
    process.env.REDIS_PROTOCOL
  }://${
    process.env.REDIS_HOST
  }:${
    process.env.REDIS_PORT
  }`,
});
const subClient = pubClient.duplicate();

const app = express();
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

Promise.all([pubClient, subClient])
  .then(() => {
    console.log('[+] connected to redis');

    const httpService = new SuperAgentHttpService(`${
      process.env.MONOLITH_MVP_PROTOCOL
    }://${
      process.env.MONOLITH_MVP_HOST
    }:${
      process.env.MONOLITH_MVP_PORT
    }/v1`);

    const fightController = new FightController(httpService);
    const fightRegistrationController = new FightRegistrationController(httpService);
    const profileController = new ProfileController(httpService);
    const roundController = new RoundController(httpService);

    const remainingTimeLogic = new RemainingTimeLogic(30);

    const io = new Server(server, {
      cors: {
        origin: '*',
        methods: ["GET", "POST"],
        allowedHeaders: ["Access-Control-Allow-Origin"],
      }
    });

    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);
    
      new Fight(io, socket, fightController, roundController, remainingTimeLogic);
      new FightRegistration(io, socket, fightRegistrationController);
      new Profile(io, socket, profileController);
    });

    io.adapter(createAdapter(pubClient, subClient));
    io.listen(process.env.WEBSOCKET_GATEWAY_PORT as any);
  })
  .catch((err) => {
    console.warn('???', err);
  });
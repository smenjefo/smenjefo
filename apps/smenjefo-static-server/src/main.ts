import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send(200);
});

const port = process.env.STATIC_SERVER_PORT;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

import { Test, TestingModule } from '@nestjs/testing';

import { FightRegistrationPlayersController } from '../fight-registration-players.controller';
import { PlayersService } from '../../services/players.service';

describe('FightRegistrationApplicationsController', () => {
  const applicationUUIDMock = '4eaed3e0-8373-4703-ab17-cdca53996698';
  const teamUUIDMock = '14174926-0ba1-4fa5-9c55-f25fa63e335c';

  const getPlayersMock = () => {
    return [{
      id: "1796759c-e56b-4e38-9f61-e3d4da0b3042",
      entityId: "entityId",
      nickname: "nickname",
    }];
  };

  const getFightRegistrationPlayersControllerMock = async (mockedServiceMethods = {}) => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FightRegistrationPlayersController],
      providers: [{
        provide: PlayersService,
        useValue: {
          createPlayer: jest.fn(),
          deleteByUUID: jest.fn(),
          ...mockedServiceMethods,
        },
      }],
    }).compile();

    const controller = module.get<FightRegistrationPlayersController>(FightRegistrationPlayersController);

    return controller;
  };

  describe('create method', () => {
    it('should return all apllications tree', async () => {
      const playersMock = getPlayersMock();

      const controllerMock = await getFightRegistrationPlayersControllerMock({
        createPlayer: jest.fn(() => {
          return playersMock;
        }),
      });
  
      expect(controllerMock.create(
        { applicationUUID: applicationUUIDMock },
        { teamUUID: teamUUIDMock },
        playersMock[0],
      )).toMatchObject(playersMock);
    });
  });
});

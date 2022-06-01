import { Test, TestingModule } from '@nestjs/testing';

import { FightRegistrationApplicationsController } from '../fight-registration-applications.controller';
import { ApplicationsService } from '../../services/applications.service';

describe('FightRegistrationApplicationsController', () => {
  const getFightApplicationsMock = () => {
    return [{
      id: "4eaed3e0-8373-4703-ab17-cdca53996698",
      ownerEntityId: "asdasdasd",
      ownerNickname: "nickname",
      type: "duel",
      mode: "ladder",
      fightFilters: [
        {
          type: "byAuthority",
          value: 22
        }
      ],
      fightTriggers: [
        {
        type: "shuffle"
        }
      ],
      teamCapacity: 1,
      teams: [
        {
          id: "14174926-0ba1-4fa5-9c55-f25fa63e335c",
          players: [
            {
            entityId: "asdasdasd",
            nickname: "impeee",
            id: "1796759c-e56b-4e38-9f61-e3d4da0b3042"
            }
          ],
        },
        {
          id: "7ebcd9f4-ce9b-4c3f-af94-77b82c866c41",
          players: [],
        }
      ],
    }];
  };

  const getFightRegistrationApplicationsControllerMock = async (mockedServiceMethods = {}) => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FightRegistrationApplicationsController],
      providers: [{
        provide: ApplicationsService,
        useValue: {
          getAllTree: jest.fn(),
          getOneByUUID: jest.fn(),
          create: jest.fn(),
          deleteByUUID: jest.fn(),
          ...mockedServiceMethods,
        },
      }],
    }).compile();

    const controller = module.get<FightRegistrationApplicationsController>(FightRegistrationApplicationsController);

    return controller;
  };

  describe('findAll method', () => {
    it('should return all apllications tree', async () => {
      const fightApplicationsMock = getFightApplicationsMock();
      const applicationsTree = fightApplicationsMock;

      const controllerMock = await getFightRegistrationApplicationsControllerMock({
        getAllTree: jest.fn(() => {
          return applicationsTree;
        }),
      });
  
      expect(controllerMock.findAll({ type: 'allVersusAll' })).toMatchObject(applicationsTree);
    });
  });

  describe('findOne method', () => {
    it('should return one application by uuid', async () => {
      const fightApplicationsMock = getFightApplicationsMock();
      const fightApplicationByUUID = fightApplicationsMock[0];
      const applicationUUID = fightApplicationByUUID.id; 

      const controllerMock = await getFightRegistrationApplicationsControllerMock({
        getOneByUUID: jest.fn((uuid) => {
          return fightApplicationsMock.find((fightApplicationMock) => {
            return fightApplicationMock.id === uuid;
          });
        }),
      });
  
      expect(controllerMock.findOne({ applicationUUID })).toBe(fightApplicationByUUID);
    });
  });

  describe('create method', () => {
    it('should create one fight application', async () => {
      const fightApplicationsMock = getFightApplicationsMock();
      const newFightApplication = fightApplicationsMock[0];

      const controllerMock = await getFightRegistrationApplicationsControllerMock({
        create: jest.fn(() => {
          return newFightApplication;
        }),
      });
  
      expect(controllerMock.create(newFightApplication)).toBe(newFightApplication);
    });
  });

  describe('remove method', () => {
    it('should remove one application by uuid', async () => {
      const fightApplicationsMock = getFightApplicationsMock();
      const fightApplications = fightApplicationsMock;
      const applicationUUIDMock = fightApplications[0].id;

      const controllerMock = await getFightRegistrationApplicationsControllerMock({
        deleteByUUID: jest.fn((applicationUUID) => {
          return fightApplicationsMock.filter((fightApplicationMock) => {
            return fightApplicationMock.id !== applicationUUID;
          });
        }),
      });
  
      expect(controllerMock.remove({ applicationUUID: applicationUUIDMock })).toMatchObject([]);
    });
  });
});

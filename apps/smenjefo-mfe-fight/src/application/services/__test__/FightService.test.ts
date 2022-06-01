import IFightInitializedDTO from '../../dto/IFightInitializedDTO';
import FightService from '../FightService';
import RoundService from '../RoundService';

import DataPublisherMock from './utils/DataPublisherMock';
import RepositoryMock from './utils/RepositoryMock';
import WebsocketMock from './utils/WebsocketMock';

describe('FightService', () => {
  const fightInformationDtoMock = {
    fightId: 'fightId',
  };

  const getFightService = () => {
    const websocketMock = new WebsocketMock(jest);
    const dataPublisherMock = new DataPublisherMock(jest);
    const statusRepositoryMock = new RepositoryMock(jest);
    const teamsRepositoryMock = new RepositoryMock(jest);
    const turnWindowRepository = new RepositoryMock(jest);

    const roundService = new RoundService(
      websocketMock, null, null, null, null, null, null,
    );

    roundService.loadCurrentFightRound = jest.fn();

    const fightService = new FightService(
      websocketMock,
      dataPublisherMock,
      roundService,
      statusRepositoryMock,
      teamsRepositoryMock,
      turnWindowRepository,
      fightInformationDtoMock,
    );

    return {
      fightService,
      websocketMock,
      dataPublisherMock,
      roundService,
      statusRepositoryMock,
      teamsRepositoryMock,
      turnWindowRepository,
    };
  };

  describe('subscriptions', () => {
    it('should be subscribed to fightInitialized method', () => {
      const { fightService, websocketMock } = getFightService();

      expect(websocketMock.on).toHaveBeenLastCalledWith(
        'fightInitialized',
        fightService.fightInitialized,
      );
    });
  });

  describe('initializeFight', () => {
    it('should call initializeFight method via websocket with specific payload', () => {
      const { fightService, websocketMock } = getFightService();

      fightService.initializeFight();

      expect(websocketMock.emit).toHaveBeenLastCalledWith(
        'initializeFight',
        { id: fightInformationDtoMock.fightId },
      );
    });
  });

  describe('fightInitialized', () => {
    const payloadDTO = {
      teams: [],
      status: {},
    } as IFightInitializedDTO;

    it('should update data', () => {
      const { fightService, dataPublisherMock } = getFightService();

      fightService.fightInitialized(payloadDTO);

      expect(dataPublisherMock.notifyAll).toHaveBeenCalledWith('fightInitialized');
    });

    it('should load current round id via RoundService', () => {
      const { fightService, roundService } = getFightService();

      fightService.fightInitialized(payloadDTO);

      expect(roundService.loadCurrentFightRound).toHaveBeenCalled();
    });

    it('should create status records', () => {
      const { fightService, statusRepositoryMock } = getFightService();

      fightService.fightInitialized(payloadDTO);

      expect(statusRepositoryMock.insert).toHaveBeenCalled();
    });

    it('should create teams records', () => {
      const { fightService, teamsRepositoryMock } = getFightService();

      fightService.fightInitialized(payloadDTO);

      expect(teamsRepositoryMock.insertMany).toHaveBeenCalled();
    });

    it('should create turn window records', () => {
      const { fightService, turnWindowRepository } = getFightService();

      fightService.fightInitialized(payloadDTO);

      expect(turnWindowRepository.insert).toHaveBeenCalled();
    });
  });
});
import IPlayerDTO from '../../dto/IPlayerDTO';
import PlayersService from '../PlayersService';

import DataPublisherMock from './utils/DataPublisherMock';
import RepositoryMock from './utils/RepositoryMock';
import WebsocketMock from './utils/WebsocketMock';

describe('PlayersService', () => {
  const getPlayerService = () => {
    const websocketMock = new WebsocketMock(jest);
    const dataPublisherMock = new DataPublisherMock(jest);
    const playersRepositoryMock = new RepositoryMock(jest);

    playersRepositoryMock.findOne.mockImplementation(() => {
      return {
        setHP: jest.fn(),
        setEnergy: jest.fn(),
        setStatus: jest.fn(),
        setTurnStatus: jest.fn(),
      };
    });

    const playerService = new PlayersService(
      websocketMock,
      dataPublisherMock,
      playersRepositoryMock,
    );

    return {
      playerService,
      websocketMock,
      dataPublisherMock,
      playersRepositoryMock,
    };
  };

  describe('subscriptions', () => {
    it('should be subscribed to playerUpdated method', () => {
      const { playerService, websocketMock } = getPlayerService();

      expect(websocketMock.on).toHaveBeenLastCalledWith(
        'playerUpdated',
        playerService.playerUpdated,
      );
    });
  });

  describe('playerUpdated', () => {
    const payloadDTO = {} as IPlayerDTO;

    it('should update player', () => {
      const { playerService, playersRepositoryMock } = getPlayerService();

      playerService.playerUpdated(payloadDTO);

      expect(playersRepositoryMock.update).toHaveBeenCalled();
    });

    it('should update data', () => {
      const { playerService, dataPublisherMock } = getPlayerService();

      playerService.playerUpdated(payloadDTO);

      expect(dataPublisherMock.notifyAll).toHaveBeenCalledWith('playerUpdated');
    });
  });
});
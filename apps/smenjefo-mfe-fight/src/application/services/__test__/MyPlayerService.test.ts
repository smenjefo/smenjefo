import MyPlayerService from '../MyPlayerService';

import DataPublisherMock from './utils/DataPublisherMock';
import PlayerMock from './utils/PlayerMock';
import RepositoryMock from './utils/RepositoryMock';
import MessageBusSubscriberMock from './utils/MessageBusSubscriberMock';

describe('MyPlayerService', () => {
  const getMyPlayerService = () => {
    const messageBusSubscriberMock = new MessageBusSubscriberMock(jest);
    const dataPublisherMock = new DataPublisherMock(jest);
    const playersRepositoryMock = new RepositoryMock(jest);
    const myPlayerRepositoryMock = new RepositoryMock(jest);

    const myPlayerService = new MyPlayerService(
      messageBusSubscriberMock,
      dataPublisherMock,
      playersRepositoryMock,
      myPlayerRepositoryMock,
    );

    return {
      myPlayerService,
      messageBusSubscriberMock,
      dataPublisherMock,
      playersRepositoryMock,
      myPlayerRepositoryMock,
    };
  };

  describe('subscriptions', () => {
    it('should be subscribed to profileLoaded method', () => {
      const { myPlayerService, messageBusSubscriberMock } = getMyPlayerService();

      expect(messageBusSubscriberMock.on).toHaveBeenLastCalledWith(
        'profileLoaded',
        myPlayerService.profileLoaded,
      );
    });
  });

  describe('loadProfile', () => {
    it('should send loadProfile event via message bus', () => {
      const { myPlayerService, messageBusSubscriberMock } = getMyPlayerService();

      myPlayerService.loadProfile();

      expect(messageBusSubscriberMock.sendToMessageBus).toHaveBeenCalledWith('loadProfile');
    });
  });

  describe('profileLoaded', () => {
    const payloadMock = {
      playerId: 'playerId',
      entityId: 'entityId',
      nickname: 'nickname',
    };

    it('should not update profile when player is spectator', () => {
      const { myPlayerService, playersRepositoryMock, dataPublisherMock } = getMyPlayerService();

      playersRepositoryMock.getAll.mockImplementation(() => {
        return [];
      });

      myPlayerService.profileLoaded(payloadMock);

      expect(dataPublisherMock.notifyAll).not.toHaveBeenCalledWith('profileLoaded');
    });

    it('should not update profile if myPlayerRepository already has some profile', () => {
      const {
        myPlayerService,
        playersRepositoryMock,
        myPlayerRepositoryMock,
        dataPublisherMock,
      } = getMyPlayerService();

      const playerMock = new PlayerMock(jest);

      playerMock.getEntityId.mockImplementation(() => {
        return payloadMock.entityId;
      });

      playersRepositoryMock.getAll.mockImplementation(() => {
        return [
          playerMock,
        ];
      });

      myPlayerRepositoryMock.findAny.mockImplementation(() => {
        return playerMock;
      });

      myPlayerService.profileLoaded(payloadMock);

      expect(dataPublisherMock.notifyAll).not.toHaveBeenCalledWith('profileLoaded');
    });

    it('should update profile', () => {
      const { myPlayerService, playersRepositoryMock, dataPublisherMock } = getMyPlayerService();

      const playerMock = new PlayerMock(jest);

      playerMock.getEntityId.mockImplementation(() => {
        return payloadMock.entityId;
      });

      playersRepositoryMock.getAll.mockImplementation(() => {
        return [
          playerMock,
        ];
      });

      myPlayerService.profileLoaded(payloadMock);

      expect(dataPublisherMock.notifyAll).toHaveBeenCalledWith('profileLoaded');
    });

    it('should add new profile to repository', () => {
      const { myPlayerService, playersRepositoryMock, myPlayerRepositoryMock } = getMyPlayerService();

      const playerMock = new PlayerMock(jest);

      playerMock.getEntityId.mockImplementation(() => {
        return payloadMock.entityId;
      });

      playersRepositoryMock.getAll.mockImplementation(() => {
        return [
          playerMock,
        ];
      });

      myPlayerService.profileLoaded(payloadMock);

      expect(myPlayerRepositoryMock.insert).toHaveBeenCalled();
    });
  });
});
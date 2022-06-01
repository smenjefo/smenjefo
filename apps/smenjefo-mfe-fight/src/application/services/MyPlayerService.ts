import { IMessageBusSubscriber } from '@smenjefo/smenjefo-mfe';

import IDataPublisher from '../../data/DataPublisher/IDataPublisher';
import MyPlayerModel from '../../data/models/MyPlayerModel';
import PlayerModel from '../../data/models/PlayerModel';
import IRepository from '../../data/repository/IRepository';
import IMyPlayerDTO from '../dto/IMyPlayerDTO';

export default class MyPlayerService {
  constructor(
    private readonly messageBus: IMessageBusSubscriber,
    private readonly dataPublisher: IDataPublisher,
    private readonly playersRepository: IRepository<PlayerModel>,
    private readonly myPlayerRepository: IRepository<MyPlayerModel>,
  ) {
    this.messageBus.on('profileLoaded', this.profileLoaded);
  }

  public loadProfile = () => {
    this.messageBus.sendToMessageBus('loadProfile');
  };

  public profileLoaded = (payload: IMyPlayerDTO) => {
    const players = this.playersRepository.getAll();

    const playerByEntityId = players.find((player) => {
      return player.getEntityId() === payload.entityId;
    });

    // spectator
    if (!playerByEntityId) {
      return null;
    }

    const myPlayer = this.myPlayerRepository.findAny();

    if (!myPlayer) {
      const newMyPlayer = new MyPlayerModel(
        payload.entityId,
        playerByEntityId.getId(),
        payload.nickname,
      );

      this.myPlayerRepository.insert(newMyPlayer);

      this.dataPublisher.notifyAll('profileLoaded');
    }
  };
}
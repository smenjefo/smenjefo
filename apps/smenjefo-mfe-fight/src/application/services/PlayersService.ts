import IPlayerDTO from '../dto/IPlayerDTO';
import { IWebSocket } from '@smenjefo/smenjefo-mfe';
import IDataPublisher from '../../data/DataPublisher/IDataPublisher';
import IRepository from '../../data/repository/IRepository';
import PlayerModel from '../../data/models/PlayerModel';

export default class PlayersService {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly dataPublisher: IDataPublisher,
    private readonly playersRepository: IRepository<PlayerModel>,
  ) {
    this.websocket.on('playerUpdated', this.playerUpdated);
  }

  public playerUpdated = (playerDTO: IPlayerDTO) => {
    const player = this.playersRepository.findOne({ id: playerDTO.id });

    player.setHP(playerDTO.hp);
    player.setEnergy(playerDTO.energy);
    player.setStatus(playerDTO.status);
    player.setTurnStatus(playerDTO.turnStatus);

    this.playersRepository.update(player);

    this.dataPublisher.notifyAll('playerUpdated');
  };
}
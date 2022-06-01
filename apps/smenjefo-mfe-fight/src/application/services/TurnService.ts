import { IWebSocket } from '@smenjefo/smenjefo-mfe';

import ITurnWindowMakeTurnDTO from '../dto/ITurnWindowMakeTurnDTO';
import ITurnMadeDTO from '../dto/ITurnMadeDTO';
import IDataPublisher from '../../data/DataPublisher/IDataPublisher';
import IRepository from '../../data/repository/IRepository';
import PlayerModel from '../../data/models/PlayerModel';
import TurnWindowModel from '../../data/models/TurnWindowModel';
import StatusModel from '../../data/models/StatusModel';
import RoundService from './RoundService';

export default class TurnService {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly dataPublisher: IDataPublisher,
    private readonly roundService: RoundService,
    private readonly playersRepository: IRepository<PlayerModel>,
    private readonly turnWindowRepository: IRepository<TurnWindowModel>,
    private readonly statusRepository: IRepository<StatusModel>,
  ) {
    this.websocket.on('turnMade', this.turnMade);
  }

  public makeTurn = (payload: ITurnWindowMakeTurnDTO) => {
    const turnWindow = this.turnWindowRepository.findAny();
    const status = this.statusRepository.findAny();

    this.websocket.emit('makeTurn', {
      turnType: payload.turnType,
      fightId: status.getFightId(),
      roundId: status.getCurrentRoundId(),
      initiatorId: turnWindow.getInitiatorId(),
      targetId: turnWindow.getTargetId(),
    });

    turnWindow.setIsOpened(false);
    turnWindow.setTurnList([]);
    turnWindow.setInitiatorId(null);
    turnWindow.setTargetId(null);

    this.turnWindowRepository.update(turnWindow);

    this.dataPublisher.notifyAll('makeTurn');
  };

  public turnMade = (payload: ITurnMadeDTO) => {
    const players = this.playersRepository.getAll();

    const player = players.find((playerFromRepository) => {
      return playerFromRepository.getId() === payload.initiatorId;
    });

    if (!player) {
      return;
    }

    player.setTurnStatus('completed');

    this.playersRepository.update(player);

    const allTurnsAreCompleted = players.every((playerFromRepository) => {
      return (
        playerFromRepository.getTurnStatus() === 'completed' ||
        playerFromRepository.getStatus() === 'eliminated'
      );
    });

    if (allTurnsAreCompleted) {
      this.roundService.loadNextFightRound();
    }

    this.dataPublisher.notifyAll('turnMade');
  };
}
import { IWebSocket } from '@smenjefo/smenjefo-mfe';

import HistoryModel from '../../data/models/HistoryModel';
import PlayerModel from '../../data/models/PlayerModel';
import StatusModel from '../../data/models/StatusModel';
import MyPlayerService from './MyPlayerService';
import HistoryRecordPlayerModel from '../../data/models/HistoryRecordPlayerModel';
import IRound from '../dto/IRoundDTO';
import INewFightRoundCreatedDTO from '../dto/INewFightRoundCreatedDTO';
import IRepository from '../../data/repository/IRepository';
import MyPlayerModel from '../../data/models/MyPlayerModel';
import IDataPublisher from '../../data/DataPublisher/IDataPublisher';

export default class RoundService {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly dataPublisher: IDataPublisher,
    private readonly myPlayerService: MyPlayerService,
    private readonly statusRepository: IRepository<StatusModel>,
    private readonly playersRepository: IRepository<PlayerModel>,
    private readonly historyRepository: IRepository<HistoryModel>,
    private readonly myPlayerRepository: IRepository<MyPlayerModel>,
  ) {
    this.websocket.on('fightRoundLoaded', this.fightRoundLoaded);
    this.websocket.on('newFightRoundCreated', this.newFightRoundCreated);
  }

  public fightRoundLoaded = (payload: IRound) => {
    // record all players
    const players = payload.players.map((player) => {
      return new PlayerModel(
        player.id,
        player.entityId,
        player.nickname,
        player.hp,
        player.energy,
        player.role,
        player.avatarURL,
        player.team,
        player.status,
        player.turnStatus,
      );
    });

    this.playersRepository.removeAll();
    this.playersRepository.insertMany(players);

    // record history
    const histories = payload.history.map((history) => {
      return new HistoryModel(
        history.id,
        history.turnDirection,
        history.historyRecordPlayers.map((historyRecordPlayer) => {
          return new HistoryRecordPlayerModel(
            historyRecordPlayer.id,
            historyRecordPlayer.role,
            historyRecordPlayer.nickname,
            historyRecordPlayer.turnType,
            historyRecordPlayer.changedHP,
            historyRecordPlayer.changedEnergy,
          );
        }),
      );
    });

    this.historyRepository.removeAll();
    this.historyRepository.insertMany(histories);

    // status updating
    const status = this.statusRepository.findAny();

    status.setCurrentRoundId(payload.id);
    status.setNextRoundId(payload.nextRoundId);
    status.setRemainingTime(payload.remainingTime);
    status.setCurrentRoundNumber(payload.number);
    status.setStatus(payload.fightStatus);

    this.statusRepository.update(status);

    this.dataPublisher.notifyAll('fightRoundLoaded');

    // load profile if empty
    const myPlayer = this.myPlayerRepository.findAny();

    if (!myPlayer) {
      this.myPlayerService.loadProfile();
    }
  };

  public loadCurrentFightRound = () => {
    const status = this.statusRepository.findAny();

    this.websocket.emit('loadFightRound', {
      fightId: status.getFightId(),
      roundId: status.getCurrentRoundId(),
    });
  };

  public loadNextFightRound = () => {
    const status = this.statusRepository.findAny();

    this.websocket.emit('loadFightRound', {
      fightId: status.getFightId(),
      roundId: status.getNextRoundId(),
    });
  };

  public newFightRoundCreated = (payload: INewFightRoundCreatedDTO) => {
    const status = this.statusRepository.findAny();

    this.websocket.emit('loadFightRound', {
      fightId: status.getFightId(),
      roundId: payload.id,
    });
  };
}
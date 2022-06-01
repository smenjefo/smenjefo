import { IWebSocket } from '@smenjefo/smenjefo-mfe';

import StatusModel from '../../data/models/StatusModel';
import TeamModel from '../../data/models/TeamModel';
import TurnWindowModel from '../../data/models/TurnWindowModel';
import IFightInformationDTO from '../dto/IFightInformationDTO';
import IFightInitializedDTO from '../dto/IFightInitializedDTO';
import IDataPublisher from '../../data/DataPublisher/IDataPublisher';
import RoundService from './RoundService';
import IRepository from '../../data/repository/IRepository';

export default class FightService {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly dataPublisher: IDataPublisher,
    private readonly roundService: RoundService,
    private readonly statusRepository: IRepository<StatusModel>,
    private readonly teamsRepository: IRepository<TeamModel>,
    private readonly turnWindowRepository: IRepository<TurnWindowModel>,
    private readonly fightInformationDTO: IFightInformationDTO,
  ) {
    this.websocket.on('fightInitialized', this.fightInitialized);
  }

  public initializeFight = () => {
    this.websocket.emit('initializeFight', { id: this.fightInformationDTO.fightId });
  };

  public fightInitialized = (payload: IFightInitializedDTO) => {
    // record fight status
    const status = new StatusModel(
      payload.status.type,
      payload.status.fightId,
      payload.status.currentRoundId,
      null,
      null,
      null,
      payload.status.status,
    );

    this.statusRepository.removeAll();
    this.statusRepository.insert(status);

    // record teams
    const teams = payload.teams.map((team) => {
      return new TeamModel(
        team.teamId,
      );
    });

    this.teamsRepository.removeAll();
    this.teamsRepository.insertMany(teams);

    // turn window
    const newTurnWindow = new TurnWindowModel(
      false,
      [],
      null,
      null,
    );

    this.turnWindowRepository.removeAll();
    this.turnWindowRepository.insert(newTurnWindow);

    this.dataPublisher.notifyAll('fightInitialized');

    this.roundService.loadCurrentFightRound();
  };
}
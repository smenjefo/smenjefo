import Repository from './Repository';
import StatusModel from '../models/StatusModel';
import HistoryModel from '../models/HistoryModel';
import PlayerModel from '../models/PlayerModel';
import MyPlayerModel from '../models/MyPlayerModel';
import TurnWindowModel from '../models/TurnWindowModel';
import TeamModel from '../models/TeamModel';

export default class RepositoryRegistry {
  constructor(
    public readonly myPlayerRepository: Repository<MyPlayerModel>,
    public readonly playersRepository: Repository<PlayerModel>,
    public readonly teamsRepository: Repository<TeamModel>,
    public readonly statusRepository: Repository<StatusModel>,
    public readonly historyRepository: Repository<HistoryModel>,
    public readonly turnWindowRepository: Repository<TurnWindowModel>,
  ) {}
}
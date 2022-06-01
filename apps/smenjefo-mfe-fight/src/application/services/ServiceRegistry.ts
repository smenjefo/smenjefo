import FightService from "./FightService";
import PlayersService from "./PlayersService";
import TurnService from "./TurnService";
import MyPlayerService from "./MyPlayerService";
import RoundService from "./RoundService";
import TurnWindowService from "./TurnWindowService";

export default class ServiceRegistry {
  constructor(
    public readonly myPlayerService: MyPlayerService,
    public readonly roundService: RoundService,
    public readonly fightService: FightService,
    public readonly playersService: PlayersService,
    public readonly turnService: TurnService,
    public readonly turnWindowService: TurnWindowService,
  ) {}
}
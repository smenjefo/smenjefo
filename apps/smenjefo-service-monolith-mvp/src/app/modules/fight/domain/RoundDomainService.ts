import { Injectable } from "@nestjs/common";

import Fight from "../entities/fight.entity";
import FightDomain from "./Fight/Fight";
import FightConfigurationFactory from "./FightConfiguration/FightConfigurationFactory";
import DomainPlayer from "./Player/Player";
import TurnStatusFactory from "./TurnStatus/TurnStatusFactory";
import TimeRoundTimingValidation from "./RoundTimingValidation/TimeRoundTimingValidation";
import TurnRoundTimingValidation from "./RoundTimingValidation/TurnRoundTimingValidation";
import RoundTime from "./RoundTime/RoundTime";
import IFightConfiguration from "./FightConfiguration/IFightConfiguration";
import Round from "../entities/round.entity";
import PlayerStatusFactory from "./PlayerStatus/PlayerStatusFactory";

@Injectable()
export default class RoundDomainService {
  private checkIsRoundEndedByTurn = (round: Round) => {
    const turnStatusFactory = new TurnStatusFactory();
    const playerStatusFactory = new PlayerStatusFactory();

    const domainPlayers = round.players.map((player) => {
      const turnStatus = turnStatusFactory.create(player.turnStatus);
      const status = playerStatusFactory.create(player.status);

      const domainPlayer = new DomainPlayer(
        player.nickname,
        player.entityId,
        turnStatus,
        status,
      );

      return domainPlayer;
    });

    const turnRoundTimingValidation = new TurnRoundTimingValidation(domainPlayers);

    return turnRoundTimingValidation.isRoundEnded();
  };

  private checkIsRoundEndedByTime = (fight: Fight, round: Round) => {
    const fightConfigurationFactory = new FightConfigurationFactory();
    const fightConfiguration = fightConfigurationFactory.create(fight.fightConfigurationType);

    const fightDomain = new FightDomain(
      round.createdAt,
      round.endsAt,
    );

    const timeRoundTimingValidation = new TimeRoundTimingValidation(
      fightConfiguration,
      fightDomain,
    );

    return timeRoundTimingValidation.isRoundEnded();
  };

  public isRoundEnded = (fight: Fight, round: Round): boolean => {
    return (
      this.checkIsRoundEndedByTurn(round) ||
      this.checkIsRoundEndedByTime(fight, round)
    );
  };

  public getCurrentTime = (fightConfiguration: IFightConfiguration) => {
    const roundTime = new RoundTime(fightConfiguration);
    return roundTime.getCurrentTime();
  };

  public getEndsAtTime = (fightConfiguration: IFightConfiguration) => {
    const roundTime = new RoundTime(fightConfiguration);
    return roundTime.getEndsAtTime();
  };
}
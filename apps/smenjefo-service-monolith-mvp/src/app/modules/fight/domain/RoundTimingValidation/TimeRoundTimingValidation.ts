import Fight from "../Fight/Fight";
import IFightConfiguration from "../FightConfiguration/IFightConfiguration";
import IRoundTimingValidation from "./IRoundTimingValidation";

export default class TimeRoundTimingValidation implements IRoundTimingValidation {
  constructor(
    private readonly fightConfiguration: IFightConfiguration,
    private readonly fight: Fight,
  ) {}

  private getElapsedTimeInSeconds = () => {
    const elapsedTimeAsTimestamp = Date.now() - new Date(this.fight.getEndsAt()).getTime();
    const elapsedTimeInSeconds = Math.abs(elapsedTimeAsTimestamp / 1000);

    return elapsedTimeInSeconds;
  };

  public isRoundEnded = () => {
    const elapsedTimeInSeconds = this.getElapsedTimeInSeconds();

    return elapsedTimeInSeconds > this.fightConfiguration.timeForTurn; 
  };
}
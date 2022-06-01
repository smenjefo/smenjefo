import IFightConfiguration from "../FightConfiguration/IFightConfiguration";

export default class RoundTime {
  constructor(
    private readonly fightConfiguration: IFightConfiguration,
  ) {}

  private secondsToMilliseconds = (timeInSeconds: number) => {
    return timeInSeconds * 1000;
  };

  public formatDate = (date: Date) => {
    return date.toISOString();
  };

  public getCurrentTime = () => {
    const currentTime = new Date();

    return this.formatDate(currentTime);
  };

  public getEndsAtTime = () => {
    const currentTime = new Date();
    const endsAtTime = new Date(
      currentTime.getTime() + this.secondsToMilliseconds(this.fightConfiguration.timeForTurn)
    );

    return this.formatDate(endsAtTime);
  };
}
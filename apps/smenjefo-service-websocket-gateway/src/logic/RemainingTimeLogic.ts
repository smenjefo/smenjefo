export default class RemainingTimeLogic {
  private readonly ELAPSED_REMAINING_TIME_IN_SECONDS = 0;

  constructor(
    private readonly fallbackTimeInSeconds: number,
  ) {}

  public isNeedToCreateNewRound = (timeInSeconds: number) => {
    return timeInSeconds <= this.ELAPSED_REMAINING_TIME_IN_SECONDS;
  };

  public getRemainingTimeForRoundInSeconds = (endsAt: string) => {
    try {
      const endsAtDate = new Date(endsAt);

      const currentTime = Date.now();
      const endsAtTime = endsAtDate.getTime();

      if (endsAtTime < currentTime) {
        return this.ELAPSED_REMAINING_TIME_IN_SECONDS;
      }

      const remainingTimeInMilliseconds = endsAtTime - currentTime;
      const remainingTimeInSeconds = Math.round(remainingTimeInMilliseconds / 1000);
      const positiveRemainingTime = Math.max(remainingTimeInSeconds, 0);

      return positiveRemainingTime;
    } catch (e) {
      return this.fallbackTimeInSeconds;
    }
  };
}
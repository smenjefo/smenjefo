import IModel from "./IModel";

export default class StatusModel implements IModel {
  constructor(
    private type: string,
    private fightId: string,
    private currentRoundId: string,
    private nextRoundId: string,
    private remainingTime: number,
    private currentRoundNumber: number,
    private status: string,
  ) {}

  public getType = () => {
    return this.type;
  };

  public getFightId = () => {
    return this.fightId;
  };

  public getCurrentRoundId = () => {
    return this.currentRoundId;
  };

  public setCurrentRoundId = (currentRoundId: string) => {
    this.currentRoundId = currentRoundId;
  };

  public getNextRoundId = () => {
    return this.nextRoundId;
  };

  public setNextRoundId = (nextRoundId: string) => {
    this.nextRoundId = nextRoundId;
  };

  public getRemainingTime = () => {
    return this.remainingTime;
  };

  public setRemainingTime = (remainingTime: number) => {
    this.remainingTime = remainingTime;
  };

  public getCurrentRoundNumber = () => {
    return this.currentRoundNumber;
  };

  public setCurrentRoundNumber = (currentRoundNumber: number) => {
    this.currentRoundNumber = currentRoundNumber;
  };

  public getStatus = () => {
    return this.status;
  };

  public setStatus = (status: string) => {
    this.status = status;
  };

  public toJSON = () => {
    return {
      type: this.type,
      fightId: this.fightId,
      currentRound: this.currentRoundId,
      nextRoundId: this.nextRoundId,
      remainingTime: this.remainingTime,
      currentRoundNumber: this.currentRoundNumber,
      status: this.status,
    };
  };
}
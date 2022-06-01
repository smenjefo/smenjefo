import IModel from "./IModel";

export default class MyPlayerModel implements IModel {
  constructor(
    private entityId: string,
    private playerId: string,
    private nickname: string,
  ) {}

  public getEntityId = () => {
    return this.entityId;
  };

  public getPlayerId = () => {
    return this.playerId;
  };

  public getNickname = () => {
    return this.nickname;
  };

  public setPlayerId = (playerId: string) => {
    this.playerId = playerId;
  };

  public toJSON = () => {
    return {
      entityId: this.entityId,
      playerId: this.playerId,
      nickname: this.nickname,
    };
  };
}
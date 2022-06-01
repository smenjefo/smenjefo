import IModel from "./IModel";

export default class PlayerModel implements IModel {
  constructor(
    private id: string,
    private entityId: string,
    private nickname: string,
    private hp: number,
    private energy: number,
    private role: string,
    private avatarURL: string,
    private team: string,
    private status: string,
    private turnStatus: string,
  ) {}

  public getId = () => {
    return this.id;
  };

  public getEntityId = () => {
    return this.entityId;
  };

  public getRole = () => {
    return this.role;
  };

  public getTeam = () => {
    return this.team;
  };

  public getStatus = () => {
    return this.status;
  };

  public getTurnStatus = () => {
    return this.turnStatus;
  };

  public setHP = (hp: number) => {
    this.hp = hp;
  };

  public getEnergy = () => {
    return this.energy;
  };

  public setEnergy = (energy: number) => {
    this.energy = energy;
  };

  public setStatus = (status: string) => {
    this.status = status;
  };

  public setTurnStatus = (turnStatus: string) => {
    this.turnStatus = turnStatus;
  };

  public toJSON = () => {
    return {
      id: this.id,
      entityId: this.entityId,
      nickname: this.nickname,
      hp: this.hp,
      energy: this.energy,
      role: this.role,
      avatarURL: this.avatarURL,
      team: this.team,
      status: this.status,
      turnStatus: this.turnStatus,
    };
  };
}
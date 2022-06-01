import IModel from "./IModel";

export default class HistoryRecordPlayerModel implements IModel {
  constructor(
	  private id: string,
	  private role: string,
	  private nickname: string,
	  private turnType: string,
	  private changedHP: string,
	  private changedEnergy: string,
  ) {}

  public toJSON = () => {
    return {
      id: this.id,
      role: this.role,
      nickname: this.nickname,
      turnType: this.turnType,
      changedHP: this.changedHP,
      changedEnergy: this.changedEnergy,
    };
  };
}
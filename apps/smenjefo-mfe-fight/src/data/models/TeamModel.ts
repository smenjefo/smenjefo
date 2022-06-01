import IModel from "./IModel";

export default class TeamModel implements IModel {
  constructor(
    private teamId: string,
  ) {}

  public getTeamId = () => {
    return this.teamId;
  };

  public toJSON = () => {
    return {
      teamId: this.teamId,
    };
  };
}
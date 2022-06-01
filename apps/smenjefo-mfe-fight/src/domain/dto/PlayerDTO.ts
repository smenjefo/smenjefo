export default class PlayerDTO {
  constructor(
    private readonly id: string,
    private readonly teamId: string,
    private readonly playerRole: string,
    private readonly playerStatus: string,
    private readonly playerTurnStatus: string,
    private readonly energy: number,
  ) {}

  public getId = () => {
    return this.id;
  };

  public getTeamId = () => {
    return this.teamId;
  };

  public getPlayerRole = () => {
    return this.playerRole;
  };

  public getPlayerStatus = () => {
    return this.playerStatus;
  };

  public getPlayerTurnStatus = () => {
    return this.playerTurnStatus;
  };

  public getEnergy = () => {
    return this.energy;
  };
}
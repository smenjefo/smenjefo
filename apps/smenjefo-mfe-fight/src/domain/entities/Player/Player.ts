import IPlayerRole from "../PlayerRole/IPlayerRole";
import IPlayerStatus from "../PlayerStatus/IPlayerStatus";
import IPlayerTurnStatus from "../PlayerTurnStatus/IPlayerTurnStatus";

export default class Player {
  constructor(
    private readonly id: string,
    private readonly teamId: string,
    private readonly playerRole: IPlayerRole,
    private readonly playerStatus: IPlayerStatus,
    private readonly playerTurnStatus: IPlayerTurnStatus,
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
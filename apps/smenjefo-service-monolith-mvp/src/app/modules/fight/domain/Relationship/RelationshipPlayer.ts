export default class RelationshipPlayer {
  constructor(
    private readonly playerEntityId: string,
    private readonly playerTeamId: string,
  ) {}

  public getPlayerEntityId = () => {
    return this.playerEntityId;
  }

  public getPlayerTeamId = () => {
    return this.playerTeamId;
  }
}
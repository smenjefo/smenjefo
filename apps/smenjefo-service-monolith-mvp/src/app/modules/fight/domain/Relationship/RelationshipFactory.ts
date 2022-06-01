import RelationshipPlayer from "./RelationshipPlayer";
import EnemyRelationship from "./EnemyRelationship";
import MyPlayerRelationship from "./MyPlayerRelationship";
import TeammateRelationship from "./TeammateRelationship";

export default class RelationshipFactory {
  constructor(
    private readonly turnInitiator: RelationshipPlayer,
    private readonly turnTarget: RelationshipPlayer,
  ) {}

  public create = () => {
    if (this.turnInitiator.getPlayerEntityId() === this.turnTarget.getPlayerEntityId()) {
      return new MyPlayerRelationship();
    }

    if (this.turnInitiator.getPlayerTeamId() === this.turnTarget.getPlayerTeamId()) {
      return new TeammateRelationship();
    }

    if (this.turnInitiator.getPlayerTeamId() !== this.turnTarget.getPlayerTeamId()) {
      return new EnemyRelationship();
    }
  };
}
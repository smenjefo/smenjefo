import Player from "../Player/Player";
import EnemyRelationship from "./EnemyRelationship";
import SelfRelationship from "./SelfRelationship";
import TeammateRelationship from "./TeammateRelationship";

export default class RelationshipFactory {
  public create = (turnInitiator: Player, turnTarget: Player) => {
    if (turnInitiator.getId() === turnTarget.getId()) {
      return new SelfRelationship();
    }

    if (turnInitiator.getTeamId() === turnTarget.getTeamId()) {
      return new TeammateRelationship();
    }

    if (turnInitiator.getTeamId() !== turnTarget.getTeamId()) {
      return new EnemyRelationship();
    }
  };
}
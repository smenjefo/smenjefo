import ITurnType from "../TurnType/ITurnType";
import IRelationship from "../Relationship/IRelationship";
import EnemyRelationship from "../Relationship/EnemyRelationship";
import SelfRelationship from "../Relationship/SelfRelationship";
import TeammateRelationship from "../Relationship/TeammateRelationship";

export default abstract class TurnTypeListFactory {
  abstract createForEnemy(): ITurnType[];
  abstract createForTeammate(): ITurnType[];
  abstract createForSelf(): ITurnType[];

  public create = (relationship: IRelationship) => {
    if (relationship instanceof EnemyRelationship) {
      return this.createForEnemy();
    }

    if (relationship instanceof TeammateRelationship) {
      return this.createForTeammate();
    }

    if (relationship instanceof SelfRelationship) {
      return this.createForSelf();
    }
  };
}
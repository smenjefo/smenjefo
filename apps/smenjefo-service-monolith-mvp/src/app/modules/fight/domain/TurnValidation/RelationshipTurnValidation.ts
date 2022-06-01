import EnemyRelationship from "../Relationship/EnemyRelationship";
import IRelationship from "../Relationship/IRelationship";
import MyPlayerRelationship from "../Relationship/MyPlayerRelationship";
import TeammateRelationship from "../Relationship/TeammateRelationship";
import AttackingTurnTypeCategory from "../TurnTypeCategory/AttackingTurnTypeCategory";
import DefensiveTurnTypeCategory from "../TurnTypeCategory/DefensiveTurnTypeCategory";
import HelpingTurnTypeCategory from "../TurnTypeCategory/HelpingTurnTypeCategory";
import ITurnTypeCategory from "../TurnTypeCategory/ITurnTypeCategory";
import SystemTurnTypeCategory from "../TurnTypeCategory/SystemTurnTypeCategory";
import ITurnValidation from "./ITurnValidation";

export default class RelationshipTurnValidation implements ITurnValidation {
  constructor(
    private readonly relationship: IRelationship,
    private readonly turnInitiatorTurnTypeCategory: ITurnTypeCategory,
  ) {}

  public validate = () => {
    if (
      this.relationship instanceof TeammateRelationship &&
      this.turnInitiatorTurnTypeCategory instanceof HelpingTurnTypeCategory
    ) {
      return true;
    }

    if (
      this.relationship instanceof EnemyRelationship &&
      this.turnInitiatorTurnTypeCategory instanceof AttackingTurnTypeCategory
    ) {
      return true;
    }

    if (
      this.relationship instanceof MyPlayerRelationship &&
      this.turnInitiatorTurnTypeCategory instanceof DefensiveTurnTypeCategory
    ) {
      return true;
    }

    if (
      this.relationship instanceof MyPlayerRelationship &&
      this.turnInitiatorTurnTypeCategory instanceof SystemTurnTypeCategory
    ) {
      return true;
    }

    return false;
  };
}
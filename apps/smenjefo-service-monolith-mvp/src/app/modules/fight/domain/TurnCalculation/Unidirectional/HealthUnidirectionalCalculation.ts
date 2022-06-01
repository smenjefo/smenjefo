import IUnidirectionalCalculation from "./IUnidirectionalCalculation";
import AttackingTurnTypeCategory from "../../TurnTypeCategory/AttackingTurnTypeCategory";
import DefensiveTurnTypeCategory from "../../TurnTypeCategory/DefensiveTurnTypeCategory";
import HelpingTurnTypeCategory from "../../TurnTypeCategory/HelpingTurnTypeCategory";
import AttackingVsAttackingStrategy from "../HealthCalculationStrategy/AttackingVsAttackingStrategy";
import AttackingVsDefendingStrategy from "../HealthCalculationStrategy/AttackingVsDefendingStrategy";
import AttackingStrategy from "../HealthCalculationStrategy/AttackingStrategy";
import HelpingStrategy from "../HealthCalculationStrategy/HelpingStrategy";
import ICalculatable from "../ICalculatable";

export default class HealthMutualCalculation implements IUnidirectionalCalculation, ICalculatable {
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    if (initiatorTurnType instanceof AttackingTurnTypeCategory) {
      if (targetTurnType instanceof AttackingTurnTypeCategory) {
        new AttackingVsAttackingStrategy().calculate(
          initiator,
          target,
          initiatorTurnType,
          targetTurnType,
        );
      } else if (targetTurnType instanceof DefensiveTurnTypeCategory) {
        new AttackingVsDefendingStrategy().calculate(
          initiator,
          target,
          initiatorTurnType,
          targetTurnType,
        );
      } else {
        new AttackingStrategy().calculate(
          initiator,
          target,
          initiatorTurnType,
          targetTurnType,
        );
      }
    } else if (initiatorTurnType instanceof HelpingTurnTypeCategory) {
      new HelpingStrategy().calculate(
        initiator,
        target,
        initiatorTurnType,
        targetTurnType,
      );
    }
  };
}
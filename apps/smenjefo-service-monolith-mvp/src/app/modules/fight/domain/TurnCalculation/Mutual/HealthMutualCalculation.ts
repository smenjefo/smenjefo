import IMutualCalculation from "./IMutualCalculation";
import AttackingTurnTypeCategory from "../../TurnTypeCategory/AttackingTurnTypeCategory";
import DefensiveTurnTypeCategory from "../../TurnTypeCategory/DefensiveTurnTypeCategory";
import HelpingTurnTypeCategory from "../../TurnTypeCategory/HelpingTurnTypeCategory";
import AttackingVsAttackingStrategy from "../HealthCalculationStrategy/AttackingVsAttackingStrategy";
import AttackingVsDefendingStrategy from "../HealthCalculationStrategy/AttackingVsDefendingStrategy";
import AttackingStrategy from "../HealthCalculationStrategy/AttackingStrategy";
import ICalculatable from "../ICalculatable";
import HelpingToHelpingStrategy from "../HealthCalculationStrategy/HelpingToHelpingStrategy";

export default class HealthMutualCalculation implements IMutualCalculation, ICalculatable {
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
      if (targetTurnType instanceof HelpingTurnTypeCategory) {
        new HelpingToHelpingStrategy().calculate(
          initiator,
          target,
          initiatorTurnType,
          targetTurnType,
        );
      }
    }
  };
}
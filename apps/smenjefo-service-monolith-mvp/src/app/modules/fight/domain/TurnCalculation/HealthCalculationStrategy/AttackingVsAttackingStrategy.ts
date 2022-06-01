import ITurnType from "../../TurnType/ITurnType";
import PaperTurnType from "../../TurnType/PaperTurnType";
import RockTurnType from "../../TurnType/RockTurnType";
import ScissorsTurnType from "../../TurnType/ScissorsTurnType";
import SuperPaperTurnType from "../../TurnType/SuperPaperTurnType";
import SuperRockTurnType from "../../TurnType/SuperRockTurnType";
import SuperScissorsTurnType from "../../TurnType/SuperScissorsTurnType";
import ICalculatable from "../ICalculatable";

export default class AttackingVsAttackingStrategy implements ICalculatable {
  private isRock = (turnType: ITurnType) => {
    return (
      turnType instanceof RockTurnType ||
      turnType instanceof SuperRockTurnType
    );
  };

  private isScissors = (turnType: ITurnType) => {
    return (
      turnType instanceof ScissorsTurnType ||
      turnType instanceof SuperScissorsTurnType
    );
  };

  private isPaper = (turnType: ITurnType) => {
    return (
      turnType instanceof PaperTurnType ||
      turnType instanceof SuperPaperTurnType
    );
  };

  private getHealthCost = (initiatorTurnType, targetTurnType) => {
    return Math.max(initiatorTurnType.getHealthCost(), targetTurnType.getHealthCost());
  };

  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    const healthCost = this.getHealthCost(initiatorTurnType, targetTurnType);

    // initiator is winner
    if (
      this.isRock(initiatorTurnType) &&
      this.isScissors(targetTurnType)
    ) {
      return target.decreaseHealthBy(healthCost);
    }

    if (
      this.isScissors(initiatorTurnType) &&
      this.isPaper(targetTurnType)
    ) {
      return target.decreaseHealthBy(healthCost);
    }

    if (
      this.isPaper(initiatorTurnType) &&
      this.isRock(targetTurnType)
    ) {
      return target.decreaseHealthBy(healthCost);
    }

    // target is winner
    if (
      this.isRock(targetTurnType) &&
      this.isScissors(initiatorTurnType)
    ) {
      return initiator.decreaseHealthBy(healthCost);
    }

    if (
      this.isScissors(targetTurnType) &&
      this.isPaper(initiatorTurnType)
    ) {
      return initiator.decreaseHealthBy(healthCost);
    }

    if (
      this.isPaper(targetTurnType) &&
      this.isRock(initiatorTurnType)
    ) {
      return initiator.decreaseHealthBy(healthCost);
    }
  };
}
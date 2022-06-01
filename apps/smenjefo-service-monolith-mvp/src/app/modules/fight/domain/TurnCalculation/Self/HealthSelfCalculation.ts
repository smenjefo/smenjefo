import HandOfHelpTurnType from "../../TurnType/HandOfHelpTurnType";
import ICalculatable from "../ICalculatable";
import ISelfCalculation from "./ISelfCalculation";

export default class HealthSelfCalculation implements ISelfCalculation, ICalculatable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    if (initiatorTurnType instanceof HandOfHelpTurnType) {
      initiator.increaseHealthBy(initiatorTurnType.getHealthCost());
    }
  };
}
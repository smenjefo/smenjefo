import DonorTurnType from "../../TurnType/DonorTurnType";
import HandOfHelpTurnType from "../../TurnType/HandOfHelpTurnType";
import ICalculatable from "../ICalculatable";

export default class HelpingToHelpingStrategy implements ICalculatable {
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    if (initiatorTurnType instanceof HandOfHelpTurnType) {
      target.increaseHealthBy(initiatorTurnType.getHealthCost());
    } else if (initiatorTurnType instanceof DonorTurnType) {
      target.increaseEnergyBy(initiatorTurnType.getHealthCost());
    }

    if (targetTurnType instanceof HandOfHelpTurnType) {
      initiator.increaseHealthBy(targetTurnType.getHealthCost());
    } else if (targetTurnType instanceof DonorTurnType) {
      initiator.increaseEnergyBy(targetTurnType.getHealthCost());
    }
  };
}
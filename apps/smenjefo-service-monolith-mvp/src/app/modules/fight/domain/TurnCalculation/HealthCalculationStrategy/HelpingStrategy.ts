import DonorTurnType from "../../TurnType/DonorTurnType";
import HandOfHelpTurnType from "../../TurnType/HandOfHelpTurnType";
import ICalculatable from "../ICalculatable";

export default class HelpingStrategy implements ICalculatable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    if (initiatorTurnType instanceof HandOfHelpTurnType) {
      target.increaseHealthBy(initiatorTurnType.getHealthCost());
    } else if (initiatorTurnType instanceof DonorTurnType) {
      target.increaseEnergyBy(initiatorTurnType.getHealthCost());
    }
  };
}
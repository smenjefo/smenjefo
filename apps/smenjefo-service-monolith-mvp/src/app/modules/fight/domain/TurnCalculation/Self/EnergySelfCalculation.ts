import ICalculatable from "../ICalculatable";
import ISelfCalculation from "./ISelfCalculation";

export default class EnergySelfCalculation implements ISelfCalculation, ICalculatable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    initiator.decreaseEnergyBy(initiatorTurnType.getEnergyCost());
  };
}
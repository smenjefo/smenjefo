import ICalculatable from "../ICalculatable";
import IMutualCalculation from "./IMutualCalculation";

export default class EnergyMutualCalculation implements IMutualCalculation, ICalculatable {
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    initiator.decreaseEnergyBy(initiatorTurnType.getEnergyCost());
    target.decreaseEnergyBy(targetTurnType.getEnergyCost());
  };
}
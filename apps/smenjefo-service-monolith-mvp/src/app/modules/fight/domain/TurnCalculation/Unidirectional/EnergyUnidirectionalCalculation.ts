import ICalculatable from "../ICalculatable";
import IUnidirectionalCalculation from "./IUnidirectionalCalculation";

export default class EnergyUnidirectionalCalculation implements IUnidirectionalCalculation, ICalculatable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    initiator.decreaseEnergyBy(initiatorTurnType.getEnergyCost());
  };
}
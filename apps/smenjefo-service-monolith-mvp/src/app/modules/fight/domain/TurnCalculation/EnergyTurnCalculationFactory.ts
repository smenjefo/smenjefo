import TurnCalculationFactory from "./TurnCalculationFactory";
import EnergyMutualCalculation from "./Mutual/EnergyMutualCalculation";
import EnergySelfCalculation from "./Self/EnergySelfCalculation";
import EnergyUnidirectionalCalculation from "./Unidirectional/EnergyUnidirectionalCalculation";

export default class EnergyTurnCalculationFactory extends TurnCalculationFactory {
  public createUnidirectional = () => {
    return new EnergyUnidirectionalCalculation();
  };

  public createMutual = () => {
    return new EnergyMutualCalculation();
  };

  public createSelf = () => {
    return new EnergySelfCalculation();
  };
}
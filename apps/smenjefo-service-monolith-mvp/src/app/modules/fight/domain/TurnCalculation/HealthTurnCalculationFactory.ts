import TurnCalculationFactory from "./TurnCalculationFactory";
import HealthMutualCalculation from "./Mutual/HealthMutualCalculation";
import HealthSelfCalculation from "./Self/HealthSelfCalculation";
import HealthUnidirectionalCalculation from "./Unidirectional/HealthUnidirectionalCalculation";

export default class HealthTurnCalculationFactory extends TurnCalculationFactory {
  public createUnidirectional = () => {
    return new HealthUnidirectionalCalculation();
  };

  public createMutual = () => {
    return new HealthMutualCalculation();
  };

  public createSelf = () => {
    return new HealthSelfCalculation();
  };
}
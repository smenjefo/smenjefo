import IUnidirectionalCalculation from "./Unidirectional/IUnidirectionalCalculation";
import IMutualCalculation from "./Mutual/IMutualCalculation";
import ISelfCalculation from "./Self/ISelfCalculation";
import ITurnDirection from "../TurnDirection/ITurnDirection";
import UnidirectionalTurnDirection from "../TurnDirection/UnidirectionalTurnDirection";
import MutualTurnDirection from "../TurnDirection/MutualTurnDirection";
import SelfTurnDirection from "../TurnDirection/SelfTurnDirection";

export default abstract class TurnCalculationFactory {
  protected abstract createUnidirectional(): IUnidirectionalCalculation;
  protected abstract createMutual(): IMutualCalculation;
  protected abstract createSelf(): ISelfCalculation;

  public create = (turnDirection: ITurnDirection) => {
    if (turnDirection instanceof UnidirectionalTurnDirection) {
      return this.createUnidirectional();
    } else if (turnDirection instanceof MutualTurnDirection) {
      return this.createMutual();
    } else if (turnDirection instanceof SelfTurnDirection) {
      return this.createSelf();
    }
  };
}
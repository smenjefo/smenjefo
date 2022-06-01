import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnType from "../TurnType/ITurnType";

export default interface ICalculatable {
  calculate(
    initiator: ICalculationPlayer,
    target: ICalculationPlayer,
    initiatorTurnType: ITurnType,
    targetTurnType: ITurnType,
  ): void;
}
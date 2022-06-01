import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnDirection from "../TurnDirection/ITurnDirection";
import ITurnType from "../TurnType/ITurnType";

export default interface ITurn {
  getInitiator(): ICalculationPlayer;
  getTarget(): ICalculationPlayer;
  getInitiatorTurnType(): ITurnType;
  getTargetTurnType(): ITurnType;
  getTurnDirection(): ITurnDirection;
  setTargetTurnType(targetTurnType: ITurnType): void;
  setTurnDirection(turnDirection: ITurnDirection): void;
}
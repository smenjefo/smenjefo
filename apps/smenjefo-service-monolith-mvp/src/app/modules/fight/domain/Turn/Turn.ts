import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnDirection from "../TurnDirection/ITurnDirection";
import ITurnType from "../TurnType/ITurnType";
import ITurn from "./ITurn";

export default class Turn implements ITurn {
  constructor(
    private readonly initiator: ICalculationPlayer,
    private readonly target: ICalculationPlayer,
    private readonly initiatorTurnType: ITurnType,
    private targetTurnType: ITurnType,
    private turnDirection: ITurnDirection,
  ) {}

  public getInitiator = () => {
    return this.initiator;
  };

  public getTarget = () => {
    return this.target;
  };

  public getInitiatorTurnType = () => {
    return this.initiatorTurnType;
  };

  public getTargetTurnType = () => {
    return this.targetTurnType;
  };

  public getTurnDirection = () => {
    return this.turnDirection;
  };

  public setTargetTurnType = (targetTurnType) => {
    this.targetTurnType = targetTurnType;
  };

  public setTurnDirection = (turnDirection) => {
    this.turnDirection = turnDirection;
  };
}
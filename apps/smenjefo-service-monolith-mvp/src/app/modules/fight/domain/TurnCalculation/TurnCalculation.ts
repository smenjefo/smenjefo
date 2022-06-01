import ITurnDirection from "../TurnDirection/ITurnDirection";
import EnergyTurnCalculationFactory from "./EnergyTurnCalculationFactory";
import HealthTurnCalculationFactory from "./HealthTurnCalculationFactory";
import ICalculatable from "./ICalculatable";

export default class TurnCalculation implements ICalculatable {
  constructor(
    private readonly turnDirection: ITurnDirection,
  ) {}

  private calculateHealth = (initiator, target, initiatorTurnType, targetTurnType) => {
    const factory = new HealthTurnCalculationFactory();

    factory.create(this.turnDirection).calculate(
      initiator,
      target,
      initiatorTurnType,
      targetTurnType,
    );
  };

  private calculateEnergy = (initiator, target, initiatorTurnType, targetTurnType) => {
    const factory = new EnergyTurnCalculationFactory();

    factory.create(this.turnDirection).calculate(
      initiator,
      target,
      initiatorTurnType,
      targetTurnType,
    );
  };

  public calculate = (initiator, target, initiatorTurnType, targetTurnType) => {
    this.calculateHealth(initiator, target, initiatorTurnType, targetTurnType);
    this.calculateEnergy(initiator, target, initiatorTurnType, targetTurnType);
  };
}
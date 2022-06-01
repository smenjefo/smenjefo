import CalculationPlayer from "../CalculationPlayer/CalculationPlayer";

export default interface ICalculatable {
  calculate(...players: CalculationPlayer[]): void;
  isCompleted(): boolean;
}
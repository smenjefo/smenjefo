import IHistoryable from "../TurnHistory/IHistoryable";

export default interface ITurnType extends IHistoryable {
  getHealthCost(): number;
  getEnergyCost(): number;
}
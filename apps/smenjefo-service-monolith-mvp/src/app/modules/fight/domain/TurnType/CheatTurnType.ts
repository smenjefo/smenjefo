import ITurnType from "./ITurnType";
import DefensiveTurnTypeCategory from "../TurnTypeCategory/DefensiveTurnTypeCategory";

export default class CheatTurnType extends DefensiveTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 100;
  };

  public getEnergyCost = () => {
    return 3;
  };

  public toTextValue = () => {
    return 'cheat';
  };
}
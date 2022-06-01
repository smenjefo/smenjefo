import ITurnType from "./ITurnType";
import AttackingTurnTypeCategory from "../TurnTypeCategory/AttackingTurnTypeCategory";

export default class SuperRockTurnType extends AttackingTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 3;
  };

  public getEnergyCost = () => {
    return 2;
  };

  public toTextValue = () => {
    return 'superRock';
  };
}
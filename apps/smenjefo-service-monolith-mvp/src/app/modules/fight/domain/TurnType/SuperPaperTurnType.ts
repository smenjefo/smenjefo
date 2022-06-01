import ITurnType from "./ITurnType";
import AttackingTurnTypeCategory from "../TurnTypeCategory/AttackingTurnTypeCategory";

export default class SuperPaperTurnType extends AttackingTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 3;
  };

  public getEnergyCost = () => {
    return 2;
  };

  public toTextValue = () => {
    return 'superPaper';
  };
}
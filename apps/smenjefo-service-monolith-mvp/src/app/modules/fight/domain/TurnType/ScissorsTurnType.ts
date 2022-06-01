import ITurnType from "./ITurnType";
import AttackingTurnTypeCategory from "../TurnTypeCategory/AttackingTurnTypeCategory";

export default class ScissorsTurnType extends AttackingTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 1;
  };

  public getEnergyCost = () => {
    return 0;
  };

  public toTextValue = () => {
    return 'scissors';
  };
}
import ITurnType from "./ITurnType";
import SystemTurnTypeCategory from "../TurnTypeCategory/SystemTurnTypeCategory";

export default class SkipTurnType extends SystemTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 0;
  };

  public getEnergyCost = () => {
    return 0;
  };

  public toTextValue = () => {
    return 'skip';
  };
}
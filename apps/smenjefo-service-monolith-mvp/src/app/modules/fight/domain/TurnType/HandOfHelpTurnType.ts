import ITurnType from "./ITurnType";
import HelpingTurnTypeCategory from "../TurnTypeCategory/HelpingTurnTypeCategory";

export default class HandOfHelpTurnType extends HelpingTurnTypeCategory implements ITurnType {
  public getHealthCost = () => {
    return 1;
  };

  public getEnergyCost = () => {
    return 1;
  };

  public toTextValue = () => {
    return 'handOfHelp';
  };
}
import ITurnType from "./ITurnType";

export default class HandOfHelpTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 1;
  };
}
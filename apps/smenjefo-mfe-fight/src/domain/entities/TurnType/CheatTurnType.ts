import ITurnType from "./ITurnType";

export default class CheatTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 3;
  };
}
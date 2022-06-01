import ITurnType from "./ITurnType";

export default class SkipTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 0;
  };
}
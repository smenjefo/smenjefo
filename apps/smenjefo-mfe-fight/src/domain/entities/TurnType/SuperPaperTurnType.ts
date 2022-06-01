import ITurnType from "./ITurnType";

export default class SuperPaperTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 2;
  };
}
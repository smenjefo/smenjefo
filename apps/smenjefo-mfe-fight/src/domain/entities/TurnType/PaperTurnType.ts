import ITurnType from "./ITurnType";

export default class PaperTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 0;
  };
}
import ITurnType from "./ITurnType";

export default class RockTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 0;
  };
}
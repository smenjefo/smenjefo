import ITurnType from "./ITurnType";

export default class SuperRockTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 2;
  };
}
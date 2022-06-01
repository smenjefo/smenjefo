import ITurnType from "./ITurnType";

export default class SuperScissorsTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 2;
  };
}
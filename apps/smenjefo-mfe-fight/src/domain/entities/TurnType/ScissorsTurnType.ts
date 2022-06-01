import ITurnType from "./ITurnType";

export default class ScissorsTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 0;
  };
}
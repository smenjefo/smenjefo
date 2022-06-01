import ITurnType from "./ITurnType";

export default class DonorTurnType implements ITurnType {
  public getEnergyCost = () => {
    return 1;
  };
}
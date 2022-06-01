import ITurnType from "../TurnType/ITurnType";

export default class TurnTypeForMake {
  constructor(
    private readonly turnType: ITurnType,
    private readonly energyCost: number,
    private readonly isDisabled: boolean,
  ) {}

  public getTurnType = () => {
    return this.turnType;
  };

  public getEnergyCost = () => {
    return this.energyCost;
  };

  public getIsDisabled = () => {
    return this.isDisabled;
  };
}
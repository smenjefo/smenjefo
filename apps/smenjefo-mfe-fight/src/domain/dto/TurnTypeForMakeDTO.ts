export default class TurnTypeForMakeDTO {
  constructor(
    private readonly type: string,
    private readonly energyCost: number,
    private readonly isDisabled: boolean,
  ) {}

  public getType = () => {
    return this.type;
  };

  public getEnergyCost = () => {
    return this.energyCost;
  };

  public getIsDisabled = () => {
    return this.isDisabled;
  };
}
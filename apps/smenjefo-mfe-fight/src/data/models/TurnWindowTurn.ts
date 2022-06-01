import IModel from "./IModel";

export default class TurnWindowTurn implements IModel {
  constructor(
    private type: string,
    private energyCost: number,
    private isDisabled: boolean,
  ) {}

  public getType = () => {
    return this.type;
  };

  public setType = (type: string) => {
    this.type = type;
  };

  public getEnergyCost = () => {
    return this.energyCost;
  };

  public setEnergyCost = (energyCost: number) => {
    this.energyCost = energyCost;
  };

  public getIsDisabled = () => {
    return this.isDisabled;
  };

  public toJSON = () => {
    return {
      type: this.type,
      energyCost: this.energyCost,
      isDisabled: this.isDisabled,
    };
  };
}
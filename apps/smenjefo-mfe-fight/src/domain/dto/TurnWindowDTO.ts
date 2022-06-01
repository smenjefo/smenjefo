import TurnTypeForMakeDTO from "./TurnTypeForMakeDTO";

export default class TurnWindowDTO {
  constructor(
    private readonly isOpened: boolean,
    private readonly turnTypesForMake: TurnTypeForMakeDTO[],
  ) {}

  public getIsOpened = () => {
    return this.isOpened;
  };

  public getTurnTypesForMake = () => {
    return this.turnTypesForMake;
  };
}
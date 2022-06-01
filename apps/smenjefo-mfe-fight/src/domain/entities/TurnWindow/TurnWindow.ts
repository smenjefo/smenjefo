import TurnTypeForMake from "../TurnTypeForMake/TurnTypeForMake";
import ITurnWindowStatus from "../TurnWindowStatus/ITurnWindowStatus";

export default class TurnWindow {
  constructor(
    private readonly turnWindowStatus: ITurnWindowStatus,
    private readonly turnTypesForMake: TurnTypeForMake[],
  ) {}

  public getTurnWindowStatus = () => {
    return this.turnWindowStatus;
  };

  public getTurnTypesForMake = () => {
    return this.turnTypesForMake;
  };
}
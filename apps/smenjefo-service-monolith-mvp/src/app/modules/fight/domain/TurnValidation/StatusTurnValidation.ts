import InGamePlayerStatus from "../PlayerStatus/InGamePlayerStatus";
import IPlayerStatus from "../PlayerStatus/IPlayerStatus";
import ITurnValidation from "./ITurnValidation";

export default class StatusTurnValidation implements ITurnValidation {
  constructor(
    private readonly turnInitiatorPlayerStatus: IPlayerStatus,
    private readonly turnTargetPlayerStatus: IPlayerStatus,
  ) {}

  public validate = () => {
    if (
      this.turnInitiatorPlayerStatus instanceof InGamePlayerStatus &&
      this.turnTargetPlayerStatus instanceof InGamePlayerStatus
    ) {
      return true;
    }

    return false;
  };
}
import ITurnStatus from "../TurnStatus/ITurnStatus";

import InProgressTurnStatus from "../TurnStatus/InProgressTurnStatus";
import CompleteTurnStatus from "../TurnStatus/CompleteTurnStatus";
import IPlayerStatus from "../PlayerStatus/IPlayerStatus";
import EliminatedPlayerStatus from "../PlayerStatus/EliminatedPlayerStatus";

export default class Player {
  constructor(
    public readonly nickname: string,
    public readonly entityId: string,
    public readonly turnStatus: ITurnStatus,
    public readonly status: IPlayerStatus,
  ) {}

  public isTurnInProgress = (): boolean => {
    return this.turnStatus instanceof InProgressTurnStatus;
  };

  public isTurnComplete = (): boolean => {
    return this.turnStatus instanceof CompleteTurnStatus;
  };

  public isEliminated = (): boolean => {
    return this.status instanceof EliminatedPlayerStatus;
  };
}
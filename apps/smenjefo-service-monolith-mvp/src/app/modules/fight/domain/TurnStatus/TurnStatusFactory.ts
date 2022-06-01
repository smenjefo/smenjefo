import DomainException from "../../../../exceptions/DomainException";

import ITurnStatus from "./ITurnStatus";
import CompleteTurnStatus from "./CompleteTurnStatus";
import InProgressTurnStatus from "./InProgressTurnStatus";

export default class TurnStatusFactory {
  public create = (turnStatus: string): ITurnStatus => {
    if (turnStatus === 'inProgress') {
      return new InProgressTurnStatus();
    }

    if (turnStatus === 'completed') {
      return new CompleteTurnStatus();
    }

    throw new DomainException('Unknown turn status');
  };
}
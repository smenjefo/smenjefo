import DomainException from "../../../../exceptions/DomainException";

import IPlayerStatus from "./IPlayerStatus";
import InGamePlayerStatus from "./InGamePlayerStatus";
import EliminatedPlayerStatus from "./EliminatedPlayerStatus";

export default class PlayerStatusFactory {
  public create = (playerStatus: string): IPlayerStatus => {
    if (playerStatus === 'inGame') {
      return new InGamePlayerStatus();
    }

    if (playerStatus === 'eliminated') {
      return new EliminatedPlayerStatus();
    }

    throw new DomainException('Unknown player status');
  };
}
import IMapper from "./IMapper";

import IPlayerStatus from "../entities/PlayerStatus/IPlayerStatus";
import IPlayerTurnStatus from "../entities/PlayerTurnStatus/IPlayerTurnStatus";
import PlayerTurnStatuses from "../entities/PlayerTurnStatus/PlayerTurnStatuses";
import InProgressPlayerTurnStatus from "../entities/PlayerTurnStatus/InProgressPlayerTurnStatus";
import CompletedPlayerTurnStatus from "../entities/PlayerTurnStatus/CompletedPlayerTurnStatus";

export default class PlayerTurnStatusMapper implements IMapper<IPlayerTurnStatus, string> {
  public fromDtoToEntity = (dto: string) => {
    if (dto === PlayerTurnStatuses.IN_PROGRESS) {
      return new InProgressPlayerTurnStatus();
    }

    if (dto === PlayerTurnStatuses.COMPLETED) {
      return new CompletedPlayerTurnStatus();
    }
  };

  public fromEntityToDto = (entity: IPlayerStatus) => {
    if (entity instanceof InProgressPlayerTurnStatus) {
      return PlayerTurnStatuses.IN_PROGRESS;
    }

    if (entity instanceof CompletedPlayerTurnStatus) {
      return PlayerTurnStatuses.COMPLETED;
    }
  };
}
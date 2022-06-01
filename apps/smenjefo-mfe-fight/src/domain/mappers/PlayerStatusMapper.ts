import IMapper from "./IMapper";

import IPlayerStatus from "../entities/PlayerStatus/IPlayerStatus";
import PlayerStatuses from "../entities/PlayerStatus/PlayerStatuses";
import InGamePlayerStatus from "../entities/PlayerStatus/InGamePlayerStatus";
import EliminatedPlayerStatus from "../entities/PlayerStatus/EliminatedPlayerStatus";

export default class PlayerStatusMapper implements IMapper<IPlayerStatus, string> {
  public fromDtoToEntity = (dto: string) => {
    if (dto === PlayerStatuses.IN_GAME) {
      return new InGamePlayerStatus();
    }

    if (dto === PlayerStatuses.ELIMINATED) {
      return new EliminatedPlayerStatus();
    }
  };

  public fromEntityToDto = (entity: IPlayerStatus) => {
    if (entity instanceof InGamePlayerStatus) {
      return PlayerStatuses.IN_GAME;
    }

    if (entity instanceof EliminatedPlayerStatus) {
      return PlayerStatuses.ELIMINATED;
    }
  };
}
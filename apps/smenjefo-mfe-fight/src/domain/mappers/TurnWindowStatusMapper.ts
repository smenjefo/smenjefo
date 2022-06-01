import IMapper from "./IMapper";

import IPlayerStatus from "../entities/PlayerStatus/IPlayerStatus";
import ITurnWindowStatus from "../entities/TurnWindowStatus/ITurnWindowStatus";
import OpenedTurnWindowStatus from "../entities/TurnWindowStatus/OpenedTurnWindowStatus";
import ClosedTurnWindowStatus from "../entities/TurnWindowStatus/ClosedTurnWindowStatus";

export default class TurnWindowStatusMapper implements IMapper<ITurnWindowStatus, boolean> {
  public fromDtoToEntity = (dto: boolean) => {
    if (dto === true) {
      return new OpenedTurnWindowStatus();
    }

    if (dto === false) {
      return new ClosedTurnWindowStatus();
    }
  };

  public fromEntityToDto = (entity: IPlayerStatus) => {
    if (entity instanceof OpenedTurnWindowStatus) {
      return true;
    }

    if (entity instanceof ClosedTurnWindowStatus) {
      return false;
    }
  };
}
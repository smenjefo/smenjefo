import IMapper from "./IMapper";

import IPlayerStatus from "../entities/PlayerStatus/IPlayerStatus";
import IPlayerRole from "../entities/PlayerRole/IPlayerRole";
import PlayerRoles from "../entities/PlayerRole/PlayerRoles";
import ManiacPlayerRole from "../entities/PlayerRole/ManiacPlayerRole";
import ComradePlayerRole from "../entities/PlayerRole/ComradePlayerRole";
import RoguePlayerRole from "../entities/PlayerRole/RoguePlayerRole";

export default class PlayerRoleMapper implements IMapper<IPlayerRole, string> {
  public fromDtoToEntity = (dto: string) => {
    if (dto === PlayerRoles.MANIAC) {
      return new ManiacPlayerRole();
    }

    if (dto === PlayerRoles.COMRADE) {
      return new ComradePlayerRole();
    }

    if (dto === PlayerRoles.ROGUE) {
      return new RoguePlayerRole();
    }
  };

  public fromEntityToDto = (entity: IPlayerStatus) => {
    if (entity instanceof ManiacPlayerRole) {
      return PlayerRoles.MANIAC;
    }

    if (entity instanceof ComradePlayerRole) {
      return PlayerRoles.COMRADE;
    }

    if (entity instanceof RoguePlayerRole) {
      return PlayerRoles.ROGUE;
    }
  };
}
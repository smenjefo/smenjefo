import Player from "../entities/Player/Player";
import PlayerDTO from "../dto/PlayerDTO";
import IMapper from "./IMapper";

import PlayerRoleMapper from "./PlayerRoleMapper";
import PlayerStatusMapper from "./PlayerStatusMapper";
import PlayerTurnStatusMapper from "./PlayerTurnStatusMapper";

export default class PlayerMapper implements IMapper<Player, PlayerDTO> {
  constructor(
    private readonly playerRoleMapper: PlayerRoleMapper,
    private readonly playerStatusMapper: PlayerStatusMapper,
    private readonly playerTurnStatusMapper: PlayerTurnStatusMapper,
  ) {}

  public fromDtoToEntity = (dto: PlayerDTO) => {
    return new Player(
      dto.getId(),
      dto.getTeamId(),
      this.playerRoleMapper.fromDtoToEntity(dto.getPlayerRole()),
      this.playerStatusMapper.fromDtoToEntity(dto.getPlayerStatus()),
      this.playerTurnStatusMapper.fromDtoToEntity(dto.getPlayerTurnStatus()),
      dto.getEnergy(),
    );
  };

  public fromEntityToDto = (entity: Player) => {
    return new PlayerDTO(
      entity.getId(),
      entity.getTeamId(),
      this.playerRoleMapper.fromEntityToDto(entity.getPlayerRole()),
      this.playerStatusMapper.fromEntityToDto(entity.getPlayerStatus()),
      this.playerTurnStatusMapper.fromEntityToDto(entity.getPlayerTurnStatus()),
      entity.getEnergy(),
    );
  };
}
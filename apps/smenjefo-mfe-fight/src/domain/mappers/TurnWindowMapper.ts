import TurnWindow from "../entities/TurnWindow/TurnWindow";
import TurnWindowDTO from "../dto/TurnWindowDTO";
import IMapper from "./IMapper";

import TurnWindowStatusMapper from "./TurnWindowStatusMapper";
import TurnWindowTurnTypeForMakeMapper from "./TurnWindowTurnTypeForMakeMapper";

export default class TurnWindowMapper implements IMapper<TurnWindow, TurnWindowDTO> {
  constructor(
    private readonly statusMapper: TurnWindowStatusMapper,
    private readonly turnTypeForMakeMapper: TurnWindowTurnTypeForMakeMapper,
  ) {}

  public fromDtoToEntity = (dto: TurnWindowDTO) => {
    return new TurnWindow(
      this.statusMapper.fromDtoToEntity(dto.getIsOpened()),
      this.turnTypeForMakeMapper.fromDtoToEntity(dto.getTurnTypesForMake()),
    );
  };

  public fromEntityToDto = (entity: TurnWindow) => {
    return new TurnWindowDTO(
      this.statusMapper.fromEntityToDto(entity.getTurnWindowStatus()),
      this.turnTypeForMakeMapper.fromEntityToDto(entity.getTurnTypesForMake()),
    );
  };
}
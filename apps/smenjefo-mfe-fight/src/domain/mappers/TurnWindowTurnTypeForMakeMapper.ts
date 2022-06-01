import IMapper from "./IMapper";

import TurnTypeForMakeDTO from "../dto/TurnTypeForMakeDTO";
import TurnTypeForMake from "../entities/TurnTypeForMake/TurnTypeForMake";
import TurnTypeMapper from "./TurnTypeMapper";

export default class TurnWindowTurnTypeForMakeMapper implements IMapper<TurnTypeForMake[], TurnTypeForMakeDTO[]> {
  constructor(
    private readonly turnTypeMapper: TurnTypeMapper,
  ) {}

  public fromDtoToEntity = (dto: TurnTypeForMakeDTO[]) => {
    return dto.map((turnType: TurnTypeForMakeDTO) => {
      return new TurnTypeForMake(
        this.turnTypeMapper.fromDtoToEntity(turnType.getType()),
        turnType.getEnergyCost(),
        false,
      );
    });
  };

  public fromEntityToDto = (entity: TurnTypeForMake[]) => {
    return entity.map((turnType: TurnTypeForMake) => {
      return new TurnTypeForMakeDTO(
        this.turnTypeMapper.fromEntityToDto(turnType.getTurnType()),
        turnType.getEnergyCost(),
        turnType.getIsDisabled(),
      );
    });
  };
}
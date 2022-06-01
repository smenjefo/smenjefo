import PlayerDTO from "../dto/PlayerDTO";
import TurnWindoDTO from "../dto/TurnWindowDTO";
import TurnTypeForMake from "../entities/TurnTypeForMake/TurnTypeForMake";
import TurnTypeList from "../entities/TurnTypeList/TurnTypeList";
import TurnWindow from "../entities/TurnWindow/TurnWindow";
import ClosedTurnWindowStatus from "../entities/TurnWindowStatus/ClosedTurnWindowStatus";
import OpenedTurnWindowStatus from "../entities/TurnWindowStatus/OpenedTurnWindowStatus";
import PlayerMapper from "../mappers/PlayerMapper";
import TurnWindowMapper from "../mappers/TurnWindowMapper";
import PlayerCanBeTurnTargetSpecification from "../specifications/Player/PlayerCanBeTurnTargetSpecification";
import PlayerCanMakeTurnSpecfication from "../specifications/Player/PlayerCanMakeTurnSpecfication";

export default class TurnWindowDomainService {
  constructor(
    private readonly playerMapper: PlayerMapper,
    private readonly turnWindowMapper: TurnWindowMapper,
  ) {}

  public defineWindow = (initiatorDTO: PlayerDTO, targetDTO: PlayerDTO): TurnWindoDTO => {
    const initiator = this.playerMapper.fromDtoToEntity(initiatorDTO);
    const target = this.playerMapper.fromDtoToEntity(targetDTO);

    const turnTypeList = new TurnTypeList().define(initiator, target);

    const canTurnWindowBeOpened = (
      new PlayerCanMakeTurnSpecfication().isSatisfiedBy(initiator) &&
      new PlayerCanBeTurnTargetSpecification().isSatisfiedBy(target) &&
      turnTypeList.length
    );

    const turnWindowStatus = canTurnWindowBeOpened
      ? new OpenedTurnWindowStatus()
      : new ClosedTurnWindowStatus();

    const turnTypesForMake = turnTypeList.map((turnType) => {
      const canInitiatorMakeThisTurn = initiator.getEnergy() >= turnType.getEnergyCost();

      return new TurnTypeForMake(
        turnType,
        turnType.getEnergyCost(),
        !canInitiatorMakeThisTurn,
      );
    });

    const turnWindow = new TurnWindow(
      turnWindowStatus,
      turnTypesForMake,
    );

    const turnWindowDTO = this.turnWindowMapper.fromEntityToDto(turnWindow);

    return turnWindowDTO;
  };
}
import IOpenTurnWindowDTO from '../dto/IOpenTurnWindowDTO';
import PlayerDTO from '../../domain/dto/PlayerDTO';
import TurnWindowTurn from '../../data/models/TurnWindowTurn';
import IDataPublisher from '../../data/DataPublisher/IDataPublisher';
import IRepository from '../../data/repository/IRepository';
import PlayerModel from '../../data/models/PlayerModel';
import MyPlayerModel from '../../data/models/MyPlayerModel';
import TurnWindowModel from '../../data/models/TurnWindowModel';
import TurnWindowDomainService from '../../domain/services/TurnWindowDomainService';

export default class TurnWindowService {
  constructor(
    private readonly dataPublisher: IDataPublisher,
    private readonly playersRepository: IRepository<PlayerModel>,
    private readonly myPlayerRepository: IRepository<MyPlayerModel>,
    private readonly turnWindowRepository: IRepository<TurnWindowModel>,
    private readonly turnWindowDomainService: TurnWindowDomainService,
  ) {}

  public openTurnWindow = (payload: IOpenTurnWindowDTO) => {
    const myPlayer = this.myPlayerRepository.findAny();
    const turnWindow = this.turnWindowRepository.findAny();

    const turnInitiator = this.playersRepository.findOne({ id: myPlayer.getPlayerId() });
    const turnTarget = this.playersRepository.findOne({ id: payload.turnTargetId });

    const turnInitiatorDomain = new PlayerDTO(
      turnInitiator.getId(),
      turnInitiator.getTeam(),
      turnInitiator.getRole(),
      turnInitiator.getStatus(),
      turnInitiator.getTurnStatus(),
      turnInitiator.getEnergy(),
    );

    const turnTargetDomain = new PlayerDTO(
      turnTarget.getId(),
      turnTarget.getTeam(),
      turnTarget.getRole(),
      turnTarget.getStatus(),
      turnTarget.getTurnStatus(),
      turnTarget.getEnergy(),
    );

    const turnWindowDTO = this.turnWindowDomainService.defineWindow(
      turnInitiatorDomain,
      turnTargetDomain,
    );

    const turnList = turnWindowDTO.getTurnTypesForMake().map((turnTypeForMakeDTO) => {
      return new TurnWindowTurn(
        turnTypeForMakeDTO.getType(),
        turnTypeForMakeDTO.getEnergyCost(),
        turnTypeForMakeDTO.getIsDisabled(),
      );
    });

    turnWindow.setIsOpened(turnWindowDTO.getIsOpened());
    turnWindow.setTurnList(turnList);
    turnWindow.setInitiatorId(turnInitiator.getId());
    turnWindow.setTargetId(turnTarget.getId());

    this.turnWindowRepository.update(turnWindow);

    this.dataPublisher.notifyAll('openTurnWindow');
  };
}
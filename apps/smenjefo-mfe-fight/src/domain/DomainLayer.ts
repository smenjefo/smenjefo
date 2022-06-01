import PlayerMapper from "./mappers/PlayerMapper";
import PlayerRoleMapper from "./mappers/PlayerRoleMapper";
import PlayerStatusMapper from "./mappers/PlayerStatusMapper";
import PlayerTurnStatusMapper from "./mappers/PlayerTurnStatusMapper";
import TurnTypeMapper from "./mappers/TurnTypeMapper";
import TurnWindowMapper from "./mappers/TurnWindowMapper";
import TurnWindowStatusMapper from "./mappers/TurnWindowStatusMapper";
import TurnWindowTurnTypeForMakeMapper from "./mappers/TurnWindowTurnTypeForMakeMapper";
import DomainServiceRegistry from "./services/DomainServiceRegistry";
import TurnWindowDomainService from "./services/TurnWindowDomainService";

export default class DomainLayer {
  private readonly domainServiceRegistry: DomainServiceRegistry;

  constructor() {
    const playerMapper = new PlayerMapper(
      new PlayerRoleMapper(),
      new PlayerStatusMapper(),
      new PlayerTurnStatusMapper(),
    );

    const turnWindowMapper = new TurnWindowMapper(
      new TurnWindowStatusMapper(),
      new TurnWindowTurnTypeForMakeMapper(
        new TurnTypeMapper(),
      ),
    );

    this.domainServiceRegistry = new DomainServiceRegistry(
      new TurnWindowDomainService(playerMapper, turnWindowMapper),
    );
  }

  public getDomainServiceRegistry = () => {
    return this.domainServiceRegistry;
  };
}
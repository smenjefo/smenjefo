import { IMessageBusSubscriber, IWebSocket } from '@smenjefo/smenjefo-mfe';

import DataLayer from "../data/DataLayer";
import DomainLayer from "../domain/DomainLayer";

import IDataSubscriber from "../data/DataPublisher/IDataSubscriber";
import ServiceRegistry from "./services/ServiceRegistry";
import FightService from "./services/FightService";
import TurnService from "./services/TurnService";
import PlayersService from "./services/PlayersService";
import MyPlayerService from "./services/MyPlayerService";
import IFightInformationDTO from "./dto/IFightInformationDTO";
import RoundService from "./services/RoundService";
import TurnWindowService from "./services/TurnWindowService";

export default class ApplicationLayer {
  private readonly serviceRegistry: ServiceRegistry;

  constructor(
    private readonly domainLayer: DomainLayer,
    private readonly dataLayer: DataLayer,
    private readonly websocket: IWebSocket,
    private readonly messageBus: IMessageBusSubscriber,
    private readonly fightInformationDTO: IFightInformationDTO,
  ) {
    const repositories = dataLayer.getRepositoryRegistry();
    const dataPublisher = dataLayer.getDataPublisher();
    const domainServices = this.domainLayer.getDomainServiceRegistry();

    const myPlayerService = new MyPlayerService(
      this.messageBus,
      dataPublisher,
      repositories.playersRepository,
      repositories.myPlayerRepository,
    );

    const roundService = new RoundService(
      this.websocket,
      dataPublisher,
      myPlayerService,
      repositories.statusRepository,
      repositories.playersRepository,
      repositories.historyRepository,
      repositories.myPlayerRepository,
    );

    const fightService = new FightService(
      this.websocket,
      dataPublisher,
      roundService,
      repositories.statusRepository,
      repositories.teamsRepository,
      repositories.turnWindowRepository,
      this.fightInformationDTO,
    );

    const playersService = new PlayersService(
      this.websocket,
      dataPublisher,
      repositories.playersRepository,
    );

    const turnService = new TurnService(
      this.websocket,
      dataPublisher,
      roundService,
      repositories.playersRepository,
      repositories.turnWindowRepository,
      repositories.statusRepository,
    );

    const turnWindowService = new TurnWindowService(
      dataPublisher,
      repositories.playersRepository,
      repositories.myPlayerRepository,
      repositories.turnWindowRepository,
      domainServices.turnWindowDomainService,
    );

    this.serviceRegistry = new ServiceRegistry(
      myPlayerService,
      roundService,
      fightService,
      playersService,
      turnService,
      turnWindowService,
    );
  }

  public getServiceRegistry = () => {
    return this.serviceRegistry;
  };

  public subscribe = (subscriber: IDataSubscriber) => {
    this.dataLayer.subscribe(subscriber);
  };
}
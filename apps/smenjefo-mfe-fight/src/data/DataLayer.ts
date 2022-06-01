import DataPublisher from "./DataPublisher/DataPublisher";
import IDataSubscriber from "./DataPublisher/IDataSubscriber";
import IDB from "./DB/IDB";
import LokiJSDB from "./DB/LokiJSDB";

import Repository from "./repository/Repository";
import RepositoryRegistry from "./repository/RepositoryRegistry";

export default class DataLayer {
  private readonly dataPublisher: DataPublisher;
  private readonly db: IDB;
  private readonly repositoryRegistry: RepositoryRegistry;

  constructor() {
    this.db = new LokiJSDB();
    this.dataPublisher = new DataPublisher(this.db);

    this.repositoryRegistry = new RepositoryRegistry(
      new Repository('myPlayer', this.db),
      new Repository('players', this.db),
      new Repository('teams', this.db),
      new Repository('status', this.db),
      new Repository('history', this.db),
      new Repository('turnWindow', this.db),
    );
  }

  public getRepositoryRegistry = () => {
    return this.repositoryRegistry;
  };

  public getDataPublisher = () => {
    return this.dataPublisher;
  };

  public subscribe = (subscriber: IDataSubscriber) => {
    this.dataPublisher.subscribe(subscriber);
  };
}
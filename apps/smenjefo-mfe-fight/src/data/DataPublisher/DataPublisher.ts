import IDB from "../DB/IDB";
import IDataPublisher from "./IDataPublisher";
import IDataSubscriber from "./IDataSubscriber";

export default class DataPublisher implements IDataPublisher {
  private readonly subscribers = new Set<IDataSubscriber>();

  constructor(private readonly db: IDB) {}

  public subscribe = (subscriber: IDataSubscriber) => {
    this.subscribers.add(subscriber);
  };

  public notifyAll = (eventName?: string) => {
    for (const subscriber of this.subscribers) {
      subscriber(this.db.toJSON(), eventName);
    }
  };
}
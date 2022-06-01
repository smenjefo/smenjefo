import IDataSubscriber from "./IDataSubscriber";

export default interface IDataPublisher {
  subscribe(subscriber: IDataSubscriber): void;
  notifyAll(eventName?: string): void;
}
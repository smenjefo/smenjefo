import IMessageBusSubscriber from "./IMessageBusSubscriber";

export default interface IMessageBus {
  createSubscriber(subscriberName: string): IMessageBusSubscriber;
  notifyAll: (sender: string, eventName: string, message?: Record<string, any>) => void;
}
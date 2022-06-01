import IMessageBus from "./IMessageBus";
import IMessageBusLogger from "./IMessageBusLogger";
import IMessageBusSubscriber from "./IMessageBusSubscriber";
import MessageBusSubscriber from "./MessageBusSubscriber";

export default class MessageBus implements IMessageBus {
  private readonly subscribers = new Map<string, IMessageBusSubscriber>();

  constructor(
    private readonly logger: IMessageBusLogger,
  ) {}

  private subscribe = (subscriber: IMessageBusSubscriber) => {
    this.subscribers.set(subscriber.getName(), subscriber);
  };

  private logMessage = (publisherName, subscriberName, eventName, message) => {
    this.logger.log(Date.now(), publisherName, subscriberName, eventName, message);
  };

  public createSubscriber = (subscriberName) => {
    const subscriber = new MessageBusSubscriber(subscriberName, this);

    this.subscribe(subscriber);

    return subscriber;
  }

  public notifyAll = (publisherName, eventName, message?) => {
    for (const subscriber of this.subscribers.values()) {
      const subscriberName = subscriber.getName();

      if (publisherName !== subscriberName) {
        subscriber.notifySubscriber(eventName, message);

        this.logMessage(publisherName, subscriberName, eventName, message);
      }
    }
  };
}

import IMessageBus from "./IMessageBus";
import IMessageBusSubscriber from "./IMessageBusSubscriber";

export default class MessageBusSubscriber implements IMessageBusSubscriber {
  private readonly listeners = new Map<string, (message: Record<string, any>) => void>();

  constructor(
    private readonly name: string,
    private readonly messageBus: IMessageBus,
  ) {}

  public getName = () => {
    return this.name;
  };

  public on = (eventName: string, listener: (message: Record<string, any>) => void) => {
    this.listeners.set(eventName, listener);
  };

  public sendToMessageBus = (eventName: string, message?: Record<string, any>) => {
    this.messageBus.notifyAll(this.name, eventName, message);
  };

  public notifySubscriber = (eventName: string, message?: Record<string, any>) => {
    const subscriberListener = this.listeners.get(eventName);

    if (subscriberListener) {
      subscriberListener(message);
    }
  };
}

export default interface IMessageBusSubscriber {
  getName(): string;
  on: (eventName: string, listener: (message: Record<string, any>) => void) => void;
  sendToMessageBus: (eventName: string, message?: Record<string, any>) => void;
  notifySubscriber: (eventName: string, message?: Record<string, any>) => void;
}
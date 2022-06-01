export default interface IMessageBusLogger {
  log(time: number, publisherName: string, subscriberName: string, eventName: string, message: Record<string, any>): void;
}
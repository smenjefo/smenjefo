import { IMessageBusLogger } from "@smenjefo/smenjefo-mfe";

export default class DevMessageBusLogger implements IMessageBusLogger {
  public log = (time: number, publisherName: string, subscriberName: string, eventName: string, message: Record<string, any>) => {
    console.warn('@@ messageBus:', {
      time,
      publisherName,
      subscriberName,      
      eventName,
      message,
    })
  };
}
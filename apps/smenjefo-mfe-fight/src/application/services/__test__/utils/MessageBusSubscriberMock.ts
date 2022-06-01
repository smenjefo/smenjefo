import { IMessageBusSubscriber } from '@smenjefo/smenjefo-mfe';

export default class MessageBusSubscriberMock implements IMessageBusSubscriber {
  public readonly getName: any;
  public readonly on: any;
  public readonly sendToMessageBus: any;
  public readonly notifySubscriber: any;

  constructor(
    private readonly jest: any,
  ) {
    this.getName = this.jest.fn();
    this.on = this.jest.fn();
    this.sendToMessageBus = this.jest.fn();
    this.notifySubscriber = this.jest.fn();
  }
}
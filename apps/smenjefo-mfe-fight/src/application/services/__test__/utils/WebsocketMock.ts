import { IWebSocket } from '@smenjefo/smenjefo-mfe';

export default class WebsocketMock implements IWebSocket {
  public readonly on: any;
  public readonly emit: any;
  public readonly removeAllListeners: any;
  public readonly disconnect: any;

  constructor(
    private readonly jest: any,
  ) {
    this.on = this.jest.fn();
    this.emit = this.jest.fn();
    this.removeAllListeners = this.jest.fn();
    this.disconnect = this.jest.fn();
  }
}
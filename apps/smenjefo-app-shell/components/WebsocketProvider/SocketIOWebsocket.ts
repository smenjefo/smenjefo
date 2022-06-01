
import { io, Socket } from 'socket.io-client';
import { IWebSocket } from '@smenjefo/smenjefo-mfe';
import IWebsocketConnectionURL from './WebsocketConnectionURL/IWebsocketConnectionURL';

export default class SocketIOWebsocket implements IWebSocket {
  private readonly websocket: Socket;

  constructor(
    private readonly connectionURL: IWebsocketConnectionURL,
    private readonly onConnect: (websocket: IWebSocket) => void,
  ) {
    this.websocket = io(this.connectionURL.generate());

    this.websocket.on('connect', () => {
      this.onConnect(this.websocket);
    });
  }

  public on = (event, callback) => {
    this.websocket.on(event, callback);
  };

  public emit = (event, data) => {
    this.websocket.emit(event, data);
  };

  public removeAllListeners = () => {
    this.websocket.removeAllListeners();
  };

  public disconnect = () => {
    this.websocket.disconnect();
  };
}
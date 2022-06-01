import IMessageBus from '../MessageBus/IMessageBus';
import IWebSocket from '../WebSocket/IWebSocket';
import IMicroFrontendAdditionalProps from './IMicroFrontendAdditionalProps';

export default interface IMicroFrontend {
  websocket: IWebSocket;
  messageBus: IMessageBus;
  additionalProps?: IMicroFrontendAdditionalProps;
}
import IWebsocketConnectionURL from "./IWebsocketConnectionURL";

export default class EnvWebsocketConnectionURL implements IWebsocketConnectionURL {
  public generate = () => {
    return `${
      process.env['NEXT_PUBLIC_WEBSOCKET_GATEWAY_PROTOCOL']
    }://${
      process.env['NEXT_PUBLIC_WEBSOCKET_GATEWAY_HOST']
    }:${
      process.env['NEXT_PUBLIC_WEBSOCKET_GATEWAY_PORT']
    }`;
  };
}
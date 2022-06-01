import React from "react";
import { IWebSocket } from "@smenjefo/smenjefo-mfe";

export interface IWebsocketContext {
  websocket: IWebSocket;
}

const WebsocketContext = React.createContext<IWebsocketContext>({} as IWebsocketContext);

export default WebsocketContext;
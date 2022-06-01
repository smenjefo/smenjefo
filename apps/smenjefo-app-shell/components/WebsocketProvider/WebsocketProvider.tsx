import React, { useEffect, useState } from 'react';
import { IWebSocket } from '@smenjefo/smenjefo-mfe';

import WebsocketContext from './WebsocketContext';
import WebsocketConnectionURLFactory from './WebsocketConnectionURL/WebsocketConnectionURLFactory';
import SocketIOWebsocket from './SocketIOWebsocket';

export interface IWebsocketProviderProps {
  children: (websocket: IWebSocket) => JSX.Element;
}

const WebsocketProvider = (props: IWebsocketProviderProps) => {
  const [websocketInstance, setWebsocketInstance] = useState(null);

  useEffect(() => {
    const websocketConnectionURLFactory = new WebsocketConnectionURLFactory();
    const websocketConnectionURL = websocketConnectionURLFactory.create();

    const ws = new SocketIOWebsocket(websocketConnectionURL, (websocket) => {
      setWebsocketInstance(websocket);
    });

    return () => {
      ws.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WebsocketContext.Provider value={{
      websocket: websocketInstance,
    }}>
      {props.children(websocketInstance)}
    </WebsocketContext.Provider>
  );
};

export default WebsocketProvider;
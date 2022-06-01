import React from 'react';
import ReactDOM from 'react-dom/client';
import { IWebSocket, MessageBus } from '@smenjefo/smenjefo-mfe';
import { io } from "socket.io-client";

import MFE from './MFE';

// TODO:
// mfe single development
const websocket = io("http://localhost:4000/") as IWebSocket;
const messageBus = new MessageBus(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MFE
    websocket={websocket}
    messageBus={messageBus}
    additionalProps={{}}
  />,
);
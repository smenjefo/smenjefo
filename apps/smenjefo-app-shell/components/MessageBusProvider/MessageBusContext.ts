import { IMessageBus } from "@smenjefo/smenjefo-mfe";
import React from "react";

export interface IMessageBusContext {
  messageBus: IMessageBus,
}

const MessageBusContext = React.createContext<IMessageBusContext>({} as IMessageBusContext);

export default MessageBusContext;
import React from "react";
import { IMessageBusSubscriber } from "@smenjefo/smenjefo-mfe";

export interface IMessageBusContext {
  messageBusSubscriber: IMessageBusSubscriber;
}

const MessageBusContext = React.createContext<IMessageBusContext>({} as IMessageBusContext);

export default MessageBusContext;
import React, { useEffect, useState } from 'react';
import { IMessageBusSubscriber, MessageBus } from '@smenjefo/smenjefo-mfe';

import MessageBusContext from './MessageBusContext';
import DevMessageBusLogger from './DevMessageBusLogger';

export interface IMessageBusProviderProps {
  children: (messageBusSubscriber: IMessageBusSubscriber) => JSX.Element;
}

const MessageBusProvider = (props: IMessageBusProviderProps) => {
  const [messageBusData, setMessageBusData] = useState({
    messageBus: null,
    messageBusSubscriber: null,
  });

  useEffect(() => {
    const messageBusLogger = new DevMessageBusLogger();
    const messageBus = new MessageBus(messageBusLogger);
  
    const messageBusSubscriber = messageBus.createSubscriber('app-shell');

    setMessageBusData({
      messageBus,
      messageBusSubscriber,
    });
  }, []);

  return (
    <MessageBusContext.Provider value={{
      messageBus: messageBusData.messageBus,
    }}>
      {props.children(messageBusData.messageBusSubscriber)}
    </MessageBusContext.Provider>
  );
};

export default MessageBusProvider;
import { IMessageBus, IMessageBusSubscriber } from '@smenjefo/smenjefo-mfe';

import MessageBusContext from './MessageBusContext';

export interface IMessageBusProviderProps {
  messageBus: IMessageBus;
  children: (messageBusSubscriber: IMessageBusSubscriber) => JSX.Element;
}

const MessageBusProvider = (props: IMessageBusProviderProps) => {
  const messageBusSubscriber = props.messageBus.createSubscriber('mfe-fight-registration');

  return (
    <MessageBusContext.Provider value={{
      messageBusSubscriber,
    }}>
      {props.children(messageBusSubscriber)}
    </MessageBusContext.Provider>
  );
};

export default MessageBusProvider;
import { IMessageBusSubscriber, IWebSocket } from '@smenjefo/smenjefo-mfe';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { store } from '../../store/store';
import ErrorController from './controllers/ErrorController';
import ProfileController from './controllers/ProfileController';
import ControllersContext from './ControllersContext';
import ControllersRegistry from './ControllersRegistry';


export interface IControllersProviderProps {
  websocket: IWebSocket,
  messageBusSubscriber: IMessageBusSubscriber,
  children: JSX.Element;
}

const ControllersProvider = (props: IControllersProviderProps) => {
  const dispatch = useDispatch();

  const [controllers, setControllers] = useState(null);

  useEffect(() => {
    if (!!props.websocket && !!props.messageBusSubscriber) {
      setControllers(
        new ControllersRegistry(
          new ProfileController(props.websocket, props.messageBusSubscriber, dispatch, store),
          new ErrorController(props.websocket),
        ),
      );
    }
  }, [props.websocket, props.messageBusSubscriber, dispatch]);

  return (
    <ControllersContext.Provider value={{
      controllers,
    }}>
      {props.children}
    </ControllersContext.Provider>
  );
};

export default ControllersProvider;
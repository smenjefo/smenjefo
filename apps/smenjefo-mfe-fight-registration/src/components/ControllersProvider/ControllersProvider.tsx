import { IMessageBusSubscriber, IWebSocket } from '@smenjefo/smenjefo-mfe';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ProfileController from './controllers/ProfileController';
import FightApplicationsController from './controllers/FightApplicationsController';
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
          new ProfileController(props.messageBusSubscriber, dispatch),
          new FightApplicationsController(props.websocket, dispatch),
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
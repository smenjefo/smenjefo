import React, { useEffect, useState } from 'react';

import ApplicationLayer from '../../../application/ApplicationLayer';
import ApplicationDataContext, { IApplicationDataContext } from './ApplicationDataContext';
import IDataLogger from './IDataLogger';

interface IApplicationDataProviderProps {
  applicationLayer: ApplicationLayer;
  logger: IDataLogger;
  children: JSX.Element;
}

const ApplicationDataProvider = (props: IApplicationDataProviderProps) => {
  const [data, setData] = useState<IApplicationDataContext>({
    myPlayer: [],
    players: [],
    teams: [],
    history: [],
    status: [],
    turnWindow: [],
  });

  useEffect(() => {
    props.applicationLayer.subscribe((newData, eventName) => {
      setData(newData as IApplicationDataContext);

      // TODO: logger module only for dev mode
      props.logger.log(newData, eventName);
    });
  }, [props.applicationLayer, props.logger]);

  return (
    <ApplicationDataContext.Provider value={data}>
      {props.children}
    </ApplicationDataContext.Provider>
  );
};

export default ApplicationDataProvider;
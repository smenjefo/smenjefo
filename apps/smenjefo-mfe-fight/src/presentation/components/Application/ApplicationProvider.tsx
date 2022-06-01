import React from 'react';

import ApplicationLayer from '../../../application/ApplicationLayer';

import ApplicationServicesProvider from './ApplicationServicesProvider';
import ApplicationDataProvider from './ApplicationDataProvider';
import ConsoleDataLogger from './ConsoleDataLogger';

interface IApplicationProviderProps {
  applicationLayer: ApplicationLayer;
  children: JSX.Element;
}

const ApplicationProvider = (props: IApplicationProviderProps) => {
  const logger = new ConsoleDataLogger();

  return (
    <ApplicationServicesProvider applicationLayer={props.applicationLayer}>
      <ApplicationDataProvider
        applicationLayer={props.applicationLayer}
        logger={logger}
      >
        {props.children}
      </ApplicationDataProvider>
    </ApplicationServicesProvider>
  );
};

export default ApplicationProvider;
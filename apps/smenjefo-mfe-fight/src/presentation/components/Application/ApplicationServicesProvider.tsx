import React from 'react';

import ApplicationLayer from '../../../application/ApplicationLayer';
import ApplicationServicesContext from './ApplicationServicesContext';

interface IApplicationActionsProviderProps {
  applicationLayer: ApplicationLayer;
  children: JSX.Element;
}

const ApplicationServicesProvider = (props: IApplicationActionsProviderProps) => {
  const services = props.applicationLayer.getServiceRegistry();

  return (
    <ApplicationServicesContext.Provider value={services}>
      {props.children}
    </ApplicationServicesContext.Provider>
  );
};

export default ApplicationServicesProvider;
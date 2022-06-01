import React from 'react';
import ServiceRegistry from '../../../application/services/ServiceRegistry';

const ApplicationServicesContext = React.createContext<ServiceRegistry>(
  // actions creates inside ApplicationServicesProvider
  {} as ServiceRegistry,
);

export default ApplicationServicesContext;
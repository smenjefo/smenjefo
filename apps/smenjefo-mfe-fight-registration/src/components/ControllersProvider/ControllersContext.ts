import React from "react";

import ControllersRegistry from "./ControllersRegistry";

export interface IControllersContext {
  controllers: ControllersRegistry;
}

const ControllersContext = React.createContext<IControllersContext>({} as IControllersContext);

export default ControllersContext;
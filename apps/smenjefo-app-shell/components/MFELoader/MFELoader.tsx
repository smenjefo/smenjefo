import React, { Suspense, useContext, useEffect } from "react";
import { IMicroFrontendAdditionalProps } from "@smenjefo/smenjefo-mfe";
import WebsocketContext from "../WebsocketProvider/WebsocketContext";

import useMFELoader from "./useMFELoader";
import MessageBusContext from "../MessageBusProvider/MessageBusContext";
import ControllersContext from "../ControllersProvider/ControllersContext";

interface IMFELoaderProps {
  module: string;
  scope: string;
  url: string;
  additionalProps?: IMicroFrontendAdditionalProps,
}

const MFELoader = (props: IMFELoaderProps) => {
  const { websocket } = useContext(WebsocketContext);
  const { controllers } = useContext(ControllersContext);
  const { messageBus } = useContext(MessageBusContext);

  // TODO:
  // better MFE loading flow
  if (!props.url || !props.scope || !props.module) {
    return (
      <div>
        Spinner..
      </div>
    );
  }

  useEffect(() => {
    return () => {
      if (websocket && controllers) {
        // removes ws listeners also from MFEs
        websocket.removeAllListeners();
        controllers.reSubscribeAll();
      }
    };
  }, [websocket, controllers]);

  const { Component: FederatedComponent, errorLoading } = useMFELoader(
    props.url,
    props.scope,
    props.module,
  );

  return (
    <Suspense
      fallback={(
        <div>Loading...</div>
      )}
    >
      <div>
        {errorLoading
          ? `Error loading module "${props.module}"`
          : FederatedComponent && websocket && (
            <FederatedComponent
              websocket={websocket}
              messageBus={messageBus}
              additionalProps={props.additionalProps}
            />
          )}
      </div>
    </Suspense>
  );
};

export default MFELoader;

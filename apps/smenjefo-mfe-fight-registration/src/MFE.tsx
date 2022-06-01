import { Provider } from 'react-redux';
import { IMicroFrontend } from "@smenjefo/smenjefo-mfe";

import { store } from './store/store';
import App from "./components/App";

import LocalizationProvider from './components/Localization/LocalizationProvider';
import MessageBusProvider from './components/MessageBusProvider/MessageBusProvider';
import ControllersProvider from './components/ControllersProvider/ControllersProvider';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function FightRegistrationMFE(props: IMicroFrontend) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <LocalizationProvider>
          <MessageBusProvider messageBus={props.messageBus}>
            {(messageBusSubscriber) => {
              return (
                <ControllersProvider
                  websocket={props.websocket}
                  messageBusSubscriber={messageBusSubscriber}
                >
                  <App />
                </ControllersProvider>
              );
            }}
          </MessageBusProvider>
        </LocalizationProvider>
      </Provider>
    </ErrorBoundary>
  );
}
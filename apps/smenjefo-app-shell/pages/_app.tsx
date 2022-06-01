import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import App from '../components/App';
import ControllersProvider from '../components/ControllersProvider/ControllersProvider';
import LocalizationProvider from '../components/Localization/LocalizationProvider';
import MessageBusProvider from '../components/MessageBusProvider/MessageBusProvider';
import WebsocketProvider from '../components/WebsocketProvider/WebsocketProvider';
import { store } from '../store/store';

function CustomApp({ Component, pageProps }: AppProps) {
  const staticServerURL = `${
    process.env['NEXT_PUBLIC_STATIC_SERVER_PROTOCOL']
  }://${
    process.env['NEXT_PUBLIC_STATIC_SERVER_HOST']
  }:${
    process.env['NEXT_PUBLIC_STATIC_SERVER_PORT']
  }`;

  return (
    <>
      <Head>
        <title>smenjefo game!</title>
        <link
          rel="stylesheet"
          href={`${staticServerURL}/fonts.css`}
        />
        <link
          rel="stylesheet"
          href={`${staticServerURL}/reset.css`}
        />
      </Head>

      <main className="app">
        <Provider store={store}>
          <LocalizationProvider>
            <MessageBusProvider>
              {(appShellMessageBusSubscriber) => {
                return (
                  <WebsocketProvider>
                    {(websocket) => {
                      return (
                        <ControllersProvider
                          messageBusSubscriber={appShellMessageBusSubscriber}
                          websocket={websocket}
                        >
                          <App>
                            <Component {...pageProps} />
                          </App>
                        </ControllersProvider>
                      );
                    }}
                  </WebsocketProvider>
                );
              }}
            </MessageBusProvider>
          </LocalizationProvider>
        </Provider>
      </main>
    </>
  );
}

export default CustomApp;

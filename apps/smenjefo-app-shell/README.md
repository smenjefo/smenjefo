# App Shell

This application is a container for all MFEs and renders the main structure of the client application. Responsible for general routing.

App-shell based on Next.js framework provided by Nx.

### SSR

Rendering works through the new React 18 API based on streams and all frontend apps have same react 18 version (because of common dependencies in nx app).

### Microfrontends

Microfrontends system based on Webpack Module Federation where app-shell is the host.

All microfrontends are essentially simple react components and loaded dynamically via ***script*** html-tag. URL of the remote federated modules is defined via the "manifest", which is defined using env variables for local development, and it will be defined by remote "service discovery" server for production in the future. Loaded components modules are inserted into the application with React.lazy + React.Suspense combination.

### Websocket

App-shell initializes main singletone instance of websocket connection and gives it to all loaded microfrontends for internal use. Microfrontends subscribe to the necessary events, also app-shell may have some logic and subscribes to events too. 

When any of the microfrontends does unmount, app-shell removes all listeners of this mfe.

### In-memory Message Bus

Sometimes microfrontends need to speak with other microfrontends or app-shell "over small things". But the basic concept of microfrontends is that they don't have to know anything about each other directly. The best way to break module coupling is mediator with pub/sub model, so a special message bus was developed.

The *message bus* instance is initialized on the side of app-shell. Then app-shell creates one *message bus subscriber* instance (via *message bus*) for itself, and gives *message bus* instance for each loaded microfrontend. Further, each specific microfrontend decides on its side whether it needs to create *message bus subscriber* instance for communication with the outside world or not.
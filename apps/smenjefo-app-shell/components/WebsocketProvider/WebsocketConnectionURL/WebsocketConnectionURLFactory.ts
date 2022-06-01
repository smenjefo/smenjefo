import EnvWebsocketConnectionURL from "./EnvWebsocketConnectionURL";

export default class WebsocketConnectionURLFactory {
  public create = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (_DEVELOPMENT_) {
      return new EnvWebsocketConnectionURL();
    }

    throw new Error('Connection URL was not generated');
  };
}
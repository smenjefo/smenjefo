import { IWebSocket } from "@smenjefo/smenjefo-mfe";

import { IController } from "./IController";

export default class ErrorController implements IController {
  constructor(
    private readonly websocket: IWebSocket,
  ) {
    this.subscribeToEvents();
  }

  public subscribeToEvents = () => {
    this.websocket.on('error', this.onError);
  };

  public onError = (error) => {
    // TODO: error system
    console.warn('???', error);
  };
}
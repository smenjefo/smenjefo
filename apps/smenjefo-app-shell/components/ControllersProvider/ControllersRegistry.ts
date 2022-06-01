import ErrorController from "./controllers/ErrorController";
import ProfileController from "./controllers/ProfileController";

export default class WebsocketControllersRegistry {
  constructor(
    public readonly profileController: ProfileController,
    public readonly errorController: ErrorController,
  ) {}

  public reSubscribeAll = () => {
    this.profileController.subscribeToEvents();
    this.errorController.subscribeToEvents();
  };
}
import FightApplicationsController from "./controllers/FightApplicationsController";
import ProfileController from "./controllers/ProfileController";

export default class ControllersRegistry {
  constructor(
    public readonly profile: ProfileController,
    public readonly fightApplications: FightApplicationsController,
  ) {}
}
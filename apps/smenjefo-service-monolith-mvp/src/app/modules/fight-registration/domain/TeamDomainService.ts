import { Injectable } from "@nestjs/common";
import Team from "./entities/Team/Team";

@Injectable()
export default class TeamDomainService {
  public defineTeams = (fightMode: string) => {
    if (fightMode === 'teamOnTeam') {
      return [
        new Team(true),
        new Team(false),
      ];
    }

    if (fightMode === 'duel') {
      return [
        new Team(true),
        new Team(false),
      ];
    }

    if (fightMode === 'allVersusAll') {
      return [
        new Team(true),
      ];
    }

    return [];
  };
}
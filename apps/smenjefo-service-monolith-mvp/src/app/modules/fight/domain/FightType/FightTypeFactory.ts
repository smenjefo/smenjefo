import AllVersusAllFightType from "./AllVersusAllFightType";
import DuelFightType from "./DuelFightType";
import TeamOnTeamFightType from "./TeamOnTeamFightType";

export default class FightTypeFactory {
  constructor(
    private readonly fightType: string,
  ) {}

  public create = () => {
    if (this.fightType === 'teamOnTeam') {
      return new TeamOnTeamFightType();
    }

    if (this.fightType === 'duel') {
      return new DuelFightType();
    }

    if (this.fightType === 'allVersusAll') {
      return new AllVersusAllFightType();
    }
  };
}
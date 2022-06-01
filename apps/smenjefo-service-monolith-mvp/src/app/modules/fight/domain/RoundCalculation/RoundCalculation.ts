import CalculationPlayer from "../CalculationPlayer/CalculationPlayer";
import CompletedRoundCalculationResult from "../RoundCalculationResult/CompletedRoundCalculationResult";
import InProgressRoundCalculationResult from "../RoundCalculationResult/InProgressRoundCalculationResult";
import IRoundCalculationResult from "../RoundCalculationResult/IRoundCalculationResult";
import ICalculatable from "./ICalculatable";

export default class RoundCalculation implements ICalculatable {
  private result: IRoundCalculationResult = new InProgressRoundCalculationResult();

  public isCompleted = () => {
    return this.result instanceof CompletedRoundCalculationResult;
  };

  public calculate = (players) => {
    const teamsMap = new Map<string, CalculationPlayer[]>();
    const winnerTeams = [];

    players.forEach((player) => {
      const teamId = player.getTeamId();
      const team = teamsMap.get(teamId);

      if (team) {
        team.push(player);
      } else {
        teamsMap.set(teamId, [player]);
      }
    });

    for (const players of teamsMap.values()) {
      const isEliminatedTeam = players.every((player) => {
        return player.isEliminated();
      });

      if (!isEliminatedTeam) {
        winnerTeams.push(true);
      }
    }

    if (winnerTeams.length < 2) {
      this.result = new CompletedRoundCalculationResult();
    }
  };
}
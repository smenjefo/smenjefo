import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnType from "../TurnType/ITurnType";
import ITurnHistoryPlayerRecord from "./ITurnHistoryPlayerRecord";
import TurnHistoryPlayerRecord from "./TurnHistoryPlayerRecord";

export default class SimpleTurnHistoryPlayerRecord extends TurnHistoryPlayerRecord {
  public generateLine = (player: ICalculationPlayer, turnType: ITurnType): ITurnHistoryPlayerRecord => {
    const line = {
      nickname: player.getNickname(),
      turnType: turnType.toTextValue(),
      changedHP: this.getPlayerChangedPoints(
        player.getHealthBeforeCalculation(),
        player.getHealth(),
      ),
      changedEnergy: this.getPlayerChangedPoints(
        player.getEnergyBeforeCalculation(),
        player.getEnergy(),
      ),
    };

    player.equalizeInitialToActualHp();
    player.equalizeInitialToActualEnergy();

    return line;
  };
}
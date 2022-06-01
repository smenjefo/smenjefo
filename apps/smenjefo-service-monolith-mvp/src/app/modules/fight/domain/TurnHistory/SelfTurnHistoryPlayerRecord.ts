import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnType from "../TurnType/ITurnType";
import ITurnHistoryPlayerRecord from "./ITurnHistoryPlayerRecord";
import TurnHistoryPlayerRecord from "./TurnHistoryPlayerRecord";

export default class SelfTurnHistoryPlayerRecord extends TurnHistoryPlayerRecord {
  public generateLine = (player: ICalculationPlayer, turnType: ITurnType): ITurnHistoryPlayerRecord => {
    const line = {
      nickname: player.getNickname(),
      turnType: turnType.toTextValue(),
      changedHP: '',
      changedEnergy: '',
    };

    return line;
  };
}
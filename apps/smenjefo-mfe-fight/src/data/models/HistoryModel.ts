import IModel from "./IModel";
import HistoryRecordPlayerModel from "./HistoryRecordPlayerModel";

export default class HistoryModel implements IModel {
  constructor(
    private id: string,
    private turnDirection: string,
    private historyRecordPlayers: HistoryRecordPlayerModel[],
  ) {}

  public toJSON = () => {
    return {
      id: this.id,
      turnDirection: this.turnDirection,
      historyRecordPlayers: this.historyRecordPlayers.map((historyRecordPlayer) => {
        return historyRecordPlayer.toJSON();
      }),
    };
  };
}
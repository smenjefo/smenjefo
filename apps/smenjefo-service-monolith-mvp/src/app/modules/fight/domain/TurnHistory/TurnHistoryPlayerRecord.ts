import ICalculationPlayer from "../CalculationPlayer/ICalculationPlayer";
import ITurnType from "../TurnType/ITurnType";
import ITurnHistoryPlayerRecord from "./ITurnHistoryPlayerRecord";

// exported only for unit testing
export const getPlayerChangedPoints = (before: number, after: number): string => {
  if (before === after) {
    return '';
  }

  if (before > after) {
    if (after < 0) {
      return `-${Math.abs(after - before)}`;
    } else {
      return `-${before - after}`;
    }
  }

  if (before < after) {
    return `+${after - before}`;
  }
};

export default abstract class TurnHistoryPlayerRecord {
  protected generateLine: (player: ICalculationPlayer, turnType: ITurnType) => ITurnHistoryPlayerRecord;

  protected getPlayerChangedPoints = getPlayerChangedPoints;
}
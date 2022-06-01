import IHistoryDTO from "./IHistoryDTO";
import IPlayerDTO from "./IPlayerDTO";
import { FightStatus } from "./types";

export default interface IRound {
  id: string;
  remainingTime: number;
  nextRoundId: string;
  number: number;
  players: IPlayerDTO[];
  history: IHistoryDTO[];
  fightStatus: FightStatus;
}
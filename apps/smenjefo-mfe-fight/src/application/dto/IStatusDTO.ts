import { FightStatus } from "./types";

export default interface IStatusDTO {
  type: string;
  fightId: string;
  currentRoundId: string;
  remainingTime: number;
  currentRoundNumber: number;
  status: FightStatus;
}
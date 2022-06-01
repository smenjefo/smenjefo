import { TurnDirection } from './types';

import IHistoryRecordPlayerDTO from './IHistoryRecordPlayerDTO';

export default interface IHistoryDTO {
  id: string;
  turnDirection: TurnDirection;
  historyRecordPlayers: IHistoryRecordPlayerDTO[];
}
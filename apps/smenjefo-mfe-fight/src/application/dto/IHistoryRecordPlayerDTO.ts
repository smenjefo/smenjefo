import { TurnType } from './types';

type IHistoryRecordPlayerRole = 'initiator' | 'target';

export default interface IHistoryRecordPlayerDTO {
  id: string;
  role: IHistoryRecordPlayerRole,
  nickname: string;
  turnType: TurnType;
  changedHP: string;
  changedEnergy: string;
}
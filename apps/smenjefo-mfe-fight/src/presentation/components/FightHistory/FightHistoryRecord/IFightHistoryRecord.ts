import IHistoryRecordPlayerDTO from '../../../../application/dto/IHistoryRecordPlayerDTO';
import { TurnDirection } from '../../../../application/dto/types';

export default interface IFightHistoryRecord {
  initiator: IHistoryRecordPlayerDTO;
  target: IHistoryRecordPlayerDTO;
  turnDirection: TurnDirection;
  userPlayerNickname?: string;
}
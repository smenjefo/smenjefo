import ITurnHistoryPlayerRecord from "./ITurnHistoryPlayerRecord";

export default interface ITurnHistoryRecord {
  turnDirection: string;
  initiator: ITurnHistoryPlayerRecord;
  target: ITurnHistoryPlayerRecord;
}
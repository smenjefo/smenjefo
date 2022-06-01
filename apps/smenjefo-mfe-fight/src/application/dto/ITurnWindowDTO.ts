import ITurnWindowTurnDTO from "./ITurnWindowTurnDTO";

export default interface ITurnWindowDTO {
  isOpened: boolean;
  turnList: ITurnWindowTurnDTO[];
}
import Player from "../Player/Player";
import IRoundTimingValidation from "./IRoundTimingValidation";

export default class TurnRoundTimingValidation implements IRoundTimingValidation {
  constructor(
    private readonly players: Player[],
  ) {}

  public isRoundEnded = () => {
    return this.players.every((player) => {
      return player.isTurnComplete() || player.isEliminated();
    });
  };
}
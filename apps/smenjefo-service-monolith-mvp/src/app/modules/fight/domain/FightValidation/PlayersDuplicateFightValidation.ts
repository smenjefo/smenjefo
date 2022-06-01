import Player from "../Player/Player";
import IFightValidation from "./IFightValidation";

export default class PlayersDuplicateFightValidation implements IFightValidation {
  constructor(
    private readonly players: Player[],
  ) {}

  public validate = () => {
    const duplicates = {};

    for (let i = 0; i < this.players.length - 1; i++) {
      const entityId = this.players[i].entityId;
      const nickname = this.players[i].nickname;

      duplicates[entityId] = (duplicates[entityId] || 0) + 1;
      duplicates[nickname] = (duplicates[nickname] || 0) + 1;

      if (duplicates[entityId] > 1 || duplicates[nickname] > 1) {
        return false;
      }
    }

    return true;
  };
}
import { CompositeSpecification } from "../Specification/Specification";

import Player from "../../entities/Player/Player";
import EliminatedPlayerStatus from "../../entities/PlayerStatus/EliminatedPlayerStatus";

export default class PlayerCanBeTurnTargetSpecification extends CompositeSpecification<Player> {
  public isSatisfiedBy = (player: Player) => {
    const isPlayerEliminated = player.getPlayerStatus() instanceof EliminatedPlayerStatus;

    return !isPlayerEliminated;
  };
}
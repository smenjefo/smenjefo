import { CompositeSpecification } from "../Specification/Specification";

import Player from "../../entities/Player/Player";
import EliminatedPlayerStatus from "../../entities/PlayerStatus/EliminatedPlayerStatus";
import CompletedPlayerTurnStatus from "../../entities/PlayerTurnStatus/CompletedPlayerTurnStatus";

export default class PlayerCanMakeTurnSpecfication extends CompositeSpecification<Player> {
  public isSatisfiedBy = (player: Player) => {
    const isPlayerEliminated = player.getPlayerStatus() instanceof EliminatedPlayerStatus;
    const isPlayerTurnCompleted = player.getPlayerTurnStatus() instanceof CompletedPlayerTurnStatus;

    return !isPlayerEliminated && !isPlayerTurnCompleted;
  };
}
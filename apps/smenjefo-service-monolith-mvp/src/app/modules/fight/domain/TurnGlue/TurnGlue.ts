import ITurn from "../Turn/ITurn";
import MutualTurnDirection from "../TurnDirection/MutualTurnDirection";
import SelfTurnDirection from "../TurnDirection/SelfTurnDirection";
import UnidirectionalTurnDirection from "../TurnDirection/UnidirectionalTurnDirection";

export default class TurnGlue {
  private readonly turnsMemory: Map<string, ITurn> = new Map();

  public addTurnForGlue = (turn: ITurn) => {
    this.turnsMemory.set(turn.getInitiator().getId(), turn);
  };

  public glue = (): ITurn[] => {
    const resultTurns: ITurn[] = [];
    const mutualBlacklist = [];

    for (const [initiatorId, turn] of this.turnsMemory) {
      if (mutualBlacklist.includes(initiatorId)) {
        continue;
      }

      const turnFromMemory = this.turnsMemory.get(turn.getTarget().getId());
      const isSelf = initiatorId === turn.getTarget().getId();
      const isMutual = turnFromMemory.getTarget().getId() === initiatorId;

      if (isSelf) {
        turn.setTargetTurnType(turn.getInitiatorTurnType());
        turn.setTurnDirection(new SelfTurnDirection());
      } else if (isMutual) {
        turn.setTargetTurnType(turnFromMemory.getInitiatorTurnType());
        turn.setTurnDirection(new MutualTurnDirection());
        
        mutualBlacklist.push(turn.getTarget().getId());
      } else {
        turn.setTargetTurnType(turnFromMemory.getInitiatorTurnType());
        turn.setTurnDirection(new UnidirectionalTurnDirection());
      }

      resultTurns.push(turn);
    }

    return resultTurns;
  };
}
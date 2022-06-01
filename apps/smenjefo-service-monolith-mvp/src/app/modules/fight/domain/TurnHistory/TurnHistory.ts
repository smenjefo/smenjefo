import ITurn from "../Turn/ITurn";
import SelfTurnDirection from "../TurnDirection/SelfTurnDirection";
import SystemTurnTypeCategory from "../TurnTypeCategory/SystemTurnTypeCategory";
import ITurnHistoryRecord from "./ITurnHistoryRecord";
import SelfTurnHistoryPlayerRecord from "./SelfTurnHistoryPlayerRecord";
import SimpleTurnHistoryPlayerRecord from "./SimpleTurnHistoryPlayerRecord";

export default class TurnHistory {
  public recordLine = (turns: ITurn[]): ITurnHistoryRecord[] => {
    return turns.map((turn) => {
      const turnDirection = turn.getTurnDirection();
      const isSelfTurnDirection = turnDirection instanceof SelfTurnDirection;
      const isSystemInitiatorTurn = turn.getInitiatorTurnType() instanceof SystemTurnTypeCategory;
      const isSelfTurnWithEnergyCalc = isSelfTurnDirection && !isSystemInitiatorTurn;

      const turnHistoryPlayerRecord = isSelfTurnWithEnergyCalc
        ? new SelfTurnHistoryPlayerRecord()
        : new SimpleTurnHistoryPlayerRecord();
  
      return {
        turnDirection: turnDirection.toTextValue(),
        initiator: turnHistoryPlayerRecord.generateLine(
          turn.getInitiator(),
          turn.getInitiatorTurnType(),
        ),
        target: turnHistoryPlayerRecord.generateLine(
          turn.getTarget(),
          turn.getTargetTurnType(),
        ),
      };
    });
  };
}
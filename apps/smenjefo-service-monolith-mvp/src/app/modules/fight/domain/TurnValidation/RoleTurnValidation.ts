import ComradePlayerRole from "../PlayerRole/ComradePlayerRole";
import IPlayerRole from "../PlayerRole/IPlayerRole";
import ManiacPlayerRole from "../PlayerRole/ManiacPlayerRole";
import RoguePlayerRole from "../PlayerRole/RoguePlayerRole";
import AttackingTurnTypeCategory from "../TurnTypeCategory/AttackingTurnTypeCategory";
import DefensiveTurnTypeCategory from "../TurnTypeCategory/DefensiveTurnTypeCategory";
import HelpingTurnTypeCategory from "../TurnTypeCategory/HelpingTurnTypeCategory";
import ITurnTypeCategory from "../TurnTypeCategory/ITurnTypeCategory";
import SystemTurnTypeCategory from "../TurnTypeCategory/SystemTurnTypeCategory";
import ITurnValidation from "./ITurnValidation";

export default class RoleTurnValidation implements ITurnValidation {
  constructor(
    public readonly turnInitiatorRole: IPlayerRole,
    public readonly turnInitiatorTurnTypeCategory: ITurnTypeCategory,
  ) {}

  public validate = () => {
    if (
      this.turnInitiatorRole instanceof ManiacPlayerRole &&
      this.turnInitiatorTurnTypeCategory instanceof AttackingTurnTypeCategory
    ) {
      return true;
    }

    if (
      this.turnInitiatorRole instanceof ComradePlayerRole &&
      this.turnInitiatorTurnTypeCategory instanceof HelpingTurnTypeCategory
    ) {
      return true;
    }

    if (
      this.turnInitiatorRole instanceof RoguePlayerRole &&
      this.turnInitiatorTurnTypeCategory instanceof DefensiveTurnTypeCategory
    ) {
      return true;
    }

    if (this.turnInitiatorTurnTypeCategory instanceof SystemTurnTypeCategory) {
      return true;
    }

    return false;
  };
}
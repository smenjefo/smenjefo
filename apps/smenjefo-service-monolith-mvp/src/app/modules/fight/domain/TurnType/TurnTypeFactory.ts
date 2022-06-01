import ITurnType from "./ITurnType";
import DomainException from "../../../../exceptions/DomainException"
;
import RockTurnType from "./RockTurnType";
import ScissorsTurnType from "./ScissorsTurnType";
import PaperTurnType from "./PaperTurnType";
import SuperRockTurnType from "./SuperRockTurnType";
import SuperScissorsTurnType from "./SuperScissorsTurnType";
import SuperPaperTurnType from "./SuperPaperTurnType";
import HandOfHelpTurnType from "./HandOfHelpTurnType";
import DonorTurnType from "./DonorTurnType";
import CheatTurnType from "./CheatTurnType";
import SkipTurnType from "./SkipTurnType";

export default class TurnTypeFactory {
  public create = (turnType: string): ITurnType => {
    if (turnType === 'rock') {
      return new RockTurnType();
    }

    if (turnType === 'scissors') {
      return new ScissorsTurnType();
    }

    if (turnType === 'paper') {
      return new PaperTurnType();
    }

    if (turnType === 'superRock') {
      return new SuperRockTurnType();
    }

    if (turnType === 'superScissors') {
      return new SuperScissorsTurnType();
    }

    if (turnType === 'superPaper') {
      return new SuperPaperTurnType();
    }

    if (turnType === 'handOfHelp') {
      return new HandOfHelpTurnType();
    }

    if (turnType === 'donor') {
      return new DonorTurnType();
    }

    if (turnType === 'cheat') {
      return new CheatTurnType();
    }

    if (turnType === 'skip') {
      return new SkipTurnType();
    }

    throw new DomainException('Unknown turn type');
  };
}
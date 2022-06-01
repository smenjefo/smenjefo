import DomainException from "../../../../exceptions/DomainException";
import ITurnDirection from "./ITurnDirection";
import MutualTurnDirection from "./MutualTurnDirection";
import SelfTurnDirection from "./SelfTurnDirection";
import UnidirectionalTurnDirection from "./UnidirectionalTurnDirection";

export default class TurnDirectionFactory {
  public create = (turnDirection: string): ITurnDirection => {
    if (turnDirection === 'mutual') {
      return new MutualTurnDirection();
    }

    if (turnDirection === 'unidirectional') {
      return new UnidirectionalTurnDirection();
    }

    if (turnDirection === 'self') {
      return new SelfTurnDirection();
    }

    throw new DomainException('Unknown turn direction');
  };
}
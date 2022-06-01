import CheatTurnType from "../TurnType/CheatTurnType";
import PaperTurnType from "../TurnType/PaperTurnType";
import RockTurnType from "../TurnType/RockTurnType";
import ScissorsTurnType from "../TurnType/ScissorsTurnType";
import SkipTurnType from "../TurnType/SkipTurnType";
import TurnTypeListFactory from "./TurnTypeListFactory";

export default class RogueTurnTypeListFactory extends TurnTypeListFactory {
  public createForEnemy = () => {
    return [
      new RockTurnType(),
      new ScissorsTurnType(),
      new PaperTurnType(),
    ];
  };

  public createForTeammate = () => {
    return [];
  };

  public createForSelf = () => {
    return [
      new CheatTurnType(),
      new SkipTurnType(),
    ];
  };
}
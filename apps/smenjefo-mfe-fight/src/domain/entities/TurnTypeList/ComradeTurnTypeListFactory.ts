import DonorTurnType from "../TurnType/DonorTurnType";
import HandOfHelpTurnType from "../TurnType/HandOfHelpTurnType";
import PaperTurnType from "../TurnType/PaperTurnType";
import RockTurnType from "../TurnType/RockTurnType";
import ScissorsTurnType from "../TurnType/ScissorsTurnType";
import SkipTurnType from "../TurnType/SkipTurnType";
import TurnTypeListFactory from "./TurnTypeListFactory";

export default class ComradeTurnTypeListFactory extends TurnTypeListFactory {
  public createForEnemy = () => {
    return [
      new RockTurnType(),
      new ScissorsTurnType(),
      new PaperTurnType(),
    ];
  };

  public createForTeammate = () => {
    return [
      new DonorTurnType(),
      new HandOfHelpTurnType(),
    ];
  };

  public createForSelf = () => {
    return [
      new HandOfHelpTurnType(),
      new SkipTurnType(),
    ];
  };
}
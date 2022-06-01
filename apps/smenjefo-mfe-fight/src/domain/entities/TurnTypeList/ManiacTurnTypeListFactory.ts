import PaperTurnType from "../TurnType/PaperTurnType";
import RockTurnType from "../TurnType/RockTurnType";
import ScissorsTurnType from "../TurnType/ScissorsTurnType";
import SkipTurnType from "../TurnType/SkipTurnType";
import SuperPaperTurnType from "../TurnType/SuperPaperTurnType";
import SuperRockTurnType from "../TurnType/SuperRockTurnType";
import SuperScissorsTurnType from "../TurnType/SuperScissorsTurnType";
import TurnTypeListFactory from "./TurnTypeListFactory";

export default class ManiacTurnTypeListFactory extends TurnTypeListFactory {
  public createForEnemy = () => {
    return [
      new RockTurnType(),
      new ScissorsTurnType(),
      new PaperTurnType(),
      new SuperRockTurnType(),
      new SuperScissorsTurnType(),
      new SuperPaperTurnType(),
    ];
  };

  public createForTeammate = () => {
    return [];
  };

  public createForSelf = () => {
    return [
      new SkipTurnType(),
    ];
  };
}
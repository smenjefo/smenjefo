import IFightType from "../FightType/IFightType";
import Player from "../Player/Player";
import IFightValidation from "./IFightValidation";

export default class TypeFightValidation implements IFightValidation {
  constructor(
    private readonly players: Player[],
    private readonly fightType: IFightType,
  ) {}

  public validate = () => {
    return false;
  };
}
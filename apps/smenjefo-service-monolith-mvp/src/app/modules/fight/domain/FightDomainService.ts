import PlayersDuplicateFightValidation from "./FightValidation/PlayersDuplicateFightValidation";

export default class FightDomainService {
  public start = () => {
    new PlayersDuplicateFightValidation([]).validate();
  };
}
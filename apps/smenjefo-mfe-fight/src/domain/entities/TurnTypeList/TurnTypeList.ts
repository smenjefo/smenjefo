import Player from "../Player/Player";
import ComradePlayerRole from "../PlayerRole/ComradePlayerRole";
import ManiacPlayerRole from "../PlayerRole/ManiacPlayerRole";
import RoguePlayerRole from "../PlayerRole/RoguePlayerRole";
import RelationshipFactory from "../Relationship/RelationshipFactory";
import ComradeTurnTypeListFactory from "./ComradeTurnTypeListFactory";
import ManiacTurnTypeListFactory from "./ManiacTurnTypeListFactory";
import RogueTurnTypeListFactory from "./RogueTurnTypeListFactory";

export default class TurnTypeList {
  public define = (initiator: Player, target: Player) => {
    const relationshipFactory = new RelationshipFactory();
    const relationship = relationshipFactory.create(initiator, target);

    const initiatorPlayerRole = initiator.getPlayerRole();

    if (initiatorPlayerRole instanceof ManiacPlayerRole) {
      return new ManiacTurnTypeListFactory().create(relationship);
    }

    if (initiatorPlayerRole instanceof ComradePlayerRole) {
      return new ComradeTurnTypeListFactory().create(relationship);
    }

    if (initiatorPlayerRole instanceof RoguePlayerRole) {
      return new RogueTurnTypeListFactory().create(relationship);
    }

    return [];
  };
}
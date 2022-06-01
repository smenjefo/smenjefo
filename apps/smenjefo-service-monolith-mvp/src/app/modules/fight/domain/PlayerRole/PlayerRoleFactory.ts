import DomainException from "../../../../exceptions/DomainException";

import ComradePlayerRole from "./ComradePlayerRole";
import ManiacPlayerRole from "./ManiacPlayerRole";
import RoguePlayerRole from "./RoguePlayerRole";

export default class PlayerRoleFactory {
  constructor(
    private readonly role: string,
  ) {}

  public create = () => {
    if (this.role === 'maniac') {
      return new ManiacPlayerRole();
    }

    if (this.role === 'comrade') {
      return new ComradePlayerRole();
    }

    if (this.role === 'rogue') {
      return new RoguePlayerRole();
    }

    throw new DomainException('Unknown role');
  };
}
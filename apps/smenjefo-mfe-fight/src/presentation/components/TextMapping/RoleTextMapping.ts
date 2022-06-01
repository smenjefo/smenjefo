import ITextMapping from "./ITextMapping";

export default class RoleTextMapping implements ITextMapping {
  public mapValueToUserText = (value) => {
    if (value === 'maniac') {
      return 'fight.FIGHT_ROLE_MANIAC';
    }

    if (value === 'comrade') {
      return 'fight.FIGHT_ROLE_COMRADE';
    }

    if (value === 'rogue') {
      return 'fight.FIGHT_ROLE_ROGUE';
    }

    return '';
  };
}
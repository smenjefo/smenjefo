import ITextMapping from "./ITextMapping";

export default class TurnTypeTextMapping implements ITextMapping {
  public mapValueToUserText = (value) => {
    if (value === 'rock') {
      return 'fight.FIGHT_TURN_TYPE_ROCK';
    }

    if (value === 'scissors') {
      return 'fight.FIGHT_TURN_TYPE_SCISSORS';
    }

    if (value === 'paper') {
      return 'fight.FIGHT_TURN_TYPE_PAPER';
    }

    if (value === 'superRock') {
      return 'fight.FIGHT_TURN_TYPE_SUPER_ROCK';
    }

    if (value === 'superScissors') {
      return 'fight.FIGHT_TURN_TYPE_SUPER_SCISSORS';
    }

    if (value === 'superPaper') {
      return 'fight.FIGHT_TURN_TYPE_SUPER_PAPER';
    }

    if (value === 'handOfHelp') {
      return 'fight.FIGHT_TURN_TYPE_HAND_OF_HELP';
    }

    if (value === 'donor') {
      return 'fight.FIGHT_TURN_TYPE_DONOR';
    }

    if (value === 'cheat') {
      return 'fight.FIGHT_TURN_TYPE_CHEAT';
    }

    if (value === 'skip') {
      return 'fight.FIGHT_TURN_TYPE_SKIP';
    }

    return '';
  };
}
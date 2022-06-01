import IMapper from "./IMapper";

import ITurnType from "../entities/TurnType/ITurnType";
import TurnTypes from "../entities/TurnType/TurnTypes";
import RockTurnType from "../entities/TurnType/RockTurnType";
import ScissorsTurnType from "../entities/TurnType/ScissorsTurnType";
import PaperTurnType from "../entities/TurnType/PaperTurnType";
import SuperRockTurnType from "../entities/TurnType/SuperRockTurnType";
import SuperScissorsTurnType from "../entities/TurnType/SuperScissorsTurnType";
import SuperPaperTurnType from "../entities/TurnType/SuperPaperTurnType";
import HandOfHelpTurnType from "../entities/TurnType/HandOfHelpTurnType";
import DonorTurnType from "../entities/TurnType/DonorTurnType";
import CheatTurnType from "../entities/TurnType/CheatTurnType";
import SkipTurnType from "../entities/TurnType/SkipTurnType";

export default class TurnTypeMapper implements IMapper<ITurnType, string> {
  public fromDtoToEntity = (dto: string) => {
    if (dto === TurnTypes.ROCK) {
      return new RockTurnType();
    }

    if (dto === TurnTypes.SCISSORS) {
      return new ScissorsTurnType();
    }

    if (dto === TurnTypes.PAPER) {
      return new PaperTurnType();
    }

    if (dto === TurnTypes.SUPER_ROCK) {
      return new SuperRockTurnType();
    }

    if (dto === TurnTypes.SUPER_SCISSORS) {
      return new SuperScissorsTurnType();
    }

    if (dto === TurnTypes.SUPER_PAPER) {
      return new SuperPaperTurnType();
    }

    if (dto === TurnTypes.HAND_OF_HELP) {
      return new HandOfHelpTurnType();
    }

    if (dto === TurnTypes.DONOR) {
      return new DonorTurnType();
    }

    if (dto === TurnTypes.CHEAT) {
      return new CheatTurnType();
    }

    if (dto === TurnTypes.SKIP) {
      return new SkipTurnType();
    }
  };

  public fromEntityToDto = (entity: ITurnType) => {
    if (entity instanceof RockTurnType) {
      return TurnTypes.ROCK;
    }

    if (entity instanceof ScissorsTurnType) {
      return TurnTypes.SCISSORS;
    }

    if (entity instanceof PaperTurnType) {
      return TurnTypes.PAPER;
    }

    if (entity instanceof SuperRockTurnType) {
      return TurnTypes.SUPER_ROCK;
    }

    if (entity instanceof SuperScissorsTurnType) {
      return TurnTypes.SUPER_SCISSORS;
    }

    if (entity instanceof SuperPaperTurnType) {
      return TurnTypes.SUPER_PAPER;
    }

    if (entity instanceof HandOfHelpTurnType) {
      return TurnTypes.HAND_OF_HELP;
    }

    if (entity instanceof DonorTurnType) {
      return TurnTypes.DONOR;
    }

    if (entity instanceof CheatTurnType) {
      return TurnTypes.CHEAT;
    }

    if (entity instanceof SkipTurnType) {
      return TurnTypes.SKIP;
    }
  };
}
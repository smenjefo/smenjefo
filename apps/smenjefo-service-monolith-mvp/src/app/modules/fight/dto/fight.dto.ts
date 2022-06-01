import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsUUID,
} from "class-validator";

import FightCreateDto from "./fight-create.dto";
import FightStatuses from "./fight-statuses.enum";

export default class FightDto extends FightCreateDto {
  @IsNotEmpty()
  @IsUUID(4)
  uuid: string;

  @IsNotEmpty()
  @IsUUID(4)
  currentRoundId: string;

  @IsNotEmpty()
  @IsEnum(FightStatuses)
  status: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  teams: string[];
}
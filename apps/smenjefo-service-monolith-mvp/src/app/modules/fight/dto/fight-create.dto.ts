import { Type } from "class-transformer";

import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsUUID,
  ValidateNested,
} from "class-validator";

import FightConfigurationType from "./fight-configuration-type.enum";
import FightTypes from "./fight-types.enum";
import PlayerCreateDto from "./player-create.dto";

export default class FightCreateDto {
  @IsNotEmpty()
  @IsUUID(4)
  fightApplicationId: string;

  @IsNotEmpty()
  @IsEnum(FightConfigurationType)
  fightConfigurationType: string;

  @IsNotEmpty()
  @IsEnum(FightTypes)
  type: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PlayerCreateDto)
  players: PlayerCreateDto[];
}
import { Type } from "class-transformer";

import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";

import PlayerCreateDto from "./player-create.dto";
import RoundCreateDto from "./round-create.dto";

export default class RoundDto extends RoundCreateDto {
  @IsNotEmpty()
  @IsUUID(4)
  nextRoundId: string;

  @IsNotEmpty()
  @IsString()
  createdAt: string;

  @IsNotEmpty()
  @IsString()
  endsAt: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsString()
  fightStatus: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PlayerCreateDto)
  players: PlayerCreateDto[];
}
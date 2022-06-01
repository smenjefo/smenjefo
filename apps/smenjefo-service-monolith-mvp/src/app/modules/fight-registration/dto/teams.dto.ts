import { Type } from 'class-transformer';

import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from 'class-validator';

import PlayerDto from './player.dto';

export default class TeamsDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlayerDto)
  players: PlayerDto[];
}
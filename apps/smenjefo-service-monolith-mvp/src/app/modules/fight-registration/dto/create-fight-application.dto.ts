import { Type } from 'class-transformer';

import {
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  IsArray,
  ValidateNested,
  IsEnum,
  IsString,
} from 'class-validator';

import ApplicationTypes from './application-types.enum';
import ApplicationModes from './application-modes.enum';

import FightFilterDto from './fight-filter.dto';
import FightTriggerDto from './fight-trigger.dto';

export default class CreateFightApplicationDto {
  @IsNotEmpty()
  @IsEnum(ApplicationTypes)
  type: string;

  @IsNotEmpty()
  @IsEnum(ApplicationModes)
  mode: string;

  @IsNotEmpty()
  @IsString()
  ownerNickname: string;

  @IsNotEmpty()
  @IsString()
  ownerEntityId: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FightFilterDto)
  fightFilters: FightFilterDto[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FightTriggerDto)
  fightTriggers: FightTriggerDto[];

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(10)
  teamCapacity: number;
}

import {
  IsString,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

import FightTriggerTypes from './fight-trigger-types.enum';

export default class FightTriggerDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(FightTriggerTypes)
  type: string;
}
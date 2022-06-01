import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsInt,
  Min,
  Max,
} from 'class-validator';

import FightFilterTypes from './fight-filter-types.enum';

export default class FilterDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(FightFilterTypes)
  type: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10000)
  value: number;
}
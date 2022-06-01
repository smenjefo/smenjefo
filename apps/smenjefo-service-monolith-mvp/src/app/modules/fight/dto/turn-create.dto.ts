import {
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";

import TurnType from "./turn-type.enum";

export default class TurnCreateDto {
  @IsNotEmpty()
  @IsEnum(TurnType)
  turnType: string;

  @IsNotEmpty()
  @IsString()
  initiatorId: string;

  @IsNotEmpty()
  @IsString()
  targetId: string;
}
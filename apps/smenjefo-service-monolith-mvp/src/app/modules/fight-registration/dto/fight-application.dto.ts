import { Type } from 'class-transformer';

import {
  IsNotEmpty,
  IsArray,
  IsString,
  ValidateNested,
  IsEnum,
  IsUUID,
} from 'class-validator';

import CreateFightApplicationDto from "./create-fight-application.dto";
import TeamsDto from './teams.dto';
import ApplicationStatus from './application-status.enum';

export default class FightApplicationDto extends CreateFightApplicationDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsUUID(4)
  fightId: string;

  @IsNotEmpty()
  @IsEnum(ApplicationStatus)
  status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TeamsDto)
  teams: TeamsDto[];
}

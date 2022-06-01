import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from "class-validator";

import Roles from "./roles.enum";

export default class PlayerCreateDto {
  @IsNotEmpty()
  @IsString()
  entityId: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  nickname: string;

  @IsNotEmpty()
  @IsEnum(Roles)
  role: string;

  @IsNotEmpty()
  @IsString()
  avatarURL: string;

  @IsNotEmpty()
  @IsUUID(4)
  team: string;
}
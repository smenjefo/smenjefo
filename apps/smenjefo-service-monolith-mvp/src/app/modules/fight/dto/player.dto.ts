import {
  IsEnum,
  IsNotEmpty,
} from "class-validator";

import PlayerCreateDto from "./player-create.dto";
import Roles from "./roles.enum";

export default class PlayerDto extends PlayerCreateDto {
  @IsNotEmpty()
  @IsEnum(Roles)
  role: string;
}
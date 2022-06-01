import {
  IsNotEmpty,
  IsUUID,
} from "class-validator";

import TurnCreateDto from "./turn-create.dto";

export default class TurnDto extends TurnCreateDto {
  @IsNotEmpty()
  @IsUUID(4)
  uuid: string;
}
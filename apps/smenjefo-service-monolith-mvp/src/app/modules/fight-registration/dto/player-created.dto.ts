import {
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

import PlayerDto from './player.dto';

export default class PlayerCreatedDto extends PlayerDto {
  @IsNotEmpty()
  @IsUUID(4)
  fightApplicationId: string;

  @IsNotEmpty()
  @IsUUID(4)
  teamId: string;
}
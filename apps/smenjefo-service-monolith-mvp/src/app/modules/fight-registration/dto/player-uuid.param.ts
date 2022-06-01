import { IsUUID } from 'class-validator';

export class PlayerUUIDParam {
  @IsUUID(4)
  playerUUID: string;
}

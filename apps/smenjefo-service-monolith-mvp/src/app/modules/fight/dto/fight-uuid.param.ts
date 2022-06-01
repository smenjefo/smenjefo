import { IsUUID } from 'class-validator';

export class FightUUIDParam {
  @IsUUID(4)
  fightUUID: string;
}

import { IsUUID } from 'class-validator';

export class TeamUUIDParam {
  @IsUUID(4)
  teamUUID: string;
}

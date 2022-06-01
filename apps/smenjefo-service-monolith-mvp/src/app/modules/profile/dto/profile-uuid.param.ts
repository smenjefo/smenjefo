import { IsUUID } from 'class-validator';

export class ProfileUUIDParam {
  @IsUUID(4)
  profileUUID: string;
}

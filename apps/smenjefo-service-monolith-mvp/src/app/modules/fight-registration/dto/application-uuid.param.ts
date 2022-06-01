import { IsUUID } from 'class-validator';

export class ApplicationUUIDParam {
  @IsUUID(4)
  applicationUUID: string;
}

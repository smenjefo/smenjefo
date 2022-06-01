import { IsUUID } from 'class-validator';

export class RoundUUIDParam {
  @IsUUID(4)
  roundUUID: string;
}

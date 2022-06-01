import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsEnum,
} from 'class-validator';

import ProfileCreateDto from './profile-create.dto';
import ProfileStatuses from './profile-statuses.enum';

export default class ProfileDto extends ProfileCreateDto {
  @IsNotEmpty()
  @IsString()
  entityId: string;

  @IsUUID(4)
  fightApplicationId: string;

  @IsUUID(4)
  fightId: string;

  @IsNotEmpty()
  @IsEnum(ProfileStatuses)
  status: string;
}
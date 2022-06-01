import {
  IsUUID,
  IsEnum,
  IsOptional,
} from 'class-validator';

import ProfileStatuses from './profile-statuses.enum';

export default class ProfileUpdateDto {
  @IsOptional()
  @IsEnum(ProfileStatuses)
  status: string;

  @IsOptional()
  @IsUUID(4)
  fightApplicationId: string;

  @IsOptional()
  @IsUUID(4)
  fightId: string;
}
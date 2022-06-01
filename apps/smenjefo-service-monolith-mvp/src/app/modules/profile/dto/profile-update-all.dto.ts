import {
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from 'class-validator';

import ProfileUpdateDto from './profile-update.dto';

export default class ProfileUpdateAllDto {
  @IsNotEmpty()
  @IsArray()
  profiles: string[];

  @IsNotEmpty()
  @ValidateNested()
  data: ProfileUpdateDto;
}
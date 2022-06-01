import {
  IsString,
  IsNotEmpty,
  Length,
} from 'class-validator';

export default class ProfileCreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  nickname: string;

  @IsNotEmpty()
  @IsString()
  avatarURL: string;
}
import {
  IsString,
  IsNotEmpty,
  Length,
  // IsInt,
  // Min,
  // Max,
} from 'class-validator';

export default class PlayerDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  nickname: string;

  @IsNotEmpty()
  @IsString()
  entityId: string;

  // TODO: filter feature
  // @IsNotEmpty()
  // @IsInt()
  // @Min(0)
  // @Max(10000)
  // authorityPoints: number;
}
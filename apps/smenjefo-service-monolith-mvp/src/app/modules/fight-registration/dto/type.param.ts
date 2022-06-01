import { IsEnum, IsOptional } from 'class-validator';

import ApplicationTypes from './application-types.enum';

export class TypeParam {
  @IsOptional()
  @IsEnum(ApplicationTypes)
  type: string;
}

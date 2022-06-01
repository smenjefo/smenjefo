import {
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";

import JSONPatchOperationsEnum from "./json-patch-operations.enum";

export default class JSONPatchDto {
  @IsNotEmpty()
  @IsEnum(JSONPatchOperationsEnum, { each: true })
  op: string;

  @IsNotEmpty()
  @IsString({ each: true })
  path: string;

  @IsNotEmpty()
  @IsString({ each: true })
  value: string;
}
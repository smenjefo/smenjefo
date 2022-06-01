import { Injectable } from "@nestjs/common";
import { ClassConstructor, instanceToPlain, plainToInstance } from "class-transformer";

@Injectable()
export default class EntityMapper<Entity, Dto> {
  public fromDtoToEntity = (entity: ClassConstructor<Entity>, dto: Dto): Entity => {
    return plainToInstance(entity, dto);
  };

  public fromEntityToDto = (entity: Entity): Dto => {
    return instanceToPlain(entity) as Dto;
  };
}
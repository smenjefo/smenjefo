export default interface IMapper<Entity, DTO> {
  fromDtoToEntity(dto: DTO): Entity;
  fromEntityToDto(entity: Entity): DTO;
}
export interface IPlayerDTO {
  id?: string;
  entityId: string;
  nickname: string;
}
export interface IPlayerCreatedDTO extends IPlayerDTO {
  fightApplicationId: string;
  teamId: string;
}

import { IFightApplication } from "../../../slices/fightApplicationsSlice";

export interface IFightApplicationDTO extends IFightApplication {};

export interface ILoadFightApplicationsDTO {
  type: string;
}

export interface ILoadFightApplicationDTO {
  fightApplicationId: string;
}

export interface IRemoveFightApplicationDTO {
  fightApplicationId: string;
}

export interface IFightApplicationUpdatedDTO {
  fightApplicationId: string;
}

export interface IAddPlayerToFightApplicationDTO {
  fightApplicationId: string;
  teamId: string;
  entityId: string;
  nickname: string;
}

export interface IRemovePlayerFromFightApplicationDTO {
  fightApplicationId: string;
  teamId: string;
  playerId: string;
}
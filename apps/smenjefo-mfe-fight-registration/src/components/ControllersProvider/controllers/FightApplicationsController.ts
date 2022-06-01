import { Dispatch } from "react";
import { IWebSocket } from "@smenjefo/smenjefo-mfe";

import { actions } from "../../../slices/fightApplicationsSlice";

import {
  IFightApplicationDTO,
  ILoadFightApplicationsDTO,
  ILoadFightApplicationDTO,
  IRemoveFightApplicationDTO,
  IAddPlayerToFightApplicationDTO,
  IRemovePlayerFromFightApplicationDTO,
  IFightApplicationUpdatedDTO,
} from '../dto/IFightApplicationDTO';

import { IPlayerCreatedDTO, IPlayerDTO } from "../dto/IPlayerDTO";

export default class FightApplicationsController {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly dispatch: Dispatch<any>,
  ) {
    this.websocket.on('fightApplicationsLoaded', this.fightApplicationsLoaded);
    this.websocket.on('fightApplicationLoaded', this.fightApplicationLoaded);
    this.websocket.on('fightApplicationRemoved', this.fightApplicationRemoved);
    this.websocket.on('fightApplicationCreated', this.fightApplicationCreated);
    this.websocket.on('playerToFightApplicationAdded', this.playerToFightApplicationAdded);
    this.websocket.on('playerFromFightApplicationRemoved', this.playerFromFightApplicationRemoved);
    this.websocket.on('fightApplicationUpdated', this.fightApplicationUpdated);
  }

  private fightApplicationsLoaded = (payload: IFightApplicationDTO[]) => {
    this.dispatch(actions.setFightApplications(payload));
  };

  private fightApplicationLoaded = (payload: IFightApplicationDTO) => {
    this.dispatch(actions.setCurrentFightApplication(payload));
  };

  private fightApplicationRemoved = (payload: IFightApplicationDTO) => {
    //
  };

  private fightApplicationCreated = (payload: IFightApplicationDTO) => {
    this.loadFightApplication({ fightApplicationId: payload.id });
  };

  private playerToFightApplicationAdded = (payload: IPlayerCreatedDTO) => {
    this.loadFightApplication({ fightApplicationId: payload.fightApplicationId });
  };

  private playerFromFightApplicationRemoved = (payload: IPlayerDTO) => {
    //
  };

  public loadFightApplications = (dto: ILoadFightApplicationsDTO) => {
    this.websocket.emit('loadFightApplications', dto);
  };

  public loadFightApplication = (dto: ILoadFightApplicationDTO) => {
    this.websocket.emit('loadFightApplication', dto);
  };

  public removeFightApplication = (dto: IRemoveFightApplicationDTO) => {
    this.websocket.emit('removeFightApplication', dto);
  };

  public createFightApplication = (payload: IFightApplicationDTO) => {
    this.websocket.emit('createFightApplication', payload);
  };

  public addPlayerToFightApplication = (payload: IAddPlayerToFightApplicationDTO) => {
    this.websocket.emit('addPlayerToFightApplication', payload);
  };

  public removePlayerFromFightApplication = (payload: IRemovePlayerFromFightApplicationDTO) => {
    this.websocket.emit('removePlayerFromFightApplication', payload);
  };

  public fightApplicationUpdated = (payload: IFightApplicationUpdatedDTO) => {
    this.loadFightApplication({ fightApplicationId: payload.fightApplicationId });
  };
}
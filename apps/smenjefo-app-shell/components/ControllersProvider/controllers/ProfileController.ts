import { Dispatch } from "react";
import { IMessageBusSubscriber, IWebSocket } from "@smenjefo/smenjefo-mfe";
import { Store } from "@reduxjs/toolkit";

import { IController } from "./IController";
import { IProfileLoadedDTO } from "../dto/IProfileDTO";
import ICreateProfileDTO from "../dto/ICreateProfileDTO";
import { updateProfile } from "../../../slices/profileSlice";

export default class ProfileController implements IController {
  constructor(
    private readonly websocket: IWebSocket,
    private readonly messageBus: IMessageBusSubscriber,
    private readonly dispatch: Dispatch<any>,
    private readonly store: Store,
  ) {
    this.subscribeToEvents();
  }

  public subscribeToEvents = () => {
    this.websocket.on('profileLoaded', this.onProfileLoaded);
    this.websocket.on('profileUpdated', this.onProfileUpdated);

    this.messageBus.on('loadProfile', this.loadProfileFromMessageBus);
  };

  public loadProfile = () => {
    const profile = this.store.getState().profile;

    this.websocket.emit('loadProfile', { id: profile.entityId });
  };

  public loadProfileFromMessageBus = () => {
    this.messageBus.sendToMessageBus('profileLoaded', this.store.getState().profile);
  };

  // TODO: fake profile
  public createProfile = (payload: ICreateProfileDTO) => {
    this.websocket.emit('createProfile', payload);
  };

  private onProfileLoaded = (payload: IProfileLoadedDTO) => {
    this.dispatch(updateProfile(payload));
    this.messageBus.sendToMessageBus('profileLoaded', payload);
  };

  private onProfileUpdated = () => {
    this.loadProfile();
  };
}
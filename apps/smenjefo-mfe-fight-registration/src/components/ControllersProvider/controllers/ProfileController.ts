import { Dispatch } from "react";
import { IMessageBusSubscriber } from "@smenjefo/smenjefo-mfe";

import { IProfileLoadedDTO } from "../dto/IProfileDTO";
import { updateProfile } from "../../../slices/profileSlice";

export default class ProfileController {
  constructor(
    private readonly messageBus: IMessageBusSubscriber,
    private readonly dispatch: Dispatch<any>,
  ) {
    this.messageBus.on('profileLoaded', this.onProfileLoaded);
    this.messageBus.on('profileUpdated', this.onProfileUpdated);
  }

  public loadProfile = () => {
    this.messageBus.sendToMessageBus('loadProfile');
  };

  private onProfileLoaded = (payload: IProfileLoadedDTO) => {
    this.dispatch(updateProfile(payload));
  };

  private onProfileUpdated = (payload: IProfileLoadedDTO) => {
    this.dispatch(updateProfile(payload));
  };
}
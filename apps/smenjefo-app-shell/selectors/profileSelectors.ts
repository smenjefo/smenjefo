import { RootState } from "../store/store";

export const selectProfile = (state: RootState) => {
  return state.profile;
};
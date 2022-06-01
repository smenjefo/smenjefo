import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectProfile = (state: RootState) => {
  return state.profile;
};

export const selectProfileStatus = createSelector(
  [selectProfile],
  (profile) => {
    return profile?.status;
  },
);

export const selectFightApplicationId = createSelector(
  [selectProfile],
  (profile) => {
    return profile?.fightApplicationId;
  },
);
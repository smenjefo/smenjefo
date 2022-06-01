import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store/store";

export const selectMfeManifest = (state: RootState) => {
  return state.mfeManifest;
};

export const selectFightManifest = createSelector(
  [selectMfeManifest],
  (mfeManifest) => {
    return mfeManifest.fight;
  },
);

export const selectFightRegistrationManifest = createSelector(
  [selectMfeManifest],
  (mfeManifest) => {
    return mfeManifest.fightRegistration;
  },
);
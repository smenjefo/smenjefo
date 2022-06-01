import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectFightApplications = (state: RootState) => {
  return state.fightApplications;
};

export const selectCurrentFightApplication = createSelector(
  [selectFightApplications],
  (fightApplications) => {
    return fightApplications.currentFightApplication;
  },
);

export const selectFightApplicationsList = createSelector(
  [selectFightApplications],
  (fightApplications) => {
    return fightApplications.fightApplications;
  },
);
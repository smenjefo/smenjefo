import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectFightType = (state: RootState) => {
  return state.fightType;
};

export const selectCurrentFightType = createSelector(
  [selectFightType],
  (fightType) => {
    return fightType.currentFightType;
  },
);
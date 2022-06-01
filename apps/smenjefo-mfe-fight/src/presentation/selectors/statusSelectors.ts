import { createSelector } from 'reselect';

import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectDataStatus = (data: IApplicationDataContext) => {
  return data.status[0];
};

export const selectStatus = createSelector(
  [selectDataStatus],
  (status) => {
    return status?.status;
  },
);

export const selectStatusCurrentRoundNumber = createSelector(
  [selectDataStatus],
  (status) => {
    return status?.currentRoundNumber;
  },
);

export const selectStatusRemainingTime = createSelector(
  [selectDataStatus],
  (status) => {
    return status?.remainingTime;
  },
);

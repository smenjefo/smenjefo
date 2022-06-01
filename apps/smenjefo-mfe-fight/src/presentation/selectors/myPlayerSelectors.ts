import { createSelector } from 'reselect';

import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectMyPlayer = (data: IApplicationDataContext) => {
  return data.myPlayer[0];
};

export const selectMyPlayerNickname = createSelector(
  [selectMyPlayer],
  (myPlayer) => {
    return myPlayer?.nickname;
  },
);

export const selectMyPlayerId = createSelector(
  [selectMyPlayer],
  (myPlayer) => {
    return myPlayer?.playerId;
  },
);
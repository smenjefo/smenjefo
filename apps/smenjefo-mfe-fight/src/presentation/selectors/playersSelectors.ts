import { createSelector } from 'reselect';

import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectPlayers = (data: IApplicationDataContext) => {
  return data.players;
};

export const selectTeamId = (data: IApplicationDataContext, teamId: string) => {
  return teamId;
};

export const selectPlayersByTeamId = createSelector(
  [selectPlayers, selectTeamId],
  (players, teamId) => {
    return players.filter((player) => {
      return player.team === teamId;
    });
  },
);
import { createSelector } from 'reselect';

import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectTeams = (data: IApplicationDataContext) => {
  return data.teams;
};

export const selectTeamsIds = createSelector(
  [selectTeams],
  (teams) => {
    return teams.map((team) => {
      return team.teamId;
    });
  },
);
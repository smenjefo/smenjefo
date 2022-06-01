import { createSlice } from '@reduxjs/toolkit';

export type FightType = 'teamOnTeam' | 'duel'| 'allVersusAll';

export interface FightTypeState {
  currentFightType: FightType;
}

const initialState: FightTypeState = {
  currentFightType: 'teamOnTeam',
}

export const fightTypeSlice = createSlice({
  name: 'fightType',
  initialState,
  reducers: {
    changeCurrentFightTypeToTeamOnTeam: (state) => {
      state.currentFightType = 'teamOnTeam';
    },

    changeCurrentFightTypeToDuel: (state) => {
      state.currentFightType = 'duel';
    },

    changeCurrentFightTypeToAllVersusAll: (state) => {
      state.currentFightType = 'allVersusAll';
    },
  },
});

export const {
  changeCurrentFightTypeToTeamOnTeam,
  changeCurrentFightTypeToDuel,
  changeCurrentFightTypeToAllVersusAll,
} = fightTypeSlice.actions;

export default fightTypeSlice.reducer;
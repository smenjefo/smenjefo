import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FightType } from './fightTypeSlice';

type FightApplicationMode = 'training' | 'ladder';

interface IPlayer {
  id?: string;
  entityId: string;
  nickname: string;
}

interface ITeam {
  id: string,
  players: IPlayer[],
}

interface IFightFilter {
  type: 'byAuthority',
  value: number,
}

interface IFightTrigger {
  id: 'suffle' | 'suffle+';
}

export interface IFightApplication {
  id?: string;
  teams?: ITeam[],
  ownerEntityId: string,
  ownerNickname: string,
  type: FightType,
  mode: FightApplicationMode,
  fightFilters: IFightFilter[],
  fightTriggers: IFightTrigger[],
  teamCapacity: number,
}

export interface FightApplicationsState {
  currentFightApplication: IFightApplication;
  fightApplications: IFightApplication[];
}

const initialState: FightApplicationsState = {
  currentFightApplication: null,
  fightApplications: [],
}

export const fightApplicationsSlice = createSlice({
  name: 'fightApplications',
  initialState,
  reducers: {
    setCurrentFightApplication: (state, action: PayloadAction<IFightApplication>) => {
      state.currentFightApplication = action.payload;
    },

    setFightApplications: (state, action: PayloadAction<IFightApplication[]>) => {
      state.fightApplications = action.payload;
    },

    clear: (state) => {
      state.fightApplications = [];
    },
  },
});

export const { actions } = fightApplicationsSlice;

export default fightApplicationsSlice.reducer;
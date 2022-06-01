import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProfileStatus = 'free' | 'inFightApplication' | 'inFight';

export interface IProfile {
  entityId: string;
  nickname: string;
  status: ProfileStatus;
  fightApplicationId: string;
  fightId: string;
}

const initialState: IProfile = {
  entityId: '',
  nickname: '',
  status: 'free',
  fightApplicationId: null,
  fightId: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IProfile>) => {
      if (action.payload) {
        Object.keys(action.payload).forEach((updatedKey) => {
          state[updatedKey] = action.payload[updatedKey];
        });
      }
    },
  },
});

export const {
  updateProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
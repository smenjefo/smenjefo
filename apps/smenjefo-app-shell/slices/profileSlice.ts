import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as uuid from 'uuid';
import { uniqueNamesGenerator, animals } from 'unique-names-generator';

export type ProfileStatus = 'free' | 'inFightApplication' | 'inFight';

export interface IProfile {
  entityId: string;
  nickname: string;
  avatarURL: string;
  status: ProfileStatus;
  fightApplicationId: string;
  fightId: string;
}

// TODO: fake profile
const initialState: IProfile = {
  entityId: uuid.v4(),
  nickname: uniqueNamesGenerator({
    dictionaries: [animals],
  }),
  avatarURL: `/images/creature${Math.floor(Math.random() * 9)}.svg`,
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
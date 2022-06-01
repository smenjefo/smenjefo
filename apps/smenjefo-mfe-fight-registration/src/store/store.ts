import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import fightApplicationsSlice from '../slices/fightApplicationsSlice';
import fightTypeSlice from '../slices/fightTypeSlice';
import profileSlice from '../slices/profileSlice';

const logger = createLogger({
  titleFormatter: (action, time, took) => {
    return `action @ ${time} @@MFE-FIGHT-REGISTRATION/${action.type} (in ${took.toFixed(2)} ms)`;
  },
});

export const store = configureStore({
  reducer: {
    fightApplications: fightApplicationsSlice,
    fightType: fightTypeSlice,
    profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
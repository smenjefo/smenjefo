import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import profileSlice from '../slices/profileSlice';
import mfeManifestSlice from '../slices/mfeManifestSlice';

const logger = createLogger({
  titleFormatter: (action, time, took) => {
    return `action @ ${time} @@APP-SHELL/${action.type} (in ${took.toFixed(2)} ms)`;
  },
});

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    mfeManifest: mfeManifestSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
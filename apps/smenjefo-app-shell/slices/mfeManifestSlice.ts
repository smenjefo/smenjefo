import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ManifestProperty = 'url' | 'scope' | 'module';
export type Manifest = 'fight' | 'fightRegistration';

export type Manifests = Record<Manifest, Record<ManifestProperty, string>>;

const initialState: Manifests = {
  fight: {
    url: '',
    scope: '',
    module: '',
  },
  fightRegistration: {
    url: '',
    scope: '',
    module: '',
  },
};

export const mfeManifestSlice = createSlice({
  name: 'mfeManifest',
  initialState,
  reducers: {
    setManifests: (state, action: PayloadAction<Manifests>) => {
      if (action.payload) {
        Object.keys(action.payload).forEach((manifestName) => {
          Object.keys(action.payload[manifestName]).forEach((manifestKey) => {
            state[manifestName][manifestKey] = action.payload[manifestName][manifestKey];
          });
        });
      }
    },
  },
});

export const { setManifests } = mfeManifestSlice.actions;

export default mfeManifestSlice.reducer;
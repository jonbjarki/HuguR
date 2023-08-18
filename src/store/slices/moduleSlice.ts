import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface ModuleState {
  module_id: number;
}

/**
 * Default state object with initial values.
 */
const initialState: ModuleState = {
  module_id: 0,
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    setModule: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.module_id>,
    ) => {
      state.module_id = action.payload;
    },
  },
});

// A small helper of module state for `useSelector` function.
export const getModuleState = (state: { module: ModuleState }) => state.module;

// Exports all actions
export const { setModule } = moduleSlice.actions;

export default moduleSlice.reducer;

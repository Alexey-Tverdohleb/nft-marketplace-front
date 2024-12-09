import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  darkMode: boolean;
}

const initialState: IInitialState = {
  darkMode: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;

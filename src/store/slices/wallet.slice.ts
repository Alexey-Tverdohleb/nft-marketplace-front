import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  walletConnected: boolean
}

const initialState: IInitialState = {
  walletConnected: false,
};

const walletSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleWallet: (state) => {
      state.walletConnected = !state.walletConnected;
    },
  },
});

export const { toggleWallet } = walletSlice.actions;

export default walletSlice.reducer;

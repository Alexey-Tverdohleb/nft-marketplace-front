import { configureStore } from '@reduxjs/toolkit';
import { statsAPI } from 'services/StatsService';
import { collectionAPI } from 'services/CollectionService';
import { nftAPI } from 'services/NftService';
import settingsSlice from './slices/settings.slice';
import walletSlice from './slices/wallet.slice';
import fakeNftSlice from './slices/fakeNfts.slice';
import notificationsSlice from './slices/notifications.slice';

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    wallet: walletSlice,
    fakeNft: fakeNftSlice,
    notifications: notificationsSlice,
    [collectionAPI.reducerPath]: collectionAPI.reducer,
    [statsAPI.reducerPath]: statsAPI.reducer,
    [nftAPI.reducerPath]: nftAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    [collectionAPI.middleware, statsAPI.middleware, nftAPI.middleware],
  ),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

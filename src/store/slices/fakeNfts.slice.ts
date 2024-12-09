import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FAKE_NFTS from 'pages/NFT/fakeNFTs';

export type fakeNFT = {
  name: string
  details: string
  copies: number
  author: string
  collection_name: string
  released: string
  status: number
  src: string
  currency: string
  currentBid: number;
  activity: {
    event: {
      name: string
      icon: string
    }
    date_time: {
      date: string
      timestamp: string
    }
    price: {
      token: string
      usd: string
    }
  }[]
  price_ada: number
  multiplier: number
  isFavorite: boolean
  id: string
}

interface InitialState {
  fakeNftList: fakeNFT[]
  fetching: boolean;
}

const initialState: InitialState = {
  fakeNftList: FAKE_NFTS,
  fetching: false,
};

const fakeNftSlice = createSlice({
  name: 'fakeNfts',
  initialState,
  reducers: {
    setIsFavorite: (state, action: PayloadAction<string>) => {
      state.fakeNftList = state.fakeNftList
        // eslint-disable-next-line max-len
        .map((item) => (item.id === action.payload ? ({ ...item, isFavorite: !item.isFavorite }) : item));
    },
    loadMore: (state) => {
      state.fakeNftList = [...state.fakeNftList, ...FAKE_NFTS];
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.fetching = action.payload;
    },
    setEligible: (state, action: PayloadAction<string>) => {
      state.fakeNftList = state.fakeNftList
        .map((item) => (item.id === action.payload
          ? ({ ...item, status: item.status !== 0 ? 0 : 1 })
          : item));
    },
  },
});

export const {
  setIsFavorite, loadMore, setFetching, setEligible,
} = fakeNftSlice.actions;

export default fakeNftSlice.reducer;

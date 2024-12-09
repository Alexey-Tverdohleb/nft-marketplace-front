import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NFT } from './nft.types';

export const nftAPI = createApi({
  reducerPath: 'nftAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://plutobay.openswap.tech/' }),
  endpoints: (build) => ({
    fetchSingleNft: build.query<NFT, string>({
      query: (id) => ({
        url: `nft/${id}`,
      }),
    }),
  }),
});

export const { useFetchSingleNftQuery } = nftAPI;

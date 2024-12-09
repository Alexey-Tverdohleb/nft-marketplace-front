import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CollectionRank, CollectionTrending, HeaderCollection, Collection,
} from './collections.types';

export type CollectionService = {
  items: {
    collectionRanks: Record<'all' | 'day'| 'week' | 'month', CollectionRank[]>
    collectionsTrending: CollectionTrending[]
    featuredHeader: HeaderCollection[]
  }
}

export const collectionAPI = createApi({
  reducerPath: 'collectionAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://plutobay.openswap.tech/' }),
  endpoints: (build) => ({
    fetchCollections: build.query<CollectionService, void>({
      query: () => ({
        url: 'frontpage',
      }),
    }),
    fetchParticularCollection: build.query<Collection, string>({
      query: (id) => ({
        url: `collection/${id}`,
      }),
    }),
  }),
});

export const { useFetchCollectionsQuery, useFetchParticularCollectionQuery } = collectionAPI;

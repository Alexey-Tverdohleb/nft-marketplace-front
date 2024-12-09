import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type StatsService = {
  allRoyalties: number
  allVolume: number
  dayVolume: number
}

export const statsAPI = createApi({
  reducerPath: 'statsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://plutobay.openswap.tech/' }),
  endpoints: (build) => ({
    fetchStats: build.query<StatsService, void>({
      query: () => ({
        url: 'statistic',
      }),
    }),
  }),
});

export const { useFetchStatsQuery } = statsAPI;

import React from 'react';
import classNames from 'classnames';
import { useFetchStatsQuery } from 'services/StatsService';
import Dots from 'components/Loader/Dots';

export default function StatsBar() {
  const { data: stats, isLoading } = useFetchStatsQuery();

  return (
    <div className={classNames('mt-[5px] flex justify-center', { 'h-6': isLoading })}>
      { isLoading ? <Dots /> : (
        <div className="flex -mx-[-10px]">
          <p className="text mx-[10px]">
            All Volume:
            &nbsp;
            <span className="text-red-400 dark:text-red-800">
              {stats?.allVolume.toLocaleString()}
              &nbsp;
              ADA
            </span>
          </p>
          <p className="text mx-[10px]">
            Day Volume:
            &nbsp;
            <span className="text-red-400 dark:text-red-800">
              {stats?.dayVolume.toLocaleString()}
              &nbsp;
              ADA
            </span>
          </p>
          <p className="text mx-[10px]">
            Royalties:
            &nbsp;
            <span className="text-red-400 dark:text-red-800">
              {stats?.allRoyalties.toLocaleString()}
              &nbsp;
              ADA
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/Card/Card';
import lovelaceAdaExchange from 'helpers/lovelaceAdaExchange';
import cx from 'classnames';

interface Props {
  source: string;
  displayName: string;
  supply: number;
  globalVolume: number;
  globalFloor: number;
  link: string
}

const COMMON_STYLES = 'absolute hover:scale-[102%] hover:cursor-pointer hover:z-50 duration-300 right-[90px] md:right-[150px] lg:right-[132px] top-0 w-card-xs md:w-card-md ';
const FIRST_CHILD = 'first:z-40 first:left-0 md:first:left-40 first:lg:right-[350px] first:lg:left-40 first:top-24 first:w-card-sm first:md:w-card-md';
const LAST_CHILD = 'last:top-[150px] last:right-[0] ';

export default function FeatureHeaderCard({
  source, displayName, supply, globalVolume, globalFloor, link,
}: Props) {
  return (
    <div className={cx(COMMON_STYLES, FIRST_CHILD, LAST_CHILD)}>
      <Link to={`collection/${link}`}>
        <Card cover={`https://image-optimizer.jpgstoreapis.com/${source}`} className="">
          <div className="card-details p-2 md:p-4">
            <p className="text-[8px] md:text-[14px]">{displayName}</p>
            <div className="flex items-center justify-between px-0 md:px-4 mt-4">
              <div className="flex items-center flex-col">
                <p className="font-bold">{`${(supply / 1_000).toLocaleString()}k`}</p>
                <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">items</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="font-bold">{`${lovelaceAdaExchange(globalVolume, 'volume')}M`}</p>
                <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">volume</p>
              </div>
              <div className="flex items-center flex-col">
                <p className="font-bold">{lovelaceAdaExchange(globalFloor, 'floor')}</p>
                <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">floor price</p>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

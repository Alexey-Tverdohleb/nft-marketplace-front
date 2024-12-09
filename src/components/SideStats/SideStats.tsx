import React from 'react';
import { Artist } from 'pages/Artists/fakeArtists';
import lovelaceAdaExchange from 'helpers/lovelaceAdaExchange';

type Props = {
  type?: string;
  className?: string;
  items: Artist['items'];
  volume: number;
  floorPrice: Artist['floor_price'];
};

function SideStats({
  type = '', className, items, volume, floorPrice,
}: Props) {
  const stringVolume = lovelaceAdaExchange(volume, 'volume');
  const stringFloorPrice = lovelaceAdaExchange(floorPrice, 'floor');

  if (type === 'horizontal') {
    return (
      <ul className={`grid grid-cols-3 gap-0 mt-12 ${className}`}>
        <li>
          <p className="text-3xl font-bold">
            { items / 1_000 }
            k
          </p>
          <p className="text-light-gray-400 dark:text-light-gray">items</p>
        </li>
        <li>
          <p className="text-3xl font-bold">{ stringVolume }</p>
          <p className="text-light-gray-400 dark:text-light-gray">volume</p>
        </li>
        <li>
          <p className="text-3xl font-bold">{ stringFloorPrice }</p>
          <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
        </li>
      </ul>
    );
  }
  return (
    <div className={`lg:border-l border-[#D0D5DD] flex lg:ml-10 mt-10 md:mt-0 ${className}`}>
      <ul className="lg:ml-6 mt-4 grid lg:grid-rows-3 lg:grid-flow-row grid-flow-col gap-8 place-content-center">
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">
            { items / 1_000 }
            K
          </p>
          <p className="text-light-gray-400 dark:text-light-gray">items</p>
        </li>
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">{ stringVolume }</p>
          <p className="text-light-gray-400 dark:text-light-gray">volume</p>
        </li>
        <li>
          <p className="text-3xl text-primary dark:text-white font-bold">{ stringFloorPrice }</p>
          <p className="text-light-gray-400 dark:text-light-gray">floor price</p>
        </li>
      </ul>
    </div>
  );
}

export default SideStats;

import React from 'react';
import SideStats from 'components/SideStats/SideStats';
import { Collection } from 'services/collections.types';

interface Props {
  data: Collection
}

function CollectionsBanner({ data }: Props) {
  const collection = data.items;
  return (
    <div className="group bg-transparent card dark:bg-black-900 rounded-3xl overflow-hidden flex flex-col mb-20 mt-4">
      {collection.bg_image ? (
        <img
          draggable="false"
          className="min-h-[245px] object-fill"
          src={collection.bg_image}
          alt=""
        />
      ) : <div className="min-h-[245px] object-fill bg-gray-200 dark:bg-black-800" />}

      <div className="lg:mx-12 mx-auto border-2 border-white dark:border-black rounded-full h-[123px] w-[123px] -mt-20 overflow-hidden">
        <img src={collection.image} alt="" className="h-[123px] w-[123px]" />
      </div>
      <div className="max-w-[846px] mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-col lg:ml-10">
          <p className="text-[48px] font-semibold mt-4">
            { collection.display_name }
          </p>
          <p className="text-black-400 dark:text-light-gray mt-4">
            { collection.description }
          </p>
        </div>
        <SideStats
          items={+collection.supply}
          volume={+collection.global_volume_lovelace_all_time}
          floorPrice={+collection.floor}
        />
      </div>
    </div>
  );
}

export default CollectionsBanner;

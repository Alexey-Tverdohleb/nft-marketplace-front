import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionRank } from 'services/collections.types';
import { ReactComponent as Checkmark } from 'assets/icons/Checkmark.svg';

interface Props {
  nftList: CollectionRank[]
}

function NftCollectionGrid({ nftList }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      { nftList.map((item, idx) => (
        <Link key={item.policy_id} to={`collection/${item.unique_collection_name}`}>
          <div
            className="trend-collection-wrapper flex items-center box-border shadow-card  p-2 rounded-2xl hover:scale-[102%] cursor-pointer duration-300 h-[82px]"
          >
            <p className="mr-[5px]">{ idx + 1 }</p>
            <div className="mr-[5px] relative w-fit">
              <img className="max-h-16 max-w-16 rounded-full" src={`https://image-optimizer.jpgstoreapis.com/${item.source}`} alt="logo" />
              { item.is_verified && <Checkmark className="absolute top-0 right-0 h-4 text-link" />}
            </div>
            <div className="flex w-full items-center justify-between -mx-[10px] h-full">
              <div className="mx-[10px]">
                <p className="font-semibold max-w-[140px] whitespace-nowrap text-ellipsis overflow-hidden">{ item.display_name }</p>
                <p className="text-[12px] text-red-400 dark:text-red-800">
                  { item.floor_price.toLocaleString() }
                  &nbsp;
                  ADA
                </p>
              </div>
              <p className="mx-[10px] text-[14px] text-red-400 dark:text-red-800 min-w-[97px] text-right font-medium">
                { `${(item.volume / 1000).toFixed(2).toLocaleString()}k` }
                &nbsp;
                ADA
              </p>
            </div>
          </div>
        </Link>
      )) }
    </div>
  );
}

export default NftCollectionGrid;

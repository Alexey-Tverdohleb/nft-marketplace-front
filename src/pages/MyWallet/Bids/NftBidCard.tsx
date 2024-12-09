import React from 'react';
import BidModal from 'components/Bid/BidModal';
import Button from 'components/Button';
import { BidItem } from './types';

export default function NftBidCard({
  display_name: name,
  image,
  collection_name: collectionName,
  last_activity: lastActivity,
  proposed_price: price,
}: BidItem) {
  return (
    <div
      className="py-[34px] px-[32px] my-[24px] rounded-[32px] w-fit dark:bg-black-800 bg-light-gray-50 flex flex-col md:flex-row justify-between"
    >
      <div className="flex md:pr-8 pb-8 md:pb-0 w-fit  border-b border-light-gray-1 md:border-0">
        <div className="mr-4">
          <img
            src={image}
            alt="nft"
            className="md:h-[115px] mf:w-[115px] md:max-w-[115px] rounded-3xl"
          />
        </div>
        <div className="flex w-fit flex-col justify-between">
          <h2 className="font-semibold text-xl ">{name}</h2>
          <p className="text-light-gray-400 dark:text-light-gray">
            {collectionName}
          </p>
          <p className="text-light-gray-400 dark:text-light-gray">
            last:
            <span className="text-black-400  dark:text-white">
              {` ${lastActivity} min ago`}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-fit pl-0 pt-8 md:pt-0 md:pl-8 md:border-l md:border-light-gray-1">
        <div className="mb-4">
          <p className="text-light-gray-400">You Proposed</p>
          <p className="text-light-gray-400 flex items-center">
            <span className="font-bold text-2xl mr-1">{price}</span>
            <span className="mr-2 text-2xl">ADA</span>
            <span>{ `($ ${(price * 1.265).toFixed(2)})` }</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          <BidModal />
          <Button
            className="p-0 mt-[15px] md:mt-0 border-none hover:bg-transparent hover:text-primary dark:hover:bg-black-800 dark:hover:text-white p-0"
          >
            <span className="text-center w-full">Decline</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

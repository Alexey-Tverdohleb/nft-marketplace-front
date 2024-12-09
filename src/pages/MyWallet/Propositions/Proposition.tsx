import React from 'react';
import BidModal from 'components/Bid/BidModal';
import Button from 'components/Button';
import { PropositionType } from './types';

type Item = PropositionType['activity_history'][number]

const sortTimeDesc = (itemA: Item, itemB: Item) => (itemA.time > itemB.time ? -1 : 1);

export default function Proposition({
  display_name: name,
  collection_name: collectionName,
  last_activity: lastActivity,
  activity_history: history,
} : PropositionType) {
  return (
    <div className="py-[34px] px-[32px] my-[24px] rounded-[32px] w-fit dark:bg-black-800 bg-light-gray-50 flex flex-col md:flex-row justify-between">
      <div className="flex w-fit md:pr-8 pb-8 md:pb-0 border-b border-light-gray-1 md:border-0">
        <div className="mr-4">
          <img
            src="/images/nft/1.png"
            alt="nft"
            className="md:h-[115px] mf:w-[115px] md:max-w-[115px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col -my-[10px]">
          <h2 className="font-semibold text-xl my-[10px]">{name}</h2>
          <p className="text-light-gray-400 dark:text-light-gray my-[10px]">
            {collectionName}
          </p>
          <p className="text-light-gray-400 dark:text-light-gray my-[10px]">
            last:
            {' '}
            <span className="text-black-400  dark:text-white">{ `${lastActivity} min ago` }</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-fit pl-0 pt-8 md:pt-0 md:pl-8 md:border-l md:border-light-gray-1">
        <div className="mb-4">
          { history.sort(sortTimeDesc).map((item) => (
            <div key={`price=${item.price}&time=${item.time}`} className="flex mb-2.5 text-light-gray-400 last-of-type:text-black dark:text-dark-gray-400">
              <p className="grow-[2]">{ `${item.time} days ago` }</p>
              <p className="grow">{ `${item.price} ADA `}</p>
              <p className="text-light-gray-400 dark:text-dark-gray-400">{ `($${(item.price * 1.43).toFixed(2)})` }</p>
            </div>
          )) }
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-between">
          <BidModal />
          <Button
            className="p-0 mt-[15px] md:mt-0 border-none hover:bg-transparent hover:text-primary dark:hover:bg-black-800 dark:hover:text-white"
          >
            <span className="text-center w-full">Decline</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

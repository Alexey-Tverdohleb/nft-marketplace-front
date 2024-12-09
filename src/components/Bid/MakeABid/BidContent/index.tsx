import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import Icon from 'components/Icon/Icon';
import BidContentBody from './BidContentBody';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}

const notForSaleLabel = 'This item in not On Sale now, but you can make a bid and probobly owner will sell it to you if you propose a good price';

export default function BidContent({ setIsOpen, setIsSuccess }: Props) {
  const { id } = useParams();
  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);
  const currentFakeNft = useMemo(() => fakeNftList.find((item) => item.id === id), [id]);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-6 items-center">
        <p className="text-2xl font-bold ">Make a bid</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <p className="mb-8 dark:text-light-gray">
        {notForSaleLabel}
      </p>

      <p className="mb-2 text-light-gray-400 dark:text-light-gray">Highest price </p>
      <div className="flex items-center mb-12 dark:text-light-gray">
        <span className="text-primary font-bold text-2xl pr-1 dark:text-light-gray">{currentFakeNft?.currentBid}</span>
        <span className="text-primary text-2xl mr-2 dark:text-light-gray">ADA</span>
        <span className="text-light-gray-400 text-base dark:text-light-gray">
          ($
          { Math.floor(((currentFakeNft?.currentBid ?? 0) * 0.53)) }
          )
        </span>
      </div>

      <BidContentBody setIsSuccess={setIsSuccess} />
    </div>
  );
}

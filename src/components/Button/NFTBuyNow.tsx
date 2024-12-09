/* eslint-disable max-len */
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import BuyNow from 'components/BuyNow';
import MakeABidModal from 'components/Bid/MakeABid/MakeABidModal';
import Dots from 'components/Loader/Dots';
import { useFetchSingleNftQuery } from 'services/NftService';
import lovelaceAdaExchange from 'helpers/lovelaceAdaExchange';
// import Button from './Button';

export default function NFTBuyNow() {
  const { id } = useParams();
  const { data, isLoading } = useFetchSingleNftQuery(id ?? '');

  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);
  const currentFakeNft = useMemo(() => {
    const current = fakeNftList.find((item) => item.id === id);
    if (!current) return null;
    return current;
  }, [id, fakeNftList]);

  if (isLoading) {
    return <Dots />;
  }

  if (!data) {
    return <div>Sth is wrong..</div>;
  }

  // TODO: it`s only a mock-up
  const state = useMemo(() => {
    if (!currentFakeNft) {
      return {
        isForSale: false,
        label: 'Price',
        priceAda: 0,
        priceUsd: 0,
      };
    }
    const isForSale = !!currentFakeNft.status;
    if (isForSale) {
      return {
        isForSale,
        label: 'Price',
        priceAda: lovelaceAdaExchange(+data.collections.jpg_floor_lovelace, 'floor'),
        priceUsd: (+data.collections.jpg_floor_lovelace / 1_000_000) * 0.53,
      };
    }
    return {
      isForSale,
      label: 'Last Bid',
      priceAda: currentFakeNft.currentBid,
      priceUsd: (currentFakeNft.currentBid ?? 0) * 0.53,
    };
  }, [currentFakeNft]);

  const {
    isForSale, label, priceUsd, priceAda,
  } = state;

  return (
    <div className="refresh flex flex-col md:flex-row md:items-center justify-between w-full rounded-[40px] py-2 md:pl-[40px] px-2 bg-[#f0f0f0] dark:bg-black">
      <div className="px-10 mb-3 md:mb-0 md:px-0">
        <p className="text-[16px] text-gray-400 dark:text-light-gray">{label}</p>
        <p className="text-[24px] text-red-400 dark:text-red-800">
          <b>{ priceAda?.toLocaleString() }</b>
          ADA
          <span className="ml-3 text-[16px] text-gray-400 dark:text-light-gray">
            ($
            {Math.floor(priceUsd).toLocaleString()}
            )
          </span>
        </p>
      </div>
      <div className="h-full flex gap-1">
        { isForSale && <BuyNow /> }
        <MakeABidModal />
      </div>
      {/* <Button
        className="py-2 px-12 text-[16px] h-[64px] md:h-full"
        color="primary"
      >
        Buy Now
      </Button> */}
    </div>
  );
}

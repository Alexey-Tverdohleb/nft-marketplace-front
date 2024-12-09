import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useParams } from 'react-router-dom';
import { useFetchSingleNftQuery } from 'services/NftService';
import Dots from 'components/Loader/Dots';
import lovelaceAdaExchange from 'helpers/lovelaceAdaExchange';
import cx from 'classnames';
import Button from './index';

export default function NFTSellNow() {
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

  // TODO: should be only data from response;
  if (!data || !currentFakeNft) {
    return <div>Sth is wrong..</div>;
  }

  const isForSale = useMemo(() => !!currentFakeNft.status, [currentFakeNft]);

  return (
    <div className={
      cx(
        'refresh flex flex-col md:flex-row md:items-center justify-between w-full rounded-[40px] py-2 md:pl-[40px] px-2 bg-[#f0f0f0] dark:bg-black',
        { 'hidden h-0 w-0': !isForSale },
      )
    }
    >
      <div className="px-10 mb-3 md:mb-0 md:px-0">
        <p className="text-[16px] text-gray-400 dark:text-light-gray">Price</p>
        <p className="text-[24px] text-red-400 dark:text-red-800">
          <b>{ lovelaceAdaExchange(+data.collections.jpg_floor_lovelace, 'floor') }</b>
          ADA
          <span className="ml-3 text-[16px] text-gray-400 dark:text-light-gray">
            ($
            {(+data.collections.jpg_floor_lovelace / 1_000_000) * 0.53}
            )
          </span>
        </p>
      </div>
      <div className="h-full">
        <Button color="primary" className="py-2 px-12 text-[16px] h-full">Change price</Button>
      </div>
    </div>
  );
}

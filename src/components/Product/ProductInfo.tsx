import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import cx from 'classnames';
import NFTBuyNow from 'components/Button/NFTBuyNow';
import NFTSellNow from 'components/Button/NFTSellNow';
import Dots from 'components/Loader/Dots';
import DefaultCard from 'components/Card/DefaultCard';
import { useFetchSingleNftQuery } from 'services/NftService';

export default function ProductInfo() {
  const { id } = useParams();
  const { data, isLoading } = useFetchSingleNftQuery(id ?? '');

  // TODO: for now is wallet connected => user owns nft
  const { walletConnected: isNftOwner } = useSelector((state: RootState) => state.wallet);
  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);
  const currentFakeNft = useMemo(() => {
    const current = fakeNftList.find((item) => item.id === id);
    if (!current) return null;
    return current;
  }, [id, fakeNftList]);

  if (isLoading) {
    return <Dots />;
  }

  if (!data || !currentFakeNft) {
    return <div>Sth is wrong..</div>;
  }

  // TODO: it`s only a mock-up
  const isForSale = !!currentFakeNft.status;
  const date = new Date(data.created_at);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-[16px] md:p-0">
      <div className="w-full max-h-[594px] max-w-[594px]">
        <img src={data.optimized_source} alt="cover" className="w-full bg-cover rounded-2xl" />
      </div>
      <div className="w-full flex flex-col">
        <p className="text-[32px] order-1 font-semibold text-black-400 dark:text-light-gray mb-4 md:mb-10">
          { data.display_name }
        </p>
        <div className="order-3 md:order-2 flex flex-col w-full">
          {/* <div className="flex justify-between mb-4"> */}
          {/*  <p className="text-gray-400 dark:text-light-gray">Created By:</p> */}
          {/*  { ' ' } */}
          {/*  <Link to={`/artist-profile/${author.toLowerCase().split(' ').join('_')}`}> */}
          {/*    <p className="text-link">{ author }</p> */}
          {/*  </Link> */}
          {/* </div> */}
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Collection:</p>
            { ' ' }
            <p className="max-w-[290px] text-right">
              { data.collections.display_name }
            </p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Released:</p>
            <p>{ date.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric' }) }</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">№ of copies:</p>
            <p>{ data.quantity }</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-400 dark:text-light-gray">Status:</p>
            { ' ' }
            <p
              className={cx('text-[#00AA0D] capitalize', { 'text-[#D00000]': !isForSale })}
            >
              { isForSale ? 'For Sale' : 'Not for Sale' }
            </p>
          </div>
        </div>
        <div className={cx('w-full order-2 md:w-[594px] mt-auto mb-[20px]', { 'mb-[0px]': !isForSale && isNftOwner })}>
          <DefaultCard className="w-full bg-light-gray-50 rounded-2xl">
            <div className="w-full p-[24px] flex flex-col">
              <p className="text-[24px] font-semibold">Details</p>
              <p className="text-black-400 dark:text-light-gray  mt-4">
                {data.onchain_metadata.description}
              </p>
            </div>
          </DefaultCard>
        </div>
        <div className="order-3 md:order-3 mb-8 md:mb-0 flex">
          { isNftOwner ? <NFTSellNow /> : <NFTBuyNow /> }
        </div>
      </div>
    </div>
  );
}

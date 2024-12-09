/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import NftAvailability from 'components/NftAvailability/NftAvailability';
import ProductInfo from 'components/Product/ProductInfo';
import useScrollToTop from 'hooks/useScrollToTop';
import SectionTitle from 'components/Section/Title';
import { useFetchSingleNftQuery } from 'services/NftService';
import Dots from 'components/Loader/Dots';
import NftCard from 'components/NftCard';
import FAKE_NFTS from './fakeNFTs';
import PropertiesTable from './PropertiesTable';
import Switcher from './Switcher';

function NFT() {
  useScrollToTop();
  const { id } = useParams();
  const { data, isLoading } = useFetchSingleNftQuery(id ?? '');

  const { walletConnected: isNftOwner } = useSelector((state: RootState) => state.wallet);

  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);
  const currentFakeNft = useMemo(() => {
    const current = fakeNftList.find((item) => item.id === id);
    if (!current) return undefined;
    return current;
  }, [id, fakeNftList]);

  if (isLoading) {
    return <Dots />;
  }

  if (!data || !currentFakeNft) {
    return <div>Loading..</div>;
  }
  return (
    <div className="nft-page mb-10">
      <div className="container">
        { isNftOwner && (
          <NftAvailability
            error={currentFakeNft.status === 0}
            success={currentFakeNft.status !== 0}
          />
        ) }
        <div className="px-4 xl:px-0 mb-40">
          <ProductInfo />
          <Switcher />
          <PropertiesTable />
          {/* <div className="w-full md:w-[594px] flex flex-col"> */}
          {/* <DefaultCard className="w-full bg-light-gray-50 rounded-2xl"> */}
          {/*   <div className="w-full p-[24px] flex flex-col"> */}
          {/*     <p className="text-[24px] font-semibold">Latest Activity</p> */}
          {/*     <Table */}
          {/*       headers={{ */}
          {/*         event: 'Event', */}
          {/*         date_time: 'Date', */}
          {/*         price: 'Price', */}
          {/*       }} */}
          {/*       items={nftItem.activity} */}
          {/*       customRenderers={{ */}
          {/*         event: (it) => ( */}
          {/*           <div className="flex"> */}
          {/*             <Icon color="#667085" name={it.event.icon} className="mr-3" /> */}
          {/*             <p>{it.event.name}</p> */}
          {/*           </div> */}
          {/*         ), */}
          {/*         price: (it) => ( */}
          {/*           <div> */}
          {/*             <p>{it.price.token}</p> */}
          {/*             <p className="text-light-gray-400 dark:text-light-gray text-[14px]"> */}
          {/*               {it.price.usd} */}
          {/*             </p> */}
          {/*           </div> */}
          {/*         ), */}
          {/*         date_time: (it) => ( */}
          {/*           <div> */}
          {/*             <p>{it.date_time.date}</p> */}
          {/*             <p className="text-light-gray-400 dark:text-light-gray text-[14px]"> */}
          {/*               {it.date_time.timestamp} */}
          {/*             </p> */}
          {/*           </div> */}
          {/*         ), */}
          {/*       }} */}
          {/*     /> */}
          {/*   </div> */}
          {/* </DefaultCard> */}
          {/* </div> */}
        </div>

        <div>
          <div className="flex justify-between mb-8">
            <SectionTitle>More from this collection</SectionTitle>
            <Link className="text-link" to="/collections">
              View Collection
              &#x2192;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 gap-6">
            {FAKE_NFTS.slice(0, 4).map((item) => (
              <NftCard key={item.id} card={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;

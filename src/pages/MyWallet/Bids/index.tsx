import React from 'react';
import NoDataFound from 'components/NoDataFound/NoDataFound';
import PageTitle from 'components/PageTitle';
import NftBidCard from './NftBidCard';
import DUMMY_BIDS from './dummyData';

export default function Bids() {
  return (
    <div className="preposition mt-12 mb-20">
      <div className="container">
        <PageTitle className="my-[24px]">
          Pending Bids
          <span className="ml-4 text-red-400 text-5xl font-semibold">
            {DUMMY_BIDS.length}
          </span>
        </PageTitle>
        {DUMMY_BIDS.length === 0 && <NoDataFound />}
        {DUMMY_BIDS.map((item) => (
          <NftBidCard
            key={item.display_name}
            display_name={item.display_name}
            collection_name={item.collection_name}
            image={item.image}
            last_activity={item.last_activity}
            proposed_price={item.proposed_price}
          />
        ))}
      </div>
    </div>
  );
}

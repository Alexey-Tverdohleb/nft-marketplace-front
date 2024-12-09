import React, { useState } from 'react';
import SectionTitle from 'components/Section/Title';
import { useFetchCollectionsQuery } from 'services/CollectionService';
import VolumeFilter from './VolumeFilter';
import NftCollectionGrid from './NFTCollectionGrid';

export const filterOptions = ['all', 'day', 'week', 'month'] as const;

function CollectionVolume() {
  const [filter, setFilter] = useState<'all' | 'day' | 'week' | 'month'>(() => filterOptions[0]);

  const { data, isLoading } = useFetchCollectionsQuery();

  if (isLoading) {
    return <div>Just wait a little</div>;
  }

  if (!data) {
    return <div>Cannot find any collections volume :(</div>;
  }

  return (
    <section className="explore-categories mb-36 md:p-0">
      <div className="flex items-center -mx-8">
        <SectionTitle className="mx-8">NFT Collection Volume</SectionTitle>
        <VolumeFilter filter={filter} handleFilter={setFilter} />
      </div>
      <NftCollectionGrid nftList={data.items.collectionRanks[filter]} />
    </section>
  );
}

export default CollectionVolume;

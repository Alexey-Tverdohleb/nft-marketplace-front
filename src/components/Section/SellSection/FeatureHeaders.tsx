import React from 'react';
import Dots from 'components/Loader/Dots';
import { useFetchCollectionsQuery } from 'services/CollectionService';
import FeatureHeaderCard from './FeatureHeaderCard';

export default function FeatureHeaders() {
  const { data, isLoading } = useFetchCollectionsQuery();

  if (isLoading) {
    return <div className="flex grow h-full w-full justify-center items-center"><Dots /></div>;
  }

  if (!data) {
    return <div className="flex grow h-full w-full justify-center items-center">Sth got wrong :(</div>;
  }

  return (
    <div className="cards mt-12 md:mt-0 relative h-full w-full items-center flex grow">
      {data.items.featuredHeader.map((header) => (
        <FeatureHeaderCard
          link={header.unique_collection_name}
          key={header.source}
          source={header.source}
          displayName={header.display_name}
          supply={+header.supply}
          globalVolume={+header.global_volume_lovelace_all_time}
          globalFloor={+header.global_floor_lovelace}
        />
      ))}
    </div>
  );
}

import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchCollectionsQuery } from 'services/CollectionService';
import Dots from 'components/Loader/Dots';
import CollectionCard from './CollectionCard';

function CollectionsList() {
  const { data, isLoading } = useFetchCollectionsQuery();
  const [params] = useSearchParams();
  const activeCategory = params.get('category') ?? 'all';
  const collectionsTrending = data?.items.collectionsTrending;

  const filteredData = useMemo(() => {
    if (activeCategory === 'all') return collectionsTrending;

    return collectionsTrending?.filter((item) => item.category.toLowerCase() === activeCategory);
  }, [collectionsTrending, activeCategory]);

  if (isLoading) {
    return <Dots />;
  }

  if (!filteredData) {
    return <div>Sth goes wrong.. :(</div>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 pb-9 w-full xl:grid-cols-4 gap-6">
      {filteredData.map((item) => (
        <li key={item.policy_id}>
          <CollectionCard
            link={item.unique_collection_name}
            supply={+item.supply}
            name={item.display_name}
            src={item.source}
            globalFloor={+item.global_floor_lovelace}
            globalVolume={+item.global_volume_lovelace_all_time}
          />
        </li>
      ))}
    </ul>
  );
}

export default CollectionsList;

import React, { useCallback, useEffect, useState } from 'react';
import ButtonSort from 'components/Sort/Sort';
import CollectionFilter from 'components/CollectionsFilter';
import FilterTags from 'components/ArtistsFilter/FilterTags';
import Button from 'components/Button';
import useCollectionsFilterFormState from 'hooks/useCollectionsFilterFormState';
import ActivityDetails from 'components/ActivityDetails/ActivityDetails';
import MOCK_DATA from 'components/Collections/mockData';
import Dots from 'components/Loader/Dots';
import PeriodSort from './PeriodSort';

export default function ActivityList() {
  const [activities, setActivities] = useState(MOCK_DATA);
  const [fetching, setFetching] = useState(false);
  const hasMore = activities.length < 15;

  const lastArtistsRef = useCallback((node) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setFetching(true);
      }
    });
    if (node) {
      observer.observe(node);
    }
  }, [fetching, hasMore]);

  useEffect(() => {
    if (fetching && hasMore) {
      setTimeout(() => {
        setActivities((prev) => [...prev, ...MOCK_DATA]);
        setFetching(false);
      }, 500);
    } else if (fetching && !hasMore) {
      setFetching(false);
    }
  }, [fetching, hasMore]);

  const {
    formState, setFormState, resetFields, clearAll,
  } = useCollectionsFilterFormState();
  const { saleType, minPrice, maxPrice } = formState;

  return (
    <div>
      <div className="flex justify-end">
        <PeriodSort />
        <ButtonSort />
        <CollectionFilter initValues={formState} handleSubmit={setFormState} />
      </div>
      {(saleType !== 'all' || minPrice || maxPrice) && (
        <div className="block md:flex items-center mb-8 gap-4">
          <p className="mr-4 font-bold">Filters</p>
          <div className="flex flex-wrap gap-2">
            {saleType !== 'all' && (
              <FilterTags className="capitalize" handleChanged={resetFields(['saleType'])}>{saleType.split('_').join(' ')}</FilterTags>
            )}
            {minPrice && maxPrice && (
              <FilterTags handleChanged={resetFields(['minPrice', 'maxPrice'])}>
                {`ADA: ${minPrice} - ${maxPrice}`}
              </FilterTags>
            )}

            <Button
              color="default"
              onClick={clearAll}
              className="text-link font-bold dark:text-white"
            >
              Clear All
            </Button>
          </div>
        </div>
      )}
      <ActivityDetails data={activities} />
      { fetching && (
        <div className="flex items-center justify-center w-full">
          <Dots />
        </div>
      )}
      <div className="bottom-list mb-[50px]" ref={lastArtistsRef} />
    </div>
  );
}

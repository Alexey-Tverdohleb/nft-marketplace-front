import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dots from 'components/Loader/Dots';
import Button from 'components/Button';
import { useFetchParticularCollectionQuery } from 'services/CollectionService';
import useComponentVisible from 'hooks/useComponentVisible';
import { Trait } from 'services/collections.types';
import TraitItem from './Trait';
import TraitInputRange from './TraitInputRange';
import TraitInputSlider from './TraitInputSlider';

function objectKeys<T extends Record<string, Trait>>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export default function Properties() {
  const [searchVal, setSearchVal] = useState('');
  const { id } = useParams();
  const { data, isLoading } = useFetchParticularCollectionQuery(id ?? '', { skip: !id });
  const traits = data?.items.traits;

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  if (isLoading) {
    return <Dots />;
  }

  if (!traits) {
    return <div>Whoops, sth wrong..</div>;
  }

  return (
    <div className="relative mx-2">
      <Button onClick={() => setIsComponentVisible(true)}>Properties</Button>
      { isComponentVisible && (
        <div ref={ref} className="shadow-card w-fit absolute right-1 bg-white dark:bg-black-800 dark:text-white rounded-3xl py-2 z-50">
          <div className="px-4">
            <input className="w-full px-2 box-border border-2 border-light-gray-2 rounded-lg" placeholder="Search.." value={searchVal} onChange={({ target }) => setSearchVal(target.value)} />
          </div>
          { objectKeys(traits).map((traitName) => (traits[traitName]?.type !== 'range' ? (
            <TraitItem
              search={searchVal}
              key={traitName}
              traitName={traitName}
              traitItems={traits[traitName].items}
            />
          ) : (
            <>
              { traits[traitName]?.min && (
                <TraitInputRange
                  traitName={traitName}
                  step={1}
                  min={+traits[traitName].min}
                  max={+traits[traitName].max}
                />
              ) }
              { !traits[traitName]?.min && (
                <TraitInputSlider
                  max={+traits[traitName].max}
                  traitName={traitName}
                />
              ) }
            </>

          ))) }
        </div>
      ) }
    </div>
  );
}

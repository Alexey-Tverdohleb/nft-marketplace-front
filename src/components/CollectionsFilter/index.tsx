import React from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import useComponentVisible from 'hooks/useComponentVisible';
import { FormState } from 'hooks/useCollectionsFilterFormState';
import CollectionForm from './Form';

interface Props {
  initValues: FormState
  handleSubmit(state: FormState): void
}

function CollectionFilter({ initValues, handleSubmit }: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="filter-btn p-4 md:p-0 ">
      <Button
        className="md:mx-2 w-full md:w-auto justify-center"
        onClick={() => {
          setIsComponentVisible(true);
        }}
      >
        <img src="/icons/filter.svg" alt="filter" />
        Filters
      </Button>

      {isComponentVisible && (
        <div ref={ref} className="z-[100]">
          <div className="bottom-[65px]  md:bottom-[unset]  w-[95%] right-[8px] border dark:border-0 absolute md:right-1  md:w-[514px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6 z-50">
            <div className="flex items-start justify-between mb-4">
              <p className="text-2xl font-bold">Filters</p>
              <button
                type="button"
                className="h-auto"
                onClick={() => {
                  setIsComponentVisible(false);
                }}
              >
                <Icon name="x" className="stroke-current" />
              </button>
            </div>
            <CollectionForm initValues={initValues} handleSubmit={handleSubmit} />
          </div>
        </div>
      )}

    </div>
  );
}

export default CollectionFilter;

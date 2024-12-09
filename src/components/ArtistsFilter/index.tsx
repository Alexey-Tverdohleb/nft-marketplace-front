import React from 'react';
import { State } from 'hooks/useArtistsFilterFormState';
import useComponentVisible from 'hooks/useComponentVisible';
import Button from '../Button';
import Icon from '../Icon/Icon';
import './Filter.sass';
import FilterForm from './FilterForm';

type Props = {
  initialValues?: State;
  onSubmit?(formState: State): void;
};

function Filter({ initialValues, onSubmit }: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const handleSubmit = (state: State) => {
    setIsComponentVisible(false);
    onSubmit?.(state);
  };

  return (
    <div className="filter-btn p-4 md:p-0 dark:bg-black-800">
      <Button
        className="md:mx-2 w-full md:w-auto justify-center"
        onClick={() => {
          setIsComponentVisible(true);
        }}
      >
        <img src="/icons/filter.svg" alt="filter" />
        Filters
      </Button>

      <div ref={ref}>
        {isComponentVisible && (
          <div className="bottom-[65px] z-10  md:bottom-[unset]  w-[95%] right-[8px] border dark:border-0 absolute md:right-1  md:w-[514px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6 ">
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

            <FilterForm initialValues={initialValues} onSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;

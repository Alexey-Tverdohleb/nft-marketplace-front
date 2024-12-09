import React, { Dispatch, SetStateAction } from 'react';
import useComponentVisible from 'hooks/useComponentVisible';
import { filterOptions } from './index';

interface Props {
  filter: string;
  handleFilter: Dispatch<SetStateAction<'all' | 'day' | 'week' | 'month'>>
}

function VolumeFilter({
  filter, handleFilter,
}: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div className="relative">
      <button className="capitalize mx-8 text-link font-semibold" type="submit" onClick={() => setIsComponentVisible(true)}>
        { filter }
      </button>

      { isComponentVisible && (
        <div
          ref={ref}
          className="absolute shadow-card bg-white dark:bg-black-800 dark:text-white rounded-2xl py-4 w-fit -left-[15px]"
        >
          { filterOptions.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                handleFilter(item);
                setIsComponentVisible(false);
              }}
              className="w-full px-8 py-2 hover:bg-[#fafafa] cursor-pointer capitalize"
            >
              { item }
            </button>
          )) }
        </div>
      ) }
    </div>
  );
}

export default VolumeFilter;

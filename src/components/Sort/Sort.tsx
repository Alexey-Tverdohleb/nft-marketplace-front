import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import useComponentVisible from 'hooks/useComponentVisible';
import Button from '../Button';

type Option = {
  label: string,
  sortBy: 'price' | 'date',
  sortDir: 'asc' | 'desc'
}

const OPTIONS: Option[] = [
  {
    label: 'Lowest Price',
    sortBy: 'price',
    sortDir: 'asc',
  },
  {
    label: 'Highest Price',
    sortBy: 'price',
    sortDir: 'desc',
  },
  {
    label: 'Most Recent',
    sortBy: 'date',
    sortDir: 'asc',
  },
  {
    label: 'Oldest',
    sortBy: 'date',
    sortDir: 'desc',
  },
];

function Sort() {
  const [params, setParams] = useSearchParams();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const handleOption = useCallback((sortBy: 'price' | 'date', sortDir: 'asc' | 'desc') => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.set('sortBy', sortBy);
    newSearchParams.set('sortDir', sortDir);

    setParams(newSearchParams);
  }, [params, setParams]);

  return (
    <div className="relative">
      <Button className="mx-2" onClick={() => setIsComponentVisible(true)}>
        <img src="/icons/sort.svg" alt="sort" />
        Sort By
      </Button>
      {isComponentVisible && (
        <div ref={ref}>
          <div className="shadow-card absolute right-1 top-[50px] w-[142px] bg-white dark:bg-black-800 dark:text-white rounded-3xl py-2 z-50">
            <ul className="grid grid-rows-4 grid-flow-col">
              { OPTIONS.map((item) => (
                <li key={item.label}>
                  <button type="button" className="w-full text-left px-4 py-3" onClick={() => handleOption(item.sortBy, item.sortDir)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sort;

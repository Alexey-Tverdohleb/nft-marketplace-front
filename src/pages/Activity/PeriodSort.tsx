import React, { useCallback } from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import useComponentVisible from 'hooks/useComponentVisible';
import { ReactComponent as Chevron } from 'assets/icons/Chevron.svg';
import { useSearchParams } from 'react-router-dom';

const OPTIONS = [
  {
    label: 'Last 30 days',
    value: 'month',
  },
  {
    label: 'Last 7 days',
    value: 'week',
  },
  {
    label: 'Last 24 hours',
    value: 'day',
  },
];

export default function PeriodSort() {
  const [params, setParams] = useSearchParams();
  const activePeriod = params.get('period') ?? OPTIONS[0].value;
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const handleOption = useCallback((option: string) => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.set('period', option);

    setParams(newSearchParams);
    setIsComponentVisible(false);
  }, [params, setParams]);

  return (
    <div className="relative mx-2">
      <Button onClick={() => setIsComponentVisible(true)}>
        {OPTIONS.find(({ value }) => value === activePeriod)?.label}
        <Chevron className={cx('h-[6px]', { 'rotate-180': isComponentVisible })} />
      </Button>
      { isComponentVisible && (
        <div ref={ref} className="w-full shadow-card absolute bg-white dark:bg-black-800 dark:text-white rounded-3xl z-50">
          <ul className="py-2">
            {OPTIONS.map((item) => (
              <li key={item.value} className="cursor-pointer">
                <button type="button" className="w-full text-left px-4" onClick={() => handleOption(item.value)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </div>
      ) }
    </div>
  );
}

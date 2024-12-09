import React from 'react';
import Icon from 'components/Icon/Icon';
import useComponentVisible from 'hooks/useComponentVisible';
import { useFormikContext } from 'formik';
import { FormState } from './Form';

const TYPES = [
  {
    label: 'All types',
    value: 'all',
  },
  {
    label: 'On sale',
    value: 'on_sale',
  },
  {
    label: 'Not for sale',
    value: 'not_for_sale',
  },
];

function SaleType() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { values, setFieldValue } = useFormikContext<FormState>();

  return (
    <div className="relative w-fit">
      <button
        type="button"
        onClick={() => setIsComponentVisible(true)}
        className="p-4 h-fit w-[221px] border-[1px] rounded-2xl text-black dark:text-white text-[16px] flex items-center justify-between"
      >
        {TYPES.find(({ value }) => value === values.saleType)?.label}
        <Icon name={`chevron-${isComponentVisible ? 'up' : 'down'}`} className="stroke-current dark:text-white ml-2" />
      </button>

      { isComponentVisible && (
        <div className="shadow-card absolute bg-white dark:bg-black-800 dark:text-white rounded-3xl py-6 z-50" ref={ref}>
          <ul>
            { TYPES.map((item) => (
              <li key={item.value}>
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue('saleType', item.value);
                    setIsComponentVisible(false);
                  }}
                  className="hover:bg-[#fafafa] px-8 py-2 dark:hover:bg-black-900 w-full"
                >
                  {item.label}
                </button>
              </li>
            )) }
          </ul>
        </div>
      ) }
    </div>
  );
}

export default SaleType;

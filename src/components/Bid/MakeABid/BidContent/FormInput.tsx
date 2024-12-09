import React from 'react';
import { useFormikContext } from 'formik';
import cx from 'classnames';
import { initValuesType } from './BidContentBody';
import './styles.sass';

const inputStyles = 'dark:text-dark-gray-400 dark:bg-black-800 border border-light-gray-1 focus:ring-indigo-500 focus:border-light-gray-1  placeholder-light-gray-1 block w-full pl-12 pr-12 sm:text-sm  rounded-xl';

export default function FormInput() {
  const {
    values, handleChange, errors, handleBlur,
  } = useFormikContext<initValuesType>();

  return (
    <label htmlFor="bidPrice">
      <div className="flex justify-between">
        <p>
          YOUR BID
          {' '}
          <span className="text-red-100">*</span>
        </p>
        <p>
          YOUR BALANCE:
          {' '}
          <span className="font-bold">2,350.42 ADA</span>
        </p>
      </div>

      <div className="mt-1 relative rounded-full shadow-sm  mb-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className={cx('sm:text-sm text-black-400 dark:text-white', { 'text-red-400': errors.bidPrice })}> ADA: </span>
        </div>
        <input
          type="number"
          name="bidPrice"
          id="bidPrice"
          autoComplete="off"
          value={values.bidPrice ?? ''}
          onChange={handleChange}
          className={cx(inputStyles, { 'border-red-500 text-red-500 focus:outline-red-500 placeholder-red-500': errors.bidPrice })}
          placeholder={`min: ${values.minBidPrice}`}
        />
      </div>
      { errors.bidPrice && <p className="text-red-500 text-[12px] -mt-1.5 mb-1.5">{errors.bidPrice}</p> }
    </label>
  );
}

import React from 'react';
import { useFormikContext } from 'formik';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Icon from 'components/Icon/Icon';
import { initValuesType } from './BidContentBody';

export default function Notices() {
  const { values } = useFormikContext<initValuesType>();
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return (
    <>
      <div className="flex">
        <div className="mr-2">
          <Icon name="info" color={darkMode ? '#ffffff' : '#000000'} />
        </div>
        <p className="text-[12px] text-light-gray-400 mb-3 dark:text-light-gray">
          You must offer at least:
          {' '}
          <span className="text-black-400 dark:text-light-gray">
            {values.minBidPrice}
            {' '}
            ADA
          </span>
        </p>
      </div>
      <div className="flex mb-8">
        <div className="mr-2">
          <Icon name="info" color={darkMode ? '#ffffff' : '#000000'} />
        </div>
        <p className="text-[12px] text-light-gray-400 dark:text-light-gray">
          Total offer amount:
          {' '}
          <span className="text-black-400 dark:text-light-gray">
            { values.bidPrice ?? values.minBidPrice }
            {' '}
            ADA
          </span>
        </p>
      </div>
    </>
  );
}

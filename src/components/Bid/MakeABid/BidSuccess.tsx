import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Icon from 'components/Icon/Icon';
import PageTitle from 'components/PageTitle';

interface SuccessBidProps {
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BidSuccess({ setIsSuccess, setIsOpen }: SuccessBidProps) {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 md:px-20 py-6">
      <div className="flex items-end justify-end mb-10 items-center">
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
            setIsSuccess(false);
          }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <div className="flex flex-col items-center mb-20 text-center">
        <PageTitle>Your bid has been accepted</PageTitle>
        {darkMode && <img src="/images/dark-check-white.svg" alt="success" />}
        {!darkMode && <img src="/images/check-white-1.png" alt="success" />}

        <p className="text-light-gray-400 dark:text-light-gray">
          If owner accept your bid you will get a notification, if he didn’t accept it in 3 days,
          you will get your money back.
        </p>
      </div>
    </div>
  );
}

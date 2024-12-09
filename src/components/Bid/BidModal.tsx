/* eslint-disable react/jsx-one-expression-per-line */
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import { RootState } from '../../store';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};

function BidContent({ setIsOpen, setIsSuccess }: Props) {
  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-10 items-center">
        <p className="text-2xl font-bold ">Are you sure that you want to sell this NFT?</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>

      <p className="mb-2 text-light-gray-400">Highest price </p>
      <div className="flex items-center mb-12">
        <span className="text-primary font-bold text-2xl pr-1">245</span>
        <span className="text-primary text-2xl mr-2">ADA</span>
        <span className="text-light-gray-400 text-base">($ 287.12)</span>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <Button
          color="primary"
          className="px-8 md:mr-10 w-full md:w-auto"
          onClick={() => {
            setIsSuccess(true);
          }}
        >
          Sell for 245 ADA
        </Button>
        <Button
          className="border-none px-0 hover:bg-transparent hover:text-primary dark:hover:bg-black-800  dark:hover:text-white"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

type SuccessBidProps = {
  setIsSuccess: any;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function SuccessBidContent({ setIsSuccess, setIsOpen }: SuccessBidProps) {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
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
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold">Congratulations!</h1>
        {darkMode && <img src="/images/dark-check-white.svg" alt="success" />}
        {!darkMode && <img src="/images/check-white-1.png" alt="success" />}

        <p className="text-light-gray-400">Your NFT has been sold!</p>
      </div>
    </div>
  );
}

function BidModal() {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Modal>
      {(setIsOpen) => ({
        content: isSuccess ? (
          <SuccessBidContent setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ) : (
          <BidContent setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ),
        button: (
          <Button
            color="primary"
            className="py-3 px-7 md:w-full text-white h-[48px]"
            onClick={() => setIsOpen(true)}
          >
            Sell for 245 ADA
          </Button>
        ),
      })}
    </Modal>
  );
}

export default BidModal;

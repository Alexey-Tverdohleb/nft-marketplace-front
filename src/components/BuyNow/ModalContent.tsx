import React, { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchSingleNftQuery } from 'services/NftService';
import Icon from 'components/Icon/Icon';
import Checkbox from 'components/Checkbox/Checkbox';
import Button from 'components/Button';
import Dots from 'components/Loader/Dots';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ModalContent({ setIsOpen }: Props) {
  const [isTermsAgreed, setTermsAgreed] = useState(false);

  const { id } = useParams();
  const { data, isLoading } = useFetchSingleNftQuery(id ?? '');

  if (isLoading) return <Dots />;
  if (!data) return <div>Unexpected thing...</div>;

  const priceAda = (+data.collections.jpg_floor_lovelace / 1_000_000);
  const priceUsd = priceAda * 0.53;
  const fee = (priceAda * 0.01).toPrecision(2);
  const total = priceAda + Number(fee);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-2xl font-bold">Complete checkout</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => { setIsOpen(false); }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col max-w-[390px]">
          <p className="text-light-gray-400 dark:text-light-gray">Items</p>
          <div className="mt-4 flex">
            <img src={data.optimized_source} className="h-[92px] w-[92px] rounded-3xl" alt="thumbnail" />
            <div className="ml-4 flex flex-col justify-center">
              <p className="text-2xl mb-1 font-bold">{ data.display_name }</p>
              <p className="text-light-gray-400 dark:text-light-gray mb-2">
                {data.onchain_metadata.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-light-gray-400 dark:text-light-gray">Subtotal</p>
          <div className="mt-4 text-right">
            <p>
              {priceAda.toLocaleString()}
              {' '}
              ADA
            </p>
            <p className="text-[14px] text-light-gray-400 dark:text-light-gray">
              $
              { priceUsd.toLocaleString() }
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 py-3 border-t flex justify-between">
        <div className="flex flex-col">
          <p className="text-light-gray-400 dark:text-light-gray">Service fee 0.1%</p>
          <p className="text-light-gray-400 dark:text-light-gray">Total:</p>
        </div>
        <div className="flex flex-col text-right">
          <p>
            {fee}
            {' '}
            ADA
          </p>
          <p>
            {total.toLocaleString()}
            {' '}
            ADA
          </p>
          <p className="text-[14px] text-light-gray-400 dark:text-light-gray">
            $
            { total * 0.53 }
          </p>
        </div>
      </div>
      <Checkbox isChecked={isTermsAgreed} handleChecked={setTermsAgreed} />
      <div className="flex mt-4">
        <Button disabled={!isTermsAgreed}>Confirm Checkout</Button>
      </div>
    </div>
  );
}

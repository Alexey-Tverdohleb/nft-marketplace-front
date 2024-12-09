import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleWallet } from 'store/slices/wallet.slice';
import Icon from 'components/Icon/Icon';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const WALLETS = ['Nami Wallet', 'CCVault', 'Gero Wallet'];

export default function WalletContent({ setIsOpen }: Props) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => {
    dispatch(toggleWallet());
    setIsOpen(false);
  }, []);

  return (
    <div className="max-w-[600px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-2xl font-bold">Connect your wallet</p>
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
      <p>Connect with one of available wallet providers or create a new wallet.</p>
      <a href="/" className="text-link">
        What is wallet?
      </a>

      <div className="flex flex-col gap-y-4 mt-8 mb-4">
        {WALLETS.map((item, index) => (
          <button
            type="button"
            key={item}
            className="w-full flex items-center p-3 px-4 border rounded-xl h-auto hover:bg-gray-100"
            onClick={onToggle}
          >
            <img src={`/icons/wallet/${index + 1}.png`} alt={`${item} logo`} className="mr-4" />
            Connect with
            {' '}
            {item}
          </button>
        ))}
      </div>
      <p className="mb-6">
        We do not own your private keys and cannot access your funds without your confirmation.
      </p>
      <div className="flex justify-center">
        <a href="/" className="text-primary dark:text-link text-lg">
          Show all wallets
        </a>
      </div>
    </div>
  );
}

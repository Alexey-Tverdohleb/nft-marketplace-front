import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWallet } from 'store/slices/wallet.slice';
import { RootState } from 'store';
import useComponentVisible from 'hooks/useComponentVisible';
import Button from 'components/Button';
import DropdownLink from 'components/Dropdown/DropdownLink';
import { ReactComponent as WalletIcon } from 'assets/icons/Wallet.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/Logout.svg';

import LINKS from './links';

export default function WalletDropdown() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state: RootState) => state.settings);

  const onToggle = useCallback(() => {
    dispatch(toggleWallet());
  }, []);

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  return (
    <div className="relative">
      <Button
        className="rounded-md px-8 py-2.5 text-base whitespace-nowrap"
        color="secondary"
        onClick={() => setIsComponentVisible(true)}
      >
        <WalletIcon />
        My Wallet
      </Button>

      {isComponentVisible && (
        <div ref={ref}>
          <div className="z-[99] shadow-card absolute right-0 top-[50px]  w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-lg py-4 z-50">
            <ul className="grid grid-rows-4 grid-flow-col gap-y-4">
              {LINKS.map(({
                name, link, totalPrepositions, icon,
              }) => {
                const Icon = icon;
                return (
                  <DropdownLink key={name} link={link} className="py-2">
                    <Icon className="mr-4" color={darkMode ? '#fff' : '#000'} />
                    {name}
                    {totalPrepositions && (
                    <span className="ml-4 font-semibold text-red-400">{totalPrepositions}</span>
                    )}
                  </DropdownLink>
                );
              })}
            </ul>
            <hr className="dark:border-dark-gray-400 my-4" />
            <button type="button" onClick={onToggle} className="flex px-8 h-auto py-2 w-full items-center hover:bg-[#fafafa] dark:hover:bg-black-900">
              <LogoutIcon className="mr-4" color={darkMode ? '#fff' : '#000'} />
              Disconnect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

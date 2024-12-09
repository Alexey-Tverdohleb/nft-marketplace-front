import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import NotificationButton from 'components/Button/NotificationButton';
import DarkModeSwitch from 'components/DarkModeSwitch/DarkModeSwitch';
import Explore from 'components/Dropdown/Explore';
import Resources from 'components/Dropdown/Resources';
import Logo from 'components/Logo/Logo';
import SearchInput from 'components/SearchInput/SearchInput';
import Wallet from 'components/Wallet/Wallet';
import { RootState } from 'store';
import StatsBar from './StatsBar';

function Topbar() {
  const { walletConnected } = useSelector((state: RootState) => state.wallet);

  return (
    <header className="flex justify-between w-full flex-col container relative z-50 p-[16px] xl:p-0 mb-3">
      <StatsBar />

      <div className="flex relative">
        <div className="lg:hidden flex justify-center">
          <BurgerMenu />
        </div>
        <div className="flex items-center justify-center lg:justify-start w-1/2">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <SearchInput className="hidden lg:block" />
        </div>
        { walletConnected && (
          <div className="lg:hidden flex justify-center">
            <NotificationButton />
          </div>
        )}
        <div className="hidden lg:flex lg:gap-x-6 flex-grow justify-end items-center">
          <ul className="flex gap-x-6">
            <li>
              <Explore />
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/activity">Activity</Link>
            </li>
            <li>
              <Resources />
            </li>
          </ul>
          { walletConnected && <NotificationButton /> }
          <DarkModeSwitch />
          <Wallet />
        </div>
      </div>
    </header>
  );
}

export default Topbar;

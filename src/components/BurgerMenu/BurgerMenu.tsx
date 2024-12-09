import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import SearchInput from '../SearchInput/SearchInput';
import Wallet from '../Wallet/Wallet';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function BurgerMenuContent({ setIsOpen }: Props) {
  return (
    <div className="w-full h-screen bg-white dark:bg-black-800 dark:text-white px-4 py-6">
      <div className="flex items-start justify-between mb-4">
        <button
          type="button"
          className="h-auto"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Icon name="x" size={32} className="stroke-current" />
        </button>
        <Wallet />
      </div>
      <SearchInput />
      <div className="mt-8">
        <p className="text-light-gray-400 dark:text-light-gray text-[16px] mb-5">Explore</p>
        <ul className="flex flex-col gap-y-6">
          <li>
            <Link className="text-[20px]" to="/explore">
              NFTs
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/explore">
              Collections
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/artists">
              Artists
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/activity">
              Activity
            </Link>
          </li>
        </ul>
        <p className="text-light-gray-400 dark:text-light-gray text-[16px] my-5">Resources</p>
        <ul className="flex flex-col gap-y-6">
          <li>
            <Link className="text-[20px]" to="/explore">
              Help Center
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/explore">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/artists">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-[20px]" to="/activity">
              Terms of Use
            </Link>
          </li>
          <li className="flex">
            <p className="text-[20px] mr-4">Dark mode</p>
            <DarkModeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}

function BurgerMenu() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <BurgerMenuContent setIsOpen={setIsOpen} />,
        button: (
          <Button color="default" onClick={() => setIsOpen(true)}>
            <Icon size={40} name="menu" className="stroke-current" />
          </Button>
        ),
      })}
    </Modal>
  );
}

export default BurgerMenu;

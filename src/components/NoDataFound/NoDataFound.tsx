import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  isButton?: boolean;
  heading?: string;
  text?: string;
};

export default function NoDataFound({
  isButton,
  heading = 'you did not made any bid',
  text = 'Explore NFTs to buy something awesome',
}: Props) {
  return (
    <div className="flex flex-col items-center mt-30">
      <img src="/images/vector.svg" alt="not found" className="mb-14 " />
      <h2 className="font-bold text-black-400 text-[32px] mb-4 dark:text-light-gray">{heading}</h2>
      <p className="text-black-400 mb-10 dark:text-light-gray">{text}</p>
      {isButton && (
        <Link to="/explore" className="px-10 py-3 bg-primary text-white rounded-full dark:bg-primary-900 dark:text-white dark:hover:bg-primary dark:hover:text-white">
          Explore NFTs
        </Link>
      )}
    </div>
  );
}

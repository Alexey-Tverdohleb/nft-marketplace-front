import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import './SearchInput.sass';
import useComponentVisible from '../../hooks/useComponentVisible';
import DefaultCard from '../Card/DefaultCard';
import Icon from '../Icon/Icon';

type Props = {
  className?: string;
};

const ITEMS = [
  {
    title: 'Meta Cowboy: Prelude',
    name: 'Iva Ryan',
  },
  {
    title: 'Meta Cowboy: Prelude',
    name: 'Iva Ryan',
  },
  {
    title: 'Meta Cowboy: Prelude',
    name: 'Iva Ryan',
  },
].map((item, index) => ({ ...item, id: index }));

const ARTISTS = ['Met Bommer', 'Met Bowwer'];

function SearchInput({ className = '' }: Props) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const { pathname } = useLocation();

  const handleChange = (event: { target: HTMLInputElement }) => {
    if (event.target.value !== '') {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  return (
    <div className={classNames('search relative', className)}>
      <input
        type="text"
        placeholder="Search items, collections and artists"
        className="search-input w-full"
        onChange={handleChange}
      />
      <Icon name="search" className="search-icon" />

      {isComponentVisible && (
        <div ref={ref}>
          <DefaultCard className=" absolute w-full lg:w-[420px]  px-8 py-9 z-10">
            <h5 className="font-bold text-black-400 mb-4 dark:text-white">Items</h5>
            {ITEMS.map((item, index) => (
              <div key={item.id} className="flex mb-6">
                <img
                  src={`/images/nft-cover/collections/${index + 1}.png`}
                  className="rounded-lg mr-4"
                  alt="nft item"
                  height={48}
                  width={48}
                />

                <div>
                  <p className="font-bold text-light-gray-400 dark:text-light-gray">
                    {item.title}
                  </p>
                  <Link
                    to={`/artist-profile?artist=${item.name}`}
                    className="text-link dark:text-link-dark"
                  >
                    {item.name}
                  </Link>
                </div>
              </div>
            ))}
            <hr className="mt-2 mb-8" />

            <h5 className="font-bold text-black-400 mb-4 dark:text-white">Artists</h5>
            {ARTISTS.map((item, index) => (
              <div key={item} className="flex mb-6">
                <img
                  src={`/images/avatar/artists/${index + 1}.png`}
                  height={48}
                  width={48}
                  alt="artist"
                  className="rounded-lg mr-4"
                />
                <p className="font-bold text-light-gray-400 dark:text-light-gray">{item}</p>
              </div>
            ))}
            <Link to="/search" className="text-primary dark:text-white">
              View all results
            </Link>
          </DefaultCard>
        </div>
      )}
    </div>
  );
}

export default SearchInput;

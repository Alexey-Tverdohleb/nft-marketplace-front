import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button';
import Icon from '../Icon/Icon';
import DropdownLink from './DropdownLink';

const LINKS = [
  {
    name: 'NFts',
    link: {
      pathname: '/explore',
      search: 'tab=nft',
    },
  },
  {
    name: 'Collections',
    link: {
      pathname: '/explore',
      search: 'tab=collections',
    },
  },
];

function ExploreDropdown() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  return (
    <div className="relative flex items-center">
      <Button color="default" className="flex" onClick={() => setIsComponentVisible(true)}>
        Explore
        <Icon name="chevron-down" className="stroke-current dark:text-white ml-2" />
      </Button>
      {isComponentVisible && (
        <div ref={ref}>
          <div className="shadow-card absolute right-1 top-10 w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-2xl py-4 z-50">
            <ul className="grid grid-rows-2 grid-flow-col gap-y-4">
              {LINKS.map(({ name, link }) => (
                <DropdownLink key={name} className="py-2" link={link}>{name}</DropdownLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreDropdown;

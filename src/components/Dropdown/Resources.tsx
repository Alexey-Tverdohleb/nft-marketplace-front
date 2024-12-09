import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button';
import Icon from '../Icon/Icon';
import DropdownLink from './DropdownLink';

const LINKS = [
  {
    name: 'Help Center',
    link: '/help-center',
  },
  {
    name: 'About Us',
    link: '/about-us',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Terms of Use',
    link: '/terms-of-use',
  },
];

function ResourcesDropdown() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  return (
    <div className="relative">
      <Button color="default" className="flex" onClick={() => setIsComponentVisible(true)}>
        Resources
        <Icon name="chevron-down" className="stroke-current dark:text-white ml-2" />
      </Button>
      {isComponentVisible && (
        <div ref={ref}>
          <div className="shadow-card absolute right-1 top-10 w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-md py-6 z-50">
            <ul className="grid grid-rows-4 grid-flow-col gap-6">
              {LINKS.map(({ name, link }) => (
                <DropdownLink key={name} link={link}>{name}</DropdownLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResourcesDropdown;

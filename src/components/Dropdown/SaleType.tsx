import React from 'react';
import { Link } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button';
import Icon from '../Icon/Icon';

function SaleType() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className="relative">
      <Button color="default" className="flex" onClick={() => setIsComponentVisible(true)}>
        Explore
        <Icon name="chevron-down" className="stroke-current dark:text-white ml-2" />
      </Button>
      {isComponentVisible && (
        <div ref={ref}>
          <div className="shadow-card absolute right-1 top-10 w-[249px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6 z-50">
            <ul className="grid grid-rows-2 grid-flow-col gap-6">
              <li>
                <Link to="/explore">NFTs</Link>
              </li>
              <li>
                <Link to="/explore">Collections</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SaleType;

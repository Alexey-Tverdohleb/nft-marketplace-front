/* eslint-disable max-len */
import React, { useState } from 'react';
import classNames from 'classnames';
import './HideScrollbars.sass';

function HelpCategories() {
  const [active, setActive] = useState('General');
  return (
    <div className="help-categories flex items-center gap-2 md:gap-x-4 lg:gap-x-10 mb-10 overflow-x-auto overflow-y-hidden">
      {['General', 'Wallets', 'Getting started', 'Popular questions'].map((item) => (
        <button
          key={item}
          type="button"
          className={classNames(
            'px-6 rounded-2xl h-[45px]',
            active === item
              ? 'border border-primary btn-gradient text-white'
              : 'border border-primary text-primary dark:text-white dark:border-white color-primary hover:bg-primary hover:text-white',
          )}
          onClick={() => {
            setActive(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default HelpCategories;

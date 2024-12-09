/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import { Link, To } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: To;
  isActive: boolean;
}

function GroupButton(
  {
    children = '',
    to,
    isActive = false,
  }: Props,
) {
  return (

    <Link
      type="button"
      to={to}
      className={classNames('px-6 py-3.5 rounded-2xl', isActive ? 'btn-gradient text-white' : 'text-primary dark:text-white color-primary hover:bg-primary hover:text-white')}
    >
      {children}
    </Link>

  );
}

export default GroupButton;

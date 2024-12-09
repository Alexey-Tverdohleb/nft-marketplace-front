/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
import { Link, To } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  className?: string;
  link?: To;
}

function Button({
  children,
  className = '',
  link = '',
}: Props) {
  return (
    <Link className={classNames('flex hover:bg-[#fafafa] dark:hover:bg-black-900 px-8', className)} to={link}>{children}</Link>
  );
}

export default Button;

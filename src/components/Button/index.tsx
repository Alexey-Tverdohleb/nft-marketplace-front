import classNames from 'classnames';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'default';
  className?: string;
}

const TYPES = {
  primary: 'bg-primary text-white rounded-full dark:bg-primary-900 dark:text-white dark:hover:bg-primary dark:hover:text-white',
  secondary: 'btn-light flex items-center gap-x-2 px-6 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary',
  default: 'h-auto',
};

export default function Button({
  color = 'secondary',
  className = '',
  children,
  ...rest
}: Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={classNames(TYPES[color], className)} {...rest}>
      {children}
    </button>
  );
}

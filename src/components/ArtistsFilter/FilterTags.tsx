/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon/Icon';

type Props = {
  children: React.ReactNode;
  className?: string;
  handleChanged(): void;
  [rest:string]: any;
}

function FilterTags({
  children,
  handleChanged,
  className = '',
  ...rest
}: Props) {
  return (
    <div {...rest} className={classNames('whitespace-nowrap border-2 border-primary rounded-[16px] h-[56px] flex items-center gap-x-2 px-6 hover:bg-transparent hover:text-black-400 dark:text-white dark:border-white', className)}>
      {children}
      <Button onClick={handleChanged} className="ml-4" color="default">
        <Icon name="x" className="stroke-current" />
      </Button>
    </div>
  );
}

export default FilterTags;

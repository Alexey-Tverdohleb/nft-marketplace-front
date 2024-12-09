import classNames from 'classnames';
import React, { LegacyRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  ref?: LegacyRef<HTMLDivElement> | undefined;
};

function DefaultCard({ children, className, ref }: Props) {
  return (
    <div
      ref={ref}
      className={classNames(
        'card bg-white dark:bg-black-900 overflow-hidden shadow-card flex flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default DefaultCard;

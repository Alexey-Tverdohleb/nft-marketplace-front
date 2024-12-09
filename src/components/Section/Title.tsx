import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string
}

function SectionTitle({ children, className = '' }: Props) {
  return (
    <h2 className={classNames('md:text-2xl text-[22px] font-semibold', className)}>{children}</h2>
  );
}

export default SectionTitle;

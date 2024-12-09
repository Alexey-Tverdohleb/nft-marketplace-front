import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string
}

function SectionTitle({ children, className = '' }: Props) {
  return (
    <h1 className={classNames('text-5xl font-semibold', className)}>{children}</h1>
  );
}

export default SectionTitle;

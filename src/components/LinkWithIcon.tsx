import React from 'react';
import Icon from './Icon/Icon';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function LinkWithIcon({ href, children, className }: Props) {
  return (
    <div className={`flex items-center text-link ${className}`}>
      <a href={href} className="mr-3">
        {children}
      </a>
      <Icon name="arrow-right" className="stroke-current relative -top-px" />
    </div>
  );
}

export default LinkWithIcon;

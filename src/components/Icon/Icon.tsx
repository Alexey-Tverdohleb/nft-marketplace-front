import React from 'react';
import { upperFirst } from 'lodash';
import * as FeatherIcons from 'react-feather';

type Props = {
  name: string;
  size?: number;
  color?: string;
  className?: string | null;
};

function Icon({
  name = '',
  size = 20,
  color = '#000000',
  className = null,
}: Props) {
  if (!name) {
    throw new Error('Name property is required');
  }

  const parsedName = upperFirst(name.split('-').map(upperFirst).join(''));
  const Component = (FeatherIcons as any)[parsedName];

  if (!Component) {
    throw new Error(
      'Icon not found. Please visit this site https://feathericons.com/ for reference.',
    );
  }

  return (
    <Component
      className={className}
      size={size}
      color={color}
    />
  );
}

export default Icon;

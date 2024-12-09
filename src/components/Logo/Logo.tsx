import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { RootState } from 'store';

function Logo() {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return <LogoIcon color={darkMode ? '#fff' : '#000'} />;
}

export default Logo;

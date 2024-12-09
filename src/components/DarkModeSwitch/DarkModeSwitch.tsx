import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleDarkMode } from '../../store/slices/settings.slice';
import Icon from '../Icon/Icon';
import './DarkModeSwitch.sass';

function DarkModeSwitch() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: RootState) => state.settings);

  const onToggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, []);

  return (
    <button
      type="button"
      className={classNames('dark-mode-switch', { 'dark-mode-switch__active': darkMode })}
      onClick={onToggle}
    >
      <Icon
        name={darkMode ? 'sun' : 'moon'}
        className="icon"
      />
      <div className="switcher-element" />
    </button>
  );
}

export default DarkModeSwitch;

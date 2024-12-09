/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './ToggleSwitch.sass';

interface Props {
  isChecked: boolean
  onChange(): void
}

function ToggleSwitch({ isChecked, onChange }: Props) {
  return (
    <div className="form-check form-switch mb-4 flex">
      <label className="switch relative inline-block w-10 h-6 mr-2">
        <input type="checkbox" className="opacity-0 w-0 h-0" checked={isChecked} onChange={onChange} />
        <span className="slider round absolute cursor-pointer inset-0 bg-light-gray-2 rounded-[34px] dark:dark-gray-400" />
      </label>
      <p className="text-black-400 dark:text-white">Eligible for selling</p>
    </div>
  );
}

export default ToggleSwitch;

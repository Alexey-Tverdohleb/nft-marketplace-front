/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import { RootState } from '../../store';

type Props = {
  question: string;
  answer: string;
};

function Accordion({ question = '', answer = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useSelector((state: RootState) => state.settings);

  return (
    <div className="accordian mb-6">
      <h2
        className="flex mb-5 cursor-pointer items-center text-black-400 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name={isOpen ? 'minus' : 'plus'} className="mr-7" color={darkMode ? '#FFFFFF' : '#000000'} />

        <p>{question}</p>
      </h2>

      {isOpen && (
        <div className="content ml-12 border-l  border-link pl-6">
          <p className="max-w-3xl text-light-gray-400 dark:text-light-gray">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;

/* eslint-disable object-curly-newline */
import classNames from 'classnames';
import React from 'react';
import './Card.sass';

type Props = {
  cover: string;
  avatar?: string | null | undefined;
  children: React.ReactNode;
  // size?: string;
  className?: string;
};

function Card({ cover, avatar, children, className = '' }: Props) {
  return (
    <div
      className={classNames(
        'group card bg-white dark:bg-black-900 rounded-3xl overflow-hidden shadow-card flex flex-col',
        className,
      )}
    >
      <img draggable="false" className="max-h-[302px]" src={cover} alt="" />
      {avatar && (
        <div className="avatar border-2 border-white dark:border-black rounded-full h-[123px] w-[123px] mx-auto -mt-20 overflow-hidden">
          <img src={avatar} alt="" className="object-cover" />
        </div>
      )}
      {children}
    </div>
  );
}

export default Card;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Logo from 'components/Logo/Logo';
import { LINKS, SOCIAL_NETWORKS } from './links';

function Footer() {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  const [date] = useState(() => new Date());

  return (
    <footer className="container border-t border-gray-300 pt-12 px-[16px] xl:p-0">
      <div className="mb-4 mt-[40px]">
        <Logo />
      </div>
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-12 leading-7">
        <p className="max-w-[400px] w-full dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nulla volutpat, dictumst
          non, vitae aliquet enim et ut. Facilisis risus.
        </p>
        <div className="flex items-start gap-x-32 text-primary dark:text-white mt-8 md:mt-0">
          {LINKS.map(({ id, links }) => (
            <ul key={id}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-12">
        <p className="mb-8 md:mb-0">
          © Company name, Inc.
          {` ${date.getFullYear()}. `}
          We love our users!
        </p>
        <div className="flex items-center">
          <p className="mr-[40px]">Follow us:</p>
          <ul className="flex items-center -mx-4">
            { SOCIAL_NETWORKS.map((item) => (
              <li className="mx-4" key={item.to}>
                <a target="_blank" rel="noreferrer" href={item.to}>
                  <item.icon color={darkMode ? '#D3D5D9' : '#667085'} />
                </a>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

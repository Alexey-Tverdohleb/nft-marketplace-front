import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Artist } from 'pages/Artists/fakeArtists';

type Props = {
  className: string;
  socials: Artist['social_networks']
};

function SocialMediaLinks({ className, socials }: Props) {
  const { darkMode } = useSelector((state: RootState) => state.settings);
  return (
    <ul className={` mt-3 flex items-center gap-x-8 ${className}`}>
      { socials.map((item) => (
        <li key={item.id}>
          <a target="_blank" rel="noreferrer" href={item.src}>
            <item.icon color={darkMode ? '#D3D5D9' : '#667085'} />
          </a>
        </li>
      )) }
    </ul>
  );
}

export default SocialMediaLinks;

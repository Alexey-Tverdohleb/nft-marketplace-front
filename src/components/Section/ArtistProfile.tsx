/* eslint-disable max-len */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SideStats from 'components/SideStats/SideStats';
import SocialMediaLinks from 'components/SocialMediaLinks/SocialMediaLinks';
import WatchVideo from 'components/WatchVideo/WatchVideo';
import { FAKE_ARTISTS } from 'pages/Artists/fakeArtists';

function ArtistProfile() {
  const { id } = useParams();
  const [artist] = useState(() => FAKE_ARTISTS.find((item) => item.id === id));

  if (!artist) {
    return <div>Loading...</div>;
  }
  return (
    <section className="md:p-0 max-w-[1024px] mx-auto artist-profile mb-36">
      <div className="flex flex-col lg:flex-row dark:text-white lg:p-10 flex items-center justify-between">
        <div className="w-full h-full text-center flex flex-col">
          <div className="flex-grow">
            <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-4">
              <img src={artist.avatar} alt={artist.id} />
            </div>
            <div className="mt-6 flex justify-center">
              <WatchVideo />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-10">
          <p className="text-[32px] font-semibold mt-4">{artist.name}</p>
          <p className="text-black-400 dark:text-light-gray mt-4">
            {artist.full_description}
          </p>
          <p className="hidden md:block text-[12px] mt-4 text-light-gray-400 dark:text-light-gray">
            CONTACT ME:
          </p>
          <SocialMediaLinks socials={artist.social_networks} className="hidden md:flex " />
          <SideStats items={artist.items} volume={artist.collections} floorPrice={artist.floor_price} className="block md:hidden mb-12" />
        </div>

        <p className="text-left w-full block md:hidden text-[12px] mt-4 text-light-gray-400 dark:text-light-gray">
          CONTACT ME:
        </p>
        <SocialMediaLinks socials={artist.social_networks} className="block md:hidden w-full " />

        <SideStats items={artist.items} volume={artist.collections} floorPrice={artist.floor_price} className="hidden md:block" />
      </div>
    </section>
  );
}

export default ArtistProfile;

import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from 'hooks/useScrollToTop';
import Icon from 'components/Icon/Icon';
import ArtistProfile from 'components/Section/ArtistProfile';
import TrendingCollections from 'components/Section/TrendingCollections';
import NFTListWithSwiper from 'components/Swiper/NFTListWithSwiper';

function ArtistPage() {
  useScrollToTop();

  return (
    <div className="px-4 xl:px-0 artist-profile mt-12">
      <div className="container">
        <div className="flex flex-row items-center">
          <Icon name="arrow-left" className="stroke-current dark:text-white mr-2" />
          <Link className="text-black-400 dark:text-white" to="/artists">
            Back to all artists
          </Link>
        </div>
        <ArtistProfile />
        <NFTListWithSwiper />
        <TrendingCollections />
        <div className="flex items-center justify-between" />
      </div>
    </div>
  );
}

export default ArtistPage;

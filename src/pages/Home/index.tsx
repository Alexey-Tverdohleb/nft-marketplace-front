import React from 'react';
import ExploreCategories from 'components/Section/Categories';
import FeaturedArtists from 'components/Section/FeaturedArtists';
import TrendingCollections from 'components/Section/TrendingCollections';
import WhyChooseUs from 'components/Section/WhyChooseUs';
import useScrollToTop from 'hooks/useScrollToTop';
import CollectionVolume from 'components/Section/CollectionVolume';
import SellSection from 'components/Section/SellSection';
import './index.sass';

function Home() {
  useScrollToTop();

  return (
    <div className="home-page p-[16px] xl:p-0">
      <div className="container">
        <SellSection />
        <ExploreCategories />
        <CollectionVolume />
        <FeaturedArtists />
        <TrendingCollections />
        <WhyChooseUs withLabel withMoreDetails />
      </div>
    </div>
  );
}

export default Home;

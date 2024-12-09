import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTitle from 'components/PageTitle';
import useScrollToTop from 'hooks/useScrollToTop';
import GroupButton from 'components/Button/GroupButton';
import ExploreList from 'components/Section/ExploreList';
import TrendingCollections from 'components/Section/TrendingCollections';
import NFTListWithSwiper from 'components/Swiper/NFTListWithSwiper';
import './index.sass';

const TABS = [
  {
    label: 'NFTs',
    tab: 'nft',
  },
  {
    label: 'Collections',
    tab: 'collections',
  },
];

function Home() {
  useScrollToTop();
  const [params] = useSearchParams();
  const activeTab = params.get('tab') ?? 'nft';

  return (
    <div className="artists-page mt-12 px-4 xl:px-0">
      <div className="container">
        <div className="block md:flex md:flex-row md:items-center mb-6 px-4 md:px-0">
          <PageTitle className="mr-10 mb-5">Explore</PageTitle>
          <div className="flex w-fit items-center border-[2px] rounded-[20px] border-[#194185] p-1">
            {TABS.map((item) => {
              const newSearchParams = new URLSearchParams(params);
              newSearchParams.set('tab', item.tab);
              return (
                <GroupButton
                  key={item.label}
                  to={{ search: newSearchParams.toString() }}
                  isActive={item.tab === activeTab}
                >
                  {item.label}
                </GroupButton>
              );
            })}
          </div>
        </div>
        <div className="content">
          {activeTab === 'nft' && (
            <>
              <NFTListWithSwiper title="Trending NFTs of this week" />
              <ExploreList />
            </>
          )}
          {activeTab === 'collections' && (
            <TrendingCollections title="Trending Collections of this week" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

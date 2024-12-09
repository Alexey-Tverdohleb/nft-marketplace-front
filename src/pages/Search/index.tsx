/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import GroupButton from 'components/Button/GroupButton';
import NoDataFound from 'components/NoDataFound/NoDataFound';
import PageTitle from 'components/PageTitle';
import ArtistsList from 'components/Section/ArtistsList';
import NFTCollections from 'components/Section/NFTCollections';
import TrendingCollections from 'components/Section/TrendingCollections';

const TABS = ['NFTs', 'Collections', 'Artists'].map((item) => ({ label: item, tab: item.toLowerCase() }));

function Search() {
  const [params] = useSearchParams();
  const activeTab = params.get('tab') ?? 'nfts';
  // this is just dummy variable to hid notDataFound component
  const isDataFound = false;

  return (
    <div className="container mt-10 mb-[170px] px-4 xl:px-0">
      <PageTitle className="mb-6 text-light-gray-400 dark:white">
        Search results for
        <span className="text-black-400 dark:text-light-gray dark:font-semibold "> Meta</span>
      </PageTitle>
      <div className="wrapper flex mb-6">
        <div className="tabs">
          <div className="flex items-center gap-x-2 border-[2px] rounded-[20px] border-[#194185] p-1">
            {TABS.map((item) => {
              const newSearchParams = new URLSearchParams(params);
              newSearchParams.set('tab', item.tab);

              return (
                <GroupButton
                  key={item.label}
                  to={{ search: newSearchParams.toString() }}
                  isActive={activeTab === item.tab}
                >
                  {item.label}
                </GroupButton>
              );
            })}
          </div>
        </div>
      </div>
      {!isDataFound && (
        <NoDataFound
          isButton={false}
          heading="Nothing found"
          text="Try to use another search phrase"
        />
      )}

      <div className="content">
        {activeTab === 'nfts' && (
          <div>
            <NFTCollections withSort withFilter title="" />
          </div>
        )}
        {activeTab === 'collections' && (
          <div>
            <TrendingCollections title="Trending Collections of this week" />
            <TrendingCollections title="Categories" />
          </div>
        )}
        {activeTab === 'artists' && (
          <div>
            <ArtistsList />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

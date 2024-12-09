import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'store';
import PageTitle from 'components/PageTitle';
import SectionTitle from 'components/Section/Title';
import ButtonSort from 'components/Sort/Sort';
import FilterTags from 'components/ArtistsFilter/FilterTags';
import Button from 'components/Button';
import NoDataFound from 'components/NoDataFound/NoDataFound';
import CollectionFilter from 'components/CollectionsFilter';
import useCollectionsFilterFormState from 'hooks/useCollectionsFilterFormState';
import ItemsSwitcher from './ItemsSwitcher';
import NftList from './NftList';

export default function MyItems() {
  const [params] = useSearchParams();
  const activeTab = params.get('tab') ?? 'nft';

  const {
    formState, resetFields, clearAll, setFormState,
  } = useCollectionsFilterFormState();
  const { saleType, minPrice, maxPrice } = formState;

  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);

  const NFT_LIST = useMemo(() => {
    if (activeTab === 'nft') {
      return fakeNftList;
    }
    if (activeTab === 'favorite') {
      return fakeNftList.filter((item) => item.isFavorite) ?? [];
    }
    return [];
  }, [activeTab, fakeNftList]);

  return (
    <div className="container mt-12 px-4 xl:px-0">
      <PageTitle>My Items</PageTitle>
      <ItemsSwitcher />
      <div className="my-12">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle>
            {NFT_LIST.length}
            {' '}
            NFTs
          </SectionTitle>
          { !!NFT_LIST.length && (
            <div className="flex items-center ">
              <ButtonSort />
              <CollectionFilter initValues={formState} handleSubmit={setFormState} />
            </div>
          )}

        </div>
        {(saleType !== 'all' || minPrice || maxPrice) && (
          <div className="block md:flex items-center mb-8 gap-4">
            <p className="mr-4 font-bold">Filters</p>
            <div className="flex flex-wrap gap-2">
              {saleType !== 'all' && (
                <FilterTags className="capitalize" handleChanged={resetFields(['saleType'])}>{saleType.split('_').join(' ')}</FilterTags>
              )}
              {minPrice && maxPrice && (
                <FilterTags handleChanged={resetFields(['minPrice', 'maxPrice'])}>
                  {`ADA: ${minPrice} - ${maxPrice}`}
                </FilterTags>
              )}

              <Button
                color="default"
                onClick={clearAll}
                className="text-link font-bold dark:text-white"
              >
                Clear All
              </Button>
            </div>
          </div>
        )}

        { NFT_LIST.length ? <NftList list={NFT_LIST} />
          : <NoDataFound isButton heading="You don`t have NFTs yet" /> }
      </div>
    </div>
  );
}

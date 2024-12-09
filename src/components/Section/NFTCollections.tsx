/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import CategoriesMenu from 'components/Categories/Categrories';
import ButtonSort from 'components/Sort/Sort';
import Button from 'components/Button';
import FilterTags from 'components/ArtistsFilter/FilterTags';
import ExploreFilter from 'components/ExploreFilter';
import useExploreFilterFormState from 'hooks/useExploreFilterFormState';
import NftCard from 'components/NftCard';
import SectionTitle from './Title';

type Props = {
  withMenu?: boolean;
  title?: string;
  withFilter?: boolean;
  withSort?: boolean;
};

function NFTList() {
  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 gap-6">
      {fakeNftList.map((card) => (
        <NftCard key={card.id} card={card} />
      ))}
    </div>
  );
}

function NFTCollections({
  withMenu = false,
  title = 'Trending NFTs',
  withFilter = false,
  withSort = false,
}: Props) {
  const {
    formState, clearAll, setFormState, resetFields,
  } = useExploreFilterFormState();
  const {
    nickname, minPrice, maxPrice, saleType,
  } = formState;

  return (
    <section className="explore-categories mb-36">
      <SectionTitle className="mb-4">{title}</SectionTitle>
      {withMenu && (
        <div className="overflow-hidden flex items-center justify-between mb-6">
          <CategoriesMenu />
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>332 NFTs</SectionTitle>
        <div className="flex items-center ">
          {withSort && <ButtonSort />}
          {withFilter && <ExploreFilter initValues={formState} handleSubmit={setFormState} />}
        </div>
      </div>
      {withFilter && (nickname !== '' || minPrice !== '' || maxPrice !== '' || saleType !== 'all') && (
        <div className="md:flex inline-block items-center mb-8 gap-4">
          <p className="mr-4 font-bold">Filters</p>
          <div className="flex flex-wrap md gap-2">
            {nickname && <FilterTags handleChanged={resetFields(['nickname'])}>{nickname}</FilterTags>}
            {minPrice && maxPrice && (
              <FilterTags handleChanged={resetFields(['minPrice', 'maxPrice'])}>
                {`ADA: ${minPrice} - ${maxPrice}`}
              </FilterTags>
            )}
            { saleType !== 'all' && (
              <FilterTags className="capitalize" handleChanged={resetFields(['saleType'])}>SALE: {saleType.split('_').join(' ')}</FilterTags>
            )}

            <Button
              color="default"
              onClick={() => clearAll()}
              className="text-link font-bold dark:text-white"
            >
              {' '}
              Clear All{' '}
            </Button>
          </div>
        </div>
      )}

      <NFTList />
    </section>
  );
}

export default NFTCollections;

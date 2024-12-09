import React, { MouseEvent, useCallback, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import SectionTitle from 'components/Section/Title';
import ButtonSort from 'components/Sort/Sort';
import FilterTags from 'components/ArtistsFilter/FilterTags';
import Button from 'components/Button';
import CollectionFilter from 'components/CollectionsFilter';
import Card from 'components/Card/Card';
import useCollectionsFilterFormState from 'hooks/useCollectionsFilterFormState';
import Dots from 'components/Loader/Dots';
import { RootState } from 'store';
import { loadMore, setFetching, setIsFavorite } from 'store/slices/fakeNfts.slice';
import traitsDecoder from 'helpers/traitsDecoder';
import traitsEncoder from 'helpers/traitsEncoder';
import { ReactComponent as BookmarkFill } from 'assets/icons/BookmarkFill.svg';
import { ReactComponent as BookmarkOutline } from 'assets/icons/BookmarkOutline.svg';
import Properties from './Properties';

export default function ItemsTab() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const {
    formState, resetFields, clearAll, setFormState,
  } = useCollectionsFilterFormState();
  const {
    maxPrice, minPrice, saleType, filters,
  } = formState;

  const traits = traitsDecoder(filters);

  const { fakeNftList, fetching } = useSelector((state: RootState) => state.fakeNft);
  const hasMore = fakeNftList.length < 24;

  const handleBookmark = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    dispatch(setIsFavorite(id));
  };

  const resetFilters = (trait: string, value: string) => {
    const newSearchParams = new URLSearchParams(params);
    const filtered = traits[trait]?.filter(((item) => item !== value));

    if (filtered.length) {
      newSearchParams.set('filters', traitsEncoder({ ...traits, [trait]: filtered }));
    } else {
      delete traits[trait];
      newSearchParams.set('filters', traitsEncoder(traits));
    }
    setParams(newSearchParams);
  };

  const lastArtistsRef = useCallback((node) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        dispatch(setFetching(true));
      }
    });
    if (node) {
      observer.observe(node);
    }
  }, [hasMore]);

  useEffect(() => {
    if (fetching && hasMore) {
      setTimeout(() => {
        dispatch(loadMore());
        dispatch(setFetching(false));
      }, 500);
    } else if (fetching && !hasMore) {
      dispatch(setFetching(false));
    }
  }, [fetching, hasMore]);

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-4">
        <SectionTitle>
          {fakeNftList.length}
          {' '}
          NFTs
        </SectionTitle>
        <div className="flex items-center ">
          <Properties />
          <ButtonSort />
          <CollectionFilter handleSubmit={setFormState} initValues={formState} />
        </div>
      </div>
      { (saleType !== 'all' || minPrice || maxPrice || !!Object.keys(traits).length) && (
      <div className="md:flex inline-block items-center mb-8 gap-4">
        <p className="mr-4 font-bold">Filters</p>
        <div className="flex flex-wrap md gap-2">
          { traits && Object.keys(traits).map((item) => {
            const options = traits[item];
            return options.map((option) => (
              <FilterTags className="capitalize" handleChanged={() => resetFilters(item, option)}>
                {item}
                :
                &nbsp;
                {option}
              </FilterTags>
            ));
          }) }
          {saleType !== 'all' && (
          <FilterTags className="capitalize" handleChanged={resetFields(['saleType'])}>
            {saleType.split('_').join(' ')}
          </FilterTags>
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
      ) }

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 gap-6">
        {fakeNftList.map((item) => (
          <Link key={item.id} to={`/nft/${item.id}`}>
            <Card className="hover:scale-[102%] duration-300 relative" cover={item.src}>
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">{item.name}</p>
                <p className="mb-2">{item.collection_name}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-red-400 dark:text-red-800 text-lg">
                    <span className="font-bold">{ item.price_ada }</span>
                    {' '}
                    {item.currency}
                  </p>
                  <span
                    className={cx(
                      'text-red-400 font-bold',
                      { 'text-green-400': !!item.status },
                    )}
                  >
                    {item.status ? 'For Sale' : 'Not For Sale'}
                  </span>
                </div>
              </div>
              <button type="button" onClick={(event) => handleBookmark(event, item.id)} className="absolute h-fit p-[15px] top-0 right-0 text-white">
                { !item.isFavorite ? <BookmarkOutline className="h-[24px]" /> : <BookmarkFill className="h-[24px]" /> }
              </button>
            </Card>
          </Link>
        ))}
      </div>
      { fetching && (
        <div className="flex items-center justify-center w-full">
          <Dots />
        </div>
      )}
      <div className="bottom-list mb-[50px]" ref={lastArtistsRef} />
    </div>
  );
}

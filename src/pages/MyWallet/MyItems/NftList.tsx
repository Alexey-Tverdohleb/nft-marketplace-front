import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'components/Card/Card';
import LoadMoreButton from 'components/Button/LoadMoreButton';
import { setIsFavorite } from 'store/slices/fakeNfts.slice';
import { ReactComponent as BookmarkOutline } from 'assets/icons/BookmarkOutline.svg';
import { ReactComponent as BookmarkFill } from 'assets/icons/BookmarkFill.svg';

interface Props {
  list: {
    id: string
    src: string
    name: string
    collection_name: string
    price_ada: number
    isFavorite: boolean
  }[]
}

export default function NftList({ list }: Props) {
  const dispatch = useDispatch();

  const handleBookmark = (event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    dispatch(setIsFavorite(id));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 gap-6">
        {list.map((item) => (
          <Link key={item.id} to={`/nft/${item.id}`}>
            <Card className="hover:scale-[102%] duration-300 relative" cover={item.src}>
              <div className="card-details px-8 py-6">
                <p className="text-2xl mb-1">{item.name}</p>
                <p className="mb-2">{item.collection_name}</p>
                <p className="text-red-400 dark:text-red-800 text-lg">
                  <span className="font-bold">{ item.price_ada }</span>
                  {' '}
                  ADA
                </p>
              </div>
              <button type="button" onClick={(event) => handleBookmark(event, item.id)} className="absolute h-fit p-[15px] top-0 right-0 text-white">
                { !item.isFavorite ? <BookmarkOutline className="h-[24px]" /> : <BookmarkFill className="h-[24px]" /> }
              </button>
            </Card>
          </Link>
        ))}
      </div>
      <LoadMoreButton />
    </>
  );
}

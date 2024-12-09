import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Card from 'components/Card/Card';
import { fakeNFT } from 'store/slices/fakeNfts.slice';

interface Props {
  card: fakeNFT
}

export default function NftCard({ card }: Props) {
  return (
    <Link to={`/nft/${card.id}`} className="snap-center flex">
      <Card cover={card.src} className="w-card-base hover:scale-[102%] duration-300">
        <div className="card-details px-8 py-6">
          <p className="text-2xl mb-1">{card.name}</p>
          <p className="mb-2">{card.collection_name}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-red-400 dark:text-red-800 text-lg">
              <span className="font-bold">{card.price_ada}</span>
              &nbsp;
              {card.currency}
            </p>
            <span
              className={cx(
                'text-red-400 font-bold',
                { 'text-green-400': !!card.status },
              )}
            >
              {card.status ? 'For Sale' : 'Not For Sale'}
            </span>
            {/* <BuyNow /> */}
          </div>
        </div>
      </Card>
    </Link>
  );
}

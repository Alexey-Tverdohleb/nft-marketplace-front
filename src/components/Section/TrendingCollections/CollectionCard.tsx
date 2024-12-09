import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/Card/Card';
import lovelaceAdaExchange from 'helpers/lovelaceAdaExchange';

interface Props {
  supply: number
  src: string
  name: string
  globalVolume: number
  globalFloor: number
  link: string
}

function CollectionCard({
  supply, src, name, globalFloor, globalVolume, link,
}: Props) {
  return (
    <Link to={`/collection/${link}`}>
      <Card className="hover:scale-[102%] duration-300" cover={`https://image-optimizer.jpgstoreapis.com/${src}`}>
        <div className="card-details px-8 py-6">
          <p className="text-2xl mb-1 text-ellipsis overflow-hidden whitespace-nowrap">{ name }</p>
          <div className="flex items-center justify-between px-4 mt-4">
            <div className="flex items-center flex-col">
              <p className="font-bold">{ `${(supply / 1_000).toLocaleString()}k` }</p>
              <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">items</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="font-bold">{ `${lovelaceAdaExchange(globalVolume, 'volume')}M` }</p>
              <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">volume</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="font-bold">{ `${lovelaceAdaExchange(globalFloor, 'floor')}` }</p>
              <p className="text-[6px] text-light-gray-400 dark:text-light-gray md:text-[0.667rem]">floor price</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default CollectionCard;

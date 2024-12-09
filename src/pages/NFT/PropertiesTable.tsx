/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import DefaultCard from 'components/Card/DefaultCard';
import Dots from 'components/Loader/Dots';
import { useFetchSingleNftQuery } from 'services/NftService';
import traitsEncoder from 'helpers/traitsEncoder';

export default function PropertiesTable() {
  const { id } = useParams();
  const { data, isLoading } = useFetchSingleNftQuery(id ?? '');

  const traits = useMemo(() => {
    if (data) {
      return Object.keys(data?.traits);
    }

    return [];
  }, [data]);

  if (isLoading) {
    return <Dots />;
  }

  if (!data) {
    return <div>Sth is wrong..</div>;
  }

  return (
    <div className="w-full">
      <DefaultCard className="w-full bg-light-gray-50 rounded-2xl">
        <div className="w-full flex flex-col">
          <p className="text-[24px] font-semibold px-[24px] py-[12px]">Properties</p>
          <div className="grid grid-cols-2 border-t-[1px]">
            { traits.length ? traits.map((item) => (
              <Link
                key={item}
                to={`/collection/${data.collections.url}?filters=${traitsEncoder({ [item]: [data.traits[item]] })}`}
                className="w-full flex justify-between lowercase cursor-pointer px-4 py-3 hover:bg-gray-300 hover:text-black duration-300 odd:border-r-[1px]"
              >
                <span className="capitalize">
                  {item}
                  :
                </span>
                  &nbsp;
                {data.traits[item]}
              </Link>
            )) : <Dots /> }
          </div>
        </div>
      </DefaultCard>
    </div>
  );
}

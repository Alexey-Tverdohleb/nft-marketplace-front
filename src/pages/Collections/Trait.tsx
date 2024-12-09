import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cx from 'classnames';
import traitsDecoder from 'helpers/traitsDecoder';
import traitsEncoder from 'helpers/traitsEncoder';
import { ReactComponent as Chevron } from 'assets/icons/Chevron.svg';

interface Props {
  traitName: string
  search: string
  traitItems: Record<string, number>
}

export default function TraitItem({ traitName, traitItems, search }: Props) {
  const [toggle, setToggle] = useState(false);
  const [params, setParams] = useSearchParams();
  const filters = params.get('filters') ?? '';

  const handleTrait = (value: string) => {
    const newSearchParams = new URLSearchParams(params);
    const decoded = traitsDecoder(filters);
    const prevList = decoded[traitName] ?? [];

    if (prevList.some((item) => item === value)) {
      const filtered = prevList.filter((item) => item !== value);
      if (filtered.length) {
        const encoded = traitsEncoder(
          {
            ...decoded,
            [traitName]: filtered,
          },
        );
        newSearchParams.set('filters', encoded);
      } else {
        delete decoded[traitName];
        newSearchParams.set('filters', traitsEncoder(decoded));
      }
    } else {
      const encoded = traitsEncoder({ ...decoded, [traitName]: [...prevList, value] });
      newSearchParams.set('filters', encoded);
    }

    setParams(newSearchParams);
  };

  const activeOptions = useMemo(() => {
    const decoded = traitsDecoder(filters);
    if (decoded[traitName]?.length) {
      return decoded[traitName];
    }
    return [];
  }, [params]);

  const itemList = useMemo(() => {
    if (search !== '') {
      setToggle(true);
      return Object.keys(traitItems).filter((item) => item.includes(search));
    }
    setToggle(false);
    return Object.keys(traitItems);
  }, [search]);

  return (
    <div className="py-1.5 px-4 overflow-hidden w-[300px]">
      <button
        type="button"
        className="capitalize w-full text-left flex justify-between items-center"
        onClick={() => setToggle((prev) => !prev)}
      >
        {traitName}
        <Chevron className={cx('h-[6px]', { 'rotate-180': toggle })} />
      </button>
      { toggle && (
        <div>
          { traitItems && itemList.map((item) => (
            <label htmlFor={item} key={item} className="flex cursor-pointer items-center justify-between">
              <div className="flex items-center">
                <p className="px-2 capitalize">{item}</p>
                <p className="mr-[10px]">{ `(${traitItems[item]})` }</p>
              </div>
              <input id={item} type="checkbox" checked={activeOptions.some((opt) => opt === item)} onChange={() => handleTrait(item)} />
            </label>
          ))}
        </div>
      ) }

    </div>
  );
}

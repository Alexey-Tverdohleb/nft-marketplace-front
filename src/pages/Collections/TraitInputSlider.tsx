import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import traitsDecoder from 'helpers/traitsDecoder';
import traitsEncoder from 'helpers/traitsEncoder';

interface Props {
  traitName: string
  max: number
}

export default function TraitInputSlider({ traitName, max }: Props) {
  const [inputVal, setInputVal] = useState(0);
  const [params, setParams] = useSearchParams();
  const filters = params.get('filters') ?? '';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputVal(+value);
  };

  // query params update
  useEffect(() => {
    const newSearchParams = new URLSearchParams(params);

    if (inputVal !== 0) {
      const decoded = traitsDecoder(filters);
      const encoded = traitsEncoder({ ...decoded, [traitName]: [`${inputVal}`] });
      newSearchParams.set('filters', encoded);
    }

    const delayed = setTimeout(() => setParams(newSearchParams), 300);
    return () => clearTimeout(delayed);
  }, [inputVal]);

  // update state by query params
  useEffect(() => {
    const decoded = traitsDecoder(filters);
    if (decoded[traitName]?.length) {
      setInputVal(+decoded[traitName][0]);
    }
  }, [params]);

  return (
    <div className="flex flex-col px-4 py-1.5">
      <span className="capitalize">{traitName}</span>
      <span className="text-[12px]">{ `Max: ${inputVal}` }</span>
      <div className="bg-link-dark w-full h-1 rounded-3xl relative my-2">
        <input
          type="range"
          className="bg-transparent w-full top-0 h-1 absolute"
          max={max}
          value={inputVal}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

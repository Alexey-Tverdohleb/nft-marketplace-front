import React, {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import traitsDecoder from '../../helpers/traitsDecoder';
import traitsEncoder from '../../helpers/traitsEncoder';

interface Props {
  traitName: string
  min: number
  max: number
  step: number;
}

export default function TraitInputRange({
  traitName, min, max, step,
}: Props) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [inputState, setInputState] = useState({ minVal: min, maxVal: max });
  const [params, setParams] = useSearchParams();
  const filters = params.get('filters') ?? '';

  const handleInputRange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { name } = event.target;

    if (name === 'maxVal') {
      if (inputState.maxVal - inputState.minVal >= 1 && inputState.maxVal <= max) {
        if (+value > inputState.minVal) setInputState((prev) => ({ ...prev, [name]: +value }));
      } else if (+value > inputState.maxVal) setInputState((prev) => ({ ...prev, [name]: +value }));
    } else if (name === 'minVal') {
      if (inputState.maxVal - inputState.minVal >= 1 && inputState.maxVal <= max) {
        if (+value < inputState.maxVal) setInputState((prev) => ({ ...prev, [name]: +value }));
      } else if (+value > inputState.minVal) setInputState((prev) => ({ ...prev, [name]: +value }));
    }
  };

  // selected range highlight
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(inputState.minVal / max) * 100}%`;
      progressRef.current.style.right = `${100 - (inputState.maxVal / max) * 100}%`;
    }
  }, [inputState, max, step]);

  // query params update.
  useEffect(() => {
    const newSearchParams = new URLSearchParams(params);
    const decoded = traitsDecoder(filters);
    if (inputState.minVal !== min || inputState.maxVal !== max) {
      const encoded = traitsEncoder({ ...decoded, [traitName]: [`${inputState.minVal} - ${inputState.maxVal}`] });
      newSearchParams.set('filters', encoded);
    } else {
      delete decoded[traitName];
      newSearchParams.set('filters', traitsEncoder(decoded));
    }
    const delayed = setTimeout(() => setParams(newSearchParams), 300);
    return () => clearTimeout(delayed);
  }, [inputState]);

  // update state due to queryparams
  useEffect(() => {
    const decoded = traitsDecoder(filters);
    if (decoded[traitName]?.length) {
      const vals = decoded[traitName][0].split(' - ');
      setInputState({ minVal: +vals[0], maxVal: +vals[1] });
    }
  }, [params]);

  return (
    <div className="flex flex-col px-4 py-1.5">
      <span className="capitalize">{traitName}</span>
      <div className="flex justify-between">
        <input
          value={inputState.minVal}
          disabled
          className="w-12 h-fit rounded-md border border-gray-400 text-center"
        />
        <input
          value={inputState.maxVal}
          disabled
          className="w-12 h-fit rounded-md border border-gray-400 text-center"
        />
      </div>

      <div className="my-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-link-dark rounded "
            ref={progressRef}
          />
        </div>

        <div className="w-full range-input relative">
          <input
            type="range"
            className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
            name="minVal"
            value={inputState.minVal}
            min={min}
            max={max}
            step={step}
            onChange={handleInputRange}
          />
          <input
            type="range"
            className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none pointer-events-none"
            name="maxVal"
            value={inputState.maxVal}
            min={min}
            max={max}
            step={step}
            onChange={handleInputRange}
          />
        </div>
      </div>

    </div>
  );
}

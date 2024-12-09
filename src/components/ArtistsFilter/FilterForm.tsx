import React, { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from 'components/Button';
import useArtistsFilterFormState, { State } from 'hooks/useArtistsFilterFormState';

interface Props {
  initialValues?: State;
  onSubmit?(state: State): void
}

export default function FilterForm({ initialValues, onSubmit }: Props) {
  const [params, setParams] = useSearchParams();
  const { formState, handleChange, clearAll } = useArtistsFilterFormState(initialValues);
  const { nickname, min, max } = formState;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newParams = new URLSearchParams(params);
    newParams.set('min', formState.min);
    newParams.set('max', formState.max);
    newParams.set('nickname', formState.nickname);
    setParams(newParams);

    onSubmit?.(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <p className="label dark:text-gray-400">ARTIST NICKNAME</p>
        <input
          type="text"
          name="nickname"
          id="nickname"
          className="form-control dark:bg-[#2A2A32]"
          placeholder="e.g 'Albert'"
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p className="label dark:text-gray-400">NUMBER OF ITEMS</p>
        <div className="flex items-center">
          <input
            type="text"
            name="min"
            id="min"
            className="form-control max-w-[205px] dark:bg-[#2A2A32]"
            placeholder="Min"
            value={min}
            onChange={handleChange}
          />
          <span className="px-4 text-gray-400 dark:text-light-gray">To</span>
          <input
            type="text"
            name="max"
            id="max"
            className="form-control max-w-[205px] dark:bg-[#2A2A32]"
            placeholder="max"
            value={max}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <p className="label dark:text-gray-400">FLOOR PRICE (ADA)</p>
        <input
          type="text"
          className="form-control max-w-[205px] dark:bg-[#2A2A32]"
          placeholder="e.g 0.1"
        />
      </div>
      <div className="flex justify-between">
        <Button type="submit" className="text-white rounded-full px-8" color="primary">
          Apply Filter
        </Button>
        <Button
          onClick={clearAll}
          className="rounded-full px-8 border-none hover:bg-transparent hover:text-black-900"
        >
          Clear All
        </Button>
      </div>
    </form>
  );
}

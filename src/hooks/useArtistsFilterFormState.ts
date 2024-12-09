import { ChangeEventHandler, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type State = {
  nickname: string;
  min: string;
  max: string;
};

const INITIAL_FORM_STATE: State = { nickname: '', min: '', max: '' };

export default function useArtistsFilterFormState(initialState?: State) {
  const [params, setParams] = useSearchParams();
  const [formState, setFormState] = useState(initialState ?? INITIAL_FORM_STATE);

  const clearAll = useCallback(() => {
    const newParams = new URLSearchParams(params);
    newParams.delete('min');
    newParams.delete('max');
    newParams.delete('nickname');
    setParams(newParams);

    setFormState(INITIAL_FORM_STATE);
  }, []);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(({ target }) => {
    const { name, value } = target;
    if (name === undefined) return;

    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const resetFields = useCallback((fields: Array<keyof State>) => () => {
    setFormState((prevState) => ({
      ...prevState,
      ...fields.reduce<Partial<State>>((acc, field) => {
        acc[field] = '';

        return acc;
      }, {}),
    }));
  }, []);

  return {
    formState,
    clearAll,
    handleChange,
    setFormState,
    resetFields,
  };
}

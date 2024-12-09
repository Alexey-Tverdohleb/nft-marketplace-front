import { useCallback, useState } from 'react';
import { FormState } from 'components/ExploreFilter/Form';
import { useSearchParams } from 'react-router-dom';

export const initState: FormState = {
  nickname: '',
  minPrice: '',
  maxPrice: '',
  saleType: 'all',
};

export default function useExploreFilterFormState(initialState?: FormState) {
  const [params, setParams] = useSearchParams();
  const [formState, setFormState] = useState(initialState ?? initState);

  const clearAll = useCallback(() => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.delete('nickname');
    newSearchParams.delete('minPrice');
    newSearchParams.delete('maxPrice');
    newSearchParams.delete('saleType');

    setFormState(initState);
    setParams(newSearchParams);
  }, []);

  const resetFields = useCallback((fields: Array<keyof FormState>) => () => {
    setFormState((prevState) => ({
      ...prevState,
      ...fields.reduce<Partial<FormState>>((acc, field) => {
        if (field !== 'saleType') acc[field] = '';
        if (field === 'saleType') acc[field] = 'all';

        return acc;
      }, {}),
    }));
  }, []);

  return {
    formState,
    clearAll,
    resetFields,
    setFormState,
  };
}

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type FormState = {
  saleType: 'all' | 'on_sale' | 'not_for_sale' | string,
  minPrice: string
  maxPrice: string
  filters: string
}

const initState: FormState = {
  saleType: 'all',
  minPrice: '',
  maxPrice: '',
  filters: '',
};

export default function useCollectionsFilterFormState(initialState?: FormState) {
  const [params, setParams] = useSearchParams();
  const [formState, setFormState] = useState(initialState ?? initState);

  const clearAll = useCallback(() => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.delete('minPrice');
    newSearchParams.delete('maxPrice');
    newSearchParams.delete('saleType');
    newSearchParams.delete('filters');

    setFormState(initState);
    setParams(newSearchParams);
  }, []);

  const resetFields = useCallback((fields: Array<keyof FormState>) => () => {
    const newSearchParams = new URLSearchParams(params);
    setFormState((prevState) => ({
      ...prevState,
      ...fields.reduce<Partial<FormState>>((acc, field) => {
        if (field !== 'saleType') {
          acc[field] = '';
          newSearchParams.delete(field);
          setParams(newSearchParams);
        }
        if (field === 'saleType') acc[field] = 'all';

        return acc;
      }, {}),
    }));
  }, []);

  useEffect(() => {
    setFormState({
      saleType: params.get('saleType') ?? 'all',
      filters: params.get('filters') ?? '',
      maxPrice: params.get('maxPrice') ?? '',
      minPrice: params.get('minPrice') ?? '',
    });
  }, [params]);

  return {
    formState,
    clearAll,
    resetFields,
    setFormState,
  };
}

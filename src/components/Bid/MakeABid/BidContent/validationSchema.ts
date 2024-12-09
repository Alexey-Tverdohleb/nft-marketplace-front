import { useMemo } from 'react';
import * as Yup from 'yup';

export default function useValidationSchema(min: number) {
  return useMemo(() => Yup.object().shape({
    bidPrice: Yup.number().min(min, `Bid price can't be less than ${min} ADA`).required('Price can`t be less or equal 0'),
  }), [min]);
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import {
  Field, Form, Formik, FormikHelpers,
} from 'formik';
import Button from 'components/Button';
import useExploreFilterFormState from 'hooks/useExploreFilterFormState';
import SaleType from './SaleType';
import validationSchema from './validationSchema';

export interface FormState {
  nickname: string
  minPrice: number | string
  maxPrice: number | string
  saleType: 'on_sale' | 'not_for_sale' | 'all'
}

interface Props {
  initValues: FormState
  handleSubmit(state: FormState): void
}

function ExploreForm({ initValues, handleSubmit }: Props) {
  const [params, setParams] = useSearchParams();

  const { formState } = useExploreFilterFormState(initValues);

  const onSubmit = ({
    nickname, minPrice, maxPrice, saleType,
  }: FormState, formikHelpers: FormikHelpers<FormState>) => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.set('nickname', nickname);
    newSearchParams.set('minPrice', minPrice.toString());
    newSearchParams.set('maxPrice', maxPrice.toString());
    newSearchParams.set('saleType', saleType);

    setParams(newSearchParams);
    handleSubmit({
      nickname, minPrice, maxPrice, saleType,
    });
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={formState}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, resetForm }) => (
        <Form className="flex flex-col">
          <label className="uppercase label dark:text-gray-400">
            Artist Nickname
            <Field
              className="form-control dark:bg-[#2A2A32]"
              id="nickname"
              name="nickname"
              placeholder="e.g. 'Albert'"
              value={values.nickname}
            />
          </label>
          <div className="m-0 form-group">
            <label className="uppercase label dark:text-gray-400">
              price (ada)
              <div className="flex items-center">
                <div>
                  <Field
                    className={cx(
                      'form-control dark:bg-[#2A2A32]',
                      { 'text-red-500': errors.minPrice || +values.minPrice > +values.maxPrice },
                    )}
                    id="minPrice"
                    name="minPrice"
                    placeholder="Min"
                    value={values.minPrice}
                  />
                </div>
                <span className="px-4 text-gray-400 dark:text-light-gray">To</span>
                <div>
                  <Field
                    className={cx(
                      'form-control dark:bg-[#2A2A32]',
                      { 'text-red-500 border-red-700': errors.maxPrice || +values.minPrice > +values.maxPrice },
                    )}
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="Max"
                    value={values.maxPrice}
                  />
                </div>
              </div>
            </label>
          </div>
          <label className="uppercase label dark:text-gray-400 flex flex-col w-fit">
            sale type
            <SaleType />
          </label>
          <div className="flex items-center justify-between">
            <Button disabled={!!errors.minPrice || !!errors.maxPrice} color="primary" type="submit" className="w-fit px-8">Apply Filters</Button>
            <button type="button" className="text-black" onClick={() => resetForm()}>Clear All</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ExploreForm;

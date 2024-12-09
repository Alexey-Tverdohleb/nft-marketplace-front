/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Field, Formik, Form, FormikHelpers,
} from 'formik';
import cx from 'classnames';
import { useSearchParams } from 'react-router-dom';
import SaleType from 'components/ExploreFilter/SaleType';
import Button from 'components/Button';
import useCollectionsFilterFormState, { FormState } from 'hooks/useCollectionsFilterFormState';
import validationSchema from './validationSchema';

interface Props {
  initValues: FormState
  handleSubmit(state: FormState): void
}

function CollectionForm({ initValues, handleSubmit }: Props) {
  const [params, setParams] = useSearchParams();

  const { formState } = useCollectionsFilterFormState(initValues);

  const onSubmit = (values: FormState, formikHelpers: FormikHelpers<FormState>) => {
    const newSearchParams = new URLSearchParams(params);
    newSearchParams.set('minPrice', values.minPrice.toString());
    newSearchParams.set('maxPrice', values.maxPrice.toString());
    newSearchParams.set('saleType', values.saleType);

    setParams(newSearchParams);
    handleSubmit(values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formState}
      onSubmit={onSubmit}
    >
      {({ values, errors, resetForm }) => (
        <Form className="flex flex-col">
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

export default CollectionForm;

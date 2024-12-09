import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { Formik, FormikValues } from 'formik';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Button from 'components/Button';
import { useFetchSingleNftQuery } from 'services/NftService';
import FormInput from './FormInput';
import useValidationSchema from './validationSchema';
import Notices from './Notices';

export type initValuesType = {
  bidPrice: number | null;
  minBidPrice: number
}

interface Props {
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}

export default function BidContentBody({ setIsSuccess }: Props) {
  const { id } = useParams();

  const { currentData } = useFetchSingleNftQuery(id ?? '');
  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);

  const currentFakeNft = useMemo(() => fakeNftList.find((item) => item.id === id), [id]);

  const minBid = useMemo(() => {
    if (currentFakeNft?.currentBid) return currentFakeNft?.currentBid;
    if (currentData && !currentFakeNft?.currentBid) {
      return (+currentData.collections.jpg_floor_lovelace / 1_000_000);
    }
    return 0;
  }, [currentFakeNft, currentData]);

  const validationSchema = useValidationSchema(minBid);

  const initValues: initValuesType = {
    minBidPrice: minBid,
    bidPrice: null,
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initValues}
      onSubmit={(values, formikHelpers) => {
        console.log(values);
        formikHelpers.resetForm();
      }}
    >
      {({
        submitForm, isSubmitting, errors,
      }) => (
        <form>
          <FormInput />
          <Notices />

          <div className="flex">
            <Button
              color="primary"
              disabled={isSubmitting || !!errors.bidPrice}
              className="px-8 mr-10"
              onClick={() => {
                setIsSuccess(true);
                submitForm();
              }}
            >
              Place a bid
            </Button>
          </div>
        </form>
      )}
    </Formik>

  );
}

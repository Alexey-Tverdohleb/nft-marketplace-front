import React, { useMemo, useState } from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import Icon from 'components/Icon/Icon';
import ToggleSwitch from 'components/ToggleSwitch/ToggleSwitch';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEligible } from 'store/slices/fakeNfts.slice';
import { RootState } from 'store';

type Props = {
  success?: boolean;
  error?: boolean;
};

function NftAvailability({ success, error }: Props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);
  const currentFakeNft = useMemo(() => {
    const current = fakeNftList.find((item) => item.id === id);
    if (!current) return null;
    return current;
  }, [id, fakeNftList]);

  const handleChange = () => {
    if (id) dispatch(setEligible(id));
  };

  return (
    <div
      className={cx('container items-center py-4 px-4 rounded-2xl  lg:px-10 mb-[32px]', {
        'bg-light-red dark:bg-dark-red': error,
        'bg-light-blue dark:bg-light-green': success,
      })}
    >
      <div className="flex flex-wrap md:flex-row md:flex-nowrap  md:justify-between md:items-center">
        <div
          className={cx('left grow  w-[90%] md:w-[25%]  order-1 md:order-1', { 'mb-4 md:mb-10 xl:mb-0': isOpen })}
        >
          <div className=" md:max-w-[370px]">
            <h2 className="text-black-400 text-2xl font-bold mb-4 dark:text-white mb-0">
              Not available for SALE now
            </h2>
            {isOpen && (
              <>
                <p className="text-light-gray-400 leading-6 mb-4 dark:text-light-gray">
                  This NFT belongs to you, if you want to make it eligible for selling please turn
                  on this switcher
                </p>
                <ToggleSwitch
                  onChange={handleChange}
                  isChecked={!!currentFakeNft?.status ?? false}
                />
                <p className="text-[13px] text-light-gray-400 dark:text-light-gray">
                  Or you can adjust it later in your wallet
                </p>
              </>
            )}
          </div>
        </div>
        {error && (
          <div className="order-3 rounded-lg md:order-2 right bg-white w-full md:w-[40%] lg:w-[35%] py-4 px-4 lg:px-7 xl:mr-[66px] dark:border dark:border-white dark:bg-transparent">
            <h4 className="text-xl text-black-400 mb-0 dark:text-white">
              You have
              <span className="fomt-semibold text-red-400"> 5 </span>
              bids for this NFT
            </h4>
            {isOpen && (
              <>
                <h4 className="text-xl text-black-400 mb-6 pt-2 md:mb-11 dark:text-white">
                  The highest bid is
                  <span className="font-semibold text-400"> 245 </span>
                  ADA
                  <span className="ml-2 text-light-gray-400 dark:text-light-gray text-[16px]">
                    ($284.17)
                  </span>
                </h4>

                <div className="flex flex-col md:flex-row justify-between items-center">
                  <Button color="primary" className="px-8 w-fit md:auto">
                    Sell for 245 ADA
                  </Button>

                  <Button
                    color="default"
                    className="btn-light h-5 border-none hover:bg-transparent hover:text-primary dark:text-white dark:hover:bg-transparent dark:hover:text-white p-0"
                    style={{ padding: 0 }}
                  >
                    See all propositions
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
        <button type="button" className={cx('order-2 w-auto h-auto flex items-center justify-center', { 'self-start justify-end': isOpen })} onClick={handleToggle}>
          <Icon name={`chevron-${isOpen ? 'up' : 'down'}`} className="stroke-current dark:text-white ml-2" />
        </button>
      </div>
    </div>
  );
}

export default NftAvailability;

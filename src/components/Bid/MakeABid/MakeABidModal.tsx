import React, { useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
import BidSuccess from './BidSuccess';
import BidContent from './BidContent';

export default function MakeABidModal() {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Modal>
      {(setIsOpen) => ({
        content: isSuccess ? (
          <BidSuccess setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ) : (
          <BidContent setIsSuccess={setIsSuccess} setIsOpen={setIsOpen} />
        ),
        button: (
          <Button
            color="primary"
            className="py-2 px-12 text-[16px] h-[64px] md:h-full"
            onClick={() => setIsOpen(true)}
          >
            Make a Bid
          </Button>
        ),
      })}
    </Modal>
  );
}

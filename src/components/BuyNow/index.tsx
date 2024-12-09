import React from 'react';
import Button from 'components/Button';
import Modal from 'components/Modal';
import ModalContent from './ModalContent';

export default function Index() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <ModalContent setIsOpen={setIsOpen} />,
        button: (
          <Button
            color="primary"
            className="py-2 px-12 text-[16px] h-[64px] md:h-full"
            onClick={(event) => {
              event.preventDefault();
              return setIsOpen(true);
            }}
          >
            Buy Now
          </Button>
        ),
      })}
    </Modal>
  );
}

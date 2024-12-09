import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';
import WalletContent from './WalletContent';

export default function ConnectWallet() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <WalletContent setIsOpen={setIsOpen} />,
        button: (
          <Button className="px-8 py-2.5 whitespace-nowrap" color="primary" onClick={() => setIsOpen(true)}>
            Connect Wallet
          </Button>
        ),
      })}
    </Modal>
  );
}

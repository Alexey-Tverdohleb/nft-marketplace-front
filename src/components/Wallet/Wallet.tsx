import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import ConnectWallet from './ConnectWallet';
import WalletDropdown from './WalletDropdown';

function Wallet() {
  // dummy variable to check wallet connected or not
  const { walletConnected } = useSelector((state: RootState) => state.wallet);

  return (
    <div>
      {walletConnected ? <WalletDropdown /> : <ConnectWallet />}
    </div>
  );
}

export default Wallet;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Topbar from 'components/Topbar/Topbar';
import { RootState } from '../store';
import AboutUs from './AboutUs';
import Home from './Home';
import Artists from './Artists';
import Explore from './Explore';
import ArtistProfile from './Artists/profile';
import Collections from './Collections';
import NFT from './NFT';
import HelpCenter from './HelpCenter';
import Preposition from './MyWallet/Propositions';
import Bids from './MyWallet/Bids';
import Search from './Search';
import ErrorPage from './ErrorPage';
import MyItems from './MyWallet/MyItems';
import WalletActivity from './MyWallet/Activity';
import Activity from './Activity';

function App() {
  const { darkMode } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(darkMode ? 'light' : 'dark');
    root.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen dark:bg-black-900 bg-white dark:text-[#E5E5E5]">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/artist-profile/:id" element={<ArtistProfile />} />
          <Route path="/collection/:id" element={<Collections />} />
          <Route path="/nft/:id" element={<NFT />} />
          <Route path="/help-center" element={<HelpCenter />} />

          <Route path="/wallet">
            <Route path="my-items" element={<MyItems />} />
            <Route path="activity" element={<WalletActivity />} />
            <Route path="propositions" element={<Preposition />} />
            <Route path="bids" element={<Bids />} />
          </Route>

          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

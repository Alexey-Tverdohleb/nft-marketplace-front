import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import FeatureHeaders from './FeatureHeaders';

function SellSection() {
  return (
    <section className="h-[590px] md:h-[750px] lg:h-[590px] flex flex-col lg:flex-row items-center justify-between mb-28 md:mb-40 lg:mb-28 mt-[50px]">
      <div className="max-w-[519px] lg:max-w-[400px] xl:max-w-[519px] flex-col">
        <p className="text-[38px] lg:text-[2.5rem] xl:text-[3rem] mb-8 text-center lg:text-left">
          Explore, collect, and sell extraordinary NFTs
        </p>
        <Link to="/explore?tab=nft">
          <Button className="w-full md:w-fill px-12 py-3 text-lg h-auto" color="primary">
            Explore NFTs
          </Button>
        </Link>
      </div>

      <FeatureHeaders />
    </section>
  );
}

export default SellSection;

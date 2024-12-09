import React from 'react';
import LoadMoreButton from '../Button/LoadMoreButton';
import NFTCollections from './NFTCollections';

function ExploreList() {
  return (
    <section className="artists-list  lg:p-0">
      <NFTCollections withMenu withSort withFilter title="Categories" />
    </section>
  );
}

export default ExploreList;

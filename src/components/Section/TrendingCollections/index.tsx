import React from 'react';
import LinkWithIcon from 'components/LinkWithIcon';
import CategoriesMenu from 'components/Categories/Categrories';
import SectionTitle from 'components/Section/Title';

import CollectionsList from './CollectionsList';

type Props = {
  title?: string;
  className?: string;
};

function TrendingCollections({
  title = 'Trending Collections',
  className,
}: Props) {
  return (
    <section className={`explore-categories lg:overflow-hidden mb-24 lg:p-0 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <SectionTitle>{title}</SectionTitle>
        <LinkWithIcon href="/explore?tab=nft">
          Explore all
        </LinkWithIcon>
      </div>
      <CategoriesMenu />
      <CollectionsList />
    </section>
  );
}

export default TrendingCollections;

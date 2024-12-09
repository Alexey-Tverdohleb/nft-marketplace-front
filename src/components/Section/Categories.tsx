import React from 'react';
import { Link } from 'react-router-dom';

import CategoryCard from 'components/Card/CategoryCard';
import SectionTitle from './Title';

const CATEGORIES = ['Art', 'Collectibles', 'Music', 'Metaverse', 'Assets', 'Others'];

function ExploreCategories() {
  return (
    <section className="explore-categories mb-36  md:p-0">
      <SectionTitle className="mb-6">Explore categories</SectionTitle>
      <ul className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((item, index) => (
          <li key={item}>
            <Link to={`/explore?category=${item.toLowerCase()}#NFTs`}>
              <CategoryCard src={`${index + 1}.png`} label={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExploreCategories;

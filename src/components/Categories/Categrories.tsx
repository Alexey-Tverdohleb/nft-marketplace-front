import React from 'react';
import classNames from 'classnames';
import { useSearchParams, Link } from 'react-router-dom';

const TITLES = [
  { title: 'All', value: 'all' },
  { title: 'Art', value: 'art' },
  { title: 'Collectibles', value: 'collectibles' },
  { title: 'Music', value: 'music' },
  { title: 'Virtual Worlds', value: 'metaverse' },
  { title: 'Assets', value: 'assets' },
  { title: 'Others', value: 'others' },
];

function Categories() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('category') ?? 'all';

  return (
    <div className="flex items-center gap-x-2 overflow-x-auto hide-scrollbar">
      {TITLES.map(({ title, value }) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', value);

        return (
          <Link
            key={value}
            to={{ search: newSearchParams.toString() }}
            className={classNames(
              'flex items-center px-6 rounded-2xl h-[45px] border border-primary',
              activeTab === value
                ? 'btn-gradient text-white'
                : 'text-primary dark:text-white dark:border-white color-primary hover:bg-primary hover:text-white',
            )}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;

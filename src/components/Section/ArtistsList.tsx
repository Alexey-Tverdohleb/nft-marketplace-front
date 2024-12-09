import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultCard from 'components/Card/DefaultCard';
import SideStats from 'components/SideStats/SideStats';
import Dots from 'components/Loader/Dots';
import { FAKE_ARTISTS } from 'pages/Artists/fakeArtists';
import ExploreFilter from '../ArtistsFilter';
import SectionTitle from './Title';

function ArtistsList() {
  const [artists, setArtists] = useState(FAKE_ARTISTS);
  // TODO: will be replaced by RTK Query isLoading
  const [fetching, setFetching] = useState(false);
  const hasMore = artists.length < 48;

  const lastArtistsRef = useCallback((node) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFetching(true);
      }
    });
    if (node) {
      observer.observe(node);
    }
  }, []);

  useEffect(() => {
    if (fetching && hasMore) {
      setTimeout(() => {
        setArtists((prev) => [...prev, ...FAKE_ARTISTS]);
        setFetching(false);
      }, 500);
    } else if (fetching && !hasMore) {
      setFetching(false);
    }
  }, [fetching, hasMore]);

  return (
    <section className="artists-list">
      <div className="md:flex md:items-center md:justify-between">
        <SectionTitle>10,545 Artists</SectionTitle>
        <div className="flex items-center ">
          <ExploreFilter />
        </div>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {artists.map((item) => (
          <Link key={item.id} to={`/artist-profile/${item.id}`}>
            <DefaultCard key={item.name} className="lg:w-card-xl rounded-[32px] hover:scale-[101%] duration-300">
              <div className=" max-w-[331px] h-[532px] w-full text-center flex flex-col items-center mx-auto">
                <div className="flex-grow">
                  <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-8">
                    <img src={item.avatar} alt="avatar" />
                  </div>
                  <p className="text-[26px] font-semibold mt-4">{item.name}</p>
                  <p className="text-light-gray-400 dark:text-light-gray mt-4">
                    {item.short_description}
                  </p>
                  <SideStats floorPrice={item.floor_price} items={item.items} volume={item.collections} type="horizontal" />
                </div>
              </div>
            </DefaultCard>
          </Link>
        ))}
      </div>
      { fetching && (
        <div className="flex items-center justify-center w-full">
          <Dots />
        </div>
      )}
      <div className="bottom-list mb-[50px]" ref={lastArtistsRef} />
    </section>
  );
}

export default ArtistsList;

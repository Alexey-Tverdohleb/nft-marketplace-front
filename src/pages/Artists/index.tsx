import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay, EffectFade, Pagination, Navigation,
} from 'swiper';
import PageTitle from 'components/PageTitle';
import useScrollToTop from 'hooks/useScrollToTop';
import ArtistsList from 'components/Section/ArtistsList';
import SideStats from 'components/SideStats/SideStats';
import Card from 'components/Card/Card';
import SectionTitle from 'components/Section/Title';
import { FAKE_ARTISTS } from './fakeArtists';

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* eslint-enable */

function Artist() {
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  useScrollToTop();

  const onBeforeInit = (swiper: SwiperCore): void => {
    if (typeof swiper.params.navigation !== 'boolean') {
      const { navigation } = swiper.params;
      if (navigation) {
        navigation.prevEl = prevButtonRef.current;
        navigation.nextEl = nextButtonRef.current;
      }
    }
  };

  return (
    <div className="artists-page mt-12">
      <div className="container p-[16px] xl:p-0">
        <PageTitle className="mb-6">Artists</PageTitle>
        <div className="flex justify-between">
          <SectionTitle>Featured Artists</SectionTitle>
          <div>
            <button type="button" className="w-[48px]" ref={prevButtonRef}>&#x2190;</button>
            <button type="button" className="w-[48px]" ref={nextButtonRef}>&#x2192;</button>
          </div>
        </div>
        <Swiper
          className="inline-swiper flex-col-reverse mb-32"
          spaceBetween={50}
          effect="fade"
          loop
          onBeforeInit={onBeforeInit}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: nextButtonRef.current,
            nextEl: prevButtonRef.current,
          }}
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
        >
          { FAKE_ARTISTS.slice(7, 11).map((artist) => (
            <SwiperSlide className="mb-9" key={artist.name}>
              <div className="bg-light-red dark:text-white dark:bg-[#24284D] h-full md:h-[534px] py-10 pl-0 md:pl-10 flex flex-col md:flex-row items-center justify-between rounded-lg">
                <Link to={`/artist-profile/${artist.id}`}>
                  <div className="max-w-[331px] w-full h-full text-center flex flex-col">
                    <div className="flex-grow">
                      <div className="rounded-full overflow-hidden h-[197px] w-[197px] mx-auto mt-4">
                        <img src={artist.avatar} alt={artist.name} />
                      </div>
                      <p className="text-[26px] font-semibold mt-4">{artist.name}</p>
                      <p className="text-light-gray-400 dark:text-light-gray mt-4">
                        Nemo enim ipsam voluptatem quia voluptas&nbsp;
                        sit aspernatur aut odit aut fugit, sed quia.
                      </p>
                    </div>
                    <SideStats items={artist.items} floorPrice={artist.floor_price} volume={artist.collections} type="horizontal" />
                  </div>
                </Link>
                <div className="flex mt-14 md:mt-0">
                  <div className="scale-75 -mb-60 -mr-10 md:-mr-16">
                    <Card cover="/images/nft-cover/trending/1.png">
                      <div className="card-details md:px-8 md:py-4 px-3 py-2">
                        <p className="text-[8px] md:text-[16px]">NFT name</p>
                        <p className="text-[5px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                          Collection name could be so long and a little bit longer
                        </p>
                        <p className="text-red-400 dark:text-red-800 text-[6px] md:text-lg">
                          <span className="font-bold">120</span>
                          ADA
                        </p>
                      </div>
                    </Card>
                  </div>
                  <div className="relative z-40">
                    <Card cover="/images/nft-cover/trending/2.png">
                      <div className="card-details md:px-8 md:py-4 px-4 py-2">
                        <p className="text-[10px] md:text-lg">NFT name</p>
                        <p className="text-[7px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                          Collection name could be so long and a little bit longer
                        </p>
                        <p className="text-red-400 dark:text-red-800 text-[8px] md:text-lg">
                          <span className="font-bold">120</span>
                          ADA
                        </p>
                      </div>
                    </Card>
                  </div>
                  <div className="scale-75 -mb-60 -ml-10 md:-ml-16">
                    <Card cover="/images/nft-cover/trending/3.png">
                      <div className="card-details md:px-8 md:py-4 px-3 py-2">
                        <p className="text-[8px] md:text-[16px]">NFT name</p>
                        <p className="text-[5px] text-light-gray-400 dark:text-light-gray md:text-[16px]">
                          Collection name could be so long and a little bit longer
                        </p>
                        <p className="text-red-400 dark:text-red-800 text-[6px] md:text-lg">
                          <span className="font-bold">120</span>
                          ADA
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )) }
        </Swiper>

        <ArtistsList />
      </div>
    </div>
  );
}

export default Artist;

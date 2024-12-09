import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Autoplay } from 'swiper';
import { RootState } from 'store';
import NftCard from 'components/NftCard';
import SectionTitle from 'components/Section/Title';
import './HideScrollbars.sass';

/* eslint-disable import/no-unresolved */
import 'swiper/css';
/* eslint-enable */

interface Props {
  title?: string
}

function NFTListWithSwiper({ title = 'Trending NFTs' }: Props) {
  const { fakeNftList } = useSelector((state: RootState) => state.fakeNft);

  return (
    <section className="mb-28">
      <SectionTitle>{title}</SectionTitle>
      <Swiper
        className="nft-list-swiper mt-8"
        spaceBetween={24}
        slidesPerView={4}
        speed={5000}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: -10,
          disableOnInteraction: false,
        }}
      >
        {fakeNftList.map((card) => (
          <SwiperSlide key={card.id}>
            <NftCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NFTListWithSwiper;

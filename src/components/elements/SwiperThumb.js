import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper';
import Image from 'next/image';
SwiperCore.use([Navigation, Thumbs, Pagination]);

export default function SwiperThumb({ featureImg, gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={5}
        navigation={true}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="md:h-96"
      >
        {gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              layout="fill"
              src={item.url}
              className="object-cover w-full"
              alt={item.filename}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="md:h-20 mt-1"
      >
        {gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              layout="fill"
              src={item.url}
              className="object-cover w-full"
              alt={item.filename}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

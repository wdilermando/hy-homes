import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper';
SwiperCore.use([Navigation, Thumbs, Pagination]);

export default function SwiperThumb({ data }) {
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src="https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg"
              className="object-cover w-full"
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
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src="https://hy4u-server.s3.amazonaws.com/content/uploads/2020/07/13132405/hy-beach-flats-recife-030.jpg"
              className="object-cover w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

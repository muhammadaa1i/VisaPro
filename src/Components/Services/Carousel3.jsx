import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel3.css';
import x1 from '../images/x1.jpg'
import x2 from '../images/x2.jpg'
import x3 from '../images/x3.jpg'
import x4 from '../images/x4.jpg'
import x5 from '../images/x5.jpg'
import x6 from '../images/x6.jpg'

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel3() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[1296px] w-full h-[90vh] ' src={x6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel2.css';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import s4 from '../images/s4.jpg'
import s5 from '../images/s5.jpg'
import s6 from '../images/s6.jpg'
import s7 from '../images/s7.jpg'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }}
        className="mySwiper2 max-w-[1300px] w-full h-auto m-auto flex flex-row gap-[50px] ">

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 ml-[10px] max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8 ">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s1} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img w-full min-h-[220px] h-full rounded-lg" src={s2} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s3} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s4} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s5} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s6} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-[250px] h-[300px] flex justify-center items-center pb-20 pt-4 max-p470:w-[200px] max-p470:h-[250px] max-p470:mt-8">
            <img className="card-img min-h-[220px] h-full rounded-lg" src={s7} />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

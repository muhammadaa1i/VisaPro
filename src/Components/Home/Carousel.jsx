import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function Carousel() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage)
    }

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-full p-0 " slidesPerView={1} spaceBetween={0} centeredSlides={true} style={{ width: '100%', height: '100%' }} >

                <SwiperSlide>
                    <div className='swp1 w-full h-full border-2 border-red-800 flex justify-center items-center p-0 max-p992:max-h-[900px]  ' >
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans max-p992:max-w-[600px] max-p992:text-[30px] max-p768:text-[22px] max-p768:max-w-[500px] ">{t('Your comfort in travel is our concern.')}</h1>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='swp2 w-full h-full m-auto border-2 border-red-800 ml-[-5px] flex justify-center items-center p-0 max-p992:max-h-[900px]  '>
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans max-p992:max-w-[600px] max-p992:text-[30px] max-p768:text-[22px] max-p768:max-w-[500px] ">{t('Reliable visa processing for all countries.')}</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swp3 w-full h-full border-2 border-red-800 flex justify-center items-center p-0 max-p992:max-h-[900px]  '>
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans max-p992:max-w-[600px] max-p992:text-[30px] max-p768:text-[22px] max-p768:max-w-[500px] ">{t('The best tourist routes at affordable prices.')}</h1>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

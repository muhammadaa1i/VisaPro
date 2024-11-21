import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Carousel3 from './Carousel3'
import Accordion from "../Home/Accordion";

const Services = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    return (
        <div id='services' className="services m-auto max-w-[1920px] w-full h-auto border-2 border-green-600 pt-[100px] ">

            <div className="services-con m-auto max-w-[1300px] w-full h-auto border-2 border-teal-700 ">

                <div data-aos="fade-right">

                    <h3 className='text-[50px] text-black font-bold font-sans '>{t('Services')}</h3>

                    <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                </div>

                <div className="btn-con flex flex-row justify-between mt-[15px] ">
                    <Accordion/>
                </div>

            </div>

            <div className="work mt-20 max-w-[1920px] w-full h-auto border-2 border-yellow-400 bg-green-950 ">

                <div className="work-swp max-w-[1300px] w-full h-auto border-2 border-white m-auto ">

                    <div data-aos='fade-right' className='aos-init aos-animate'>

                        <h3 className='text-[50px] text-white font-bold font-sans '>{t('Travels')}</h3>

                        <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00] mb-[25px]"></span>

                    </div>

                    <div class="carousel aos-init aos-animate" data-aos="zoom-in">
                        <Carousel3 />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services
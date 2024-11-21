import { useEffect } from "react";
import o1 from '../images/o1.jpg'
import o2 from '../images/o2.jpeg'
import o3 from '../images/o3.jpg'
import o4 from '../images/o4.jpg'
import o5 from '../images/o5.jpg'
import o6 from '../images/o6.jpg'
import o7 from '../images/o7.jpg'
import o8 from '../images/o8.jpg'
import o9 from '../images/o9.jpg'
import e1 from '../images/e1.png'
import e2 from '../images/e2.png'
import e3 from '../images/e3.jpg'
import e4 from '../images/e4.jpg'
import e5 from '../images/e5.jpg'
import e6 from '../images/e6.png'
import e7 from '../images/e7.jpg'
import e8 from '../images/e8.jpg'
import e9 from '../images/e9.png'
import { useTranslation } from "react-i18next";

const Countries = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    return (
        <div id='countries' className="countries m-auto max-w-[1920px] w-full h-auto border-2 border-fuchsia-600 pt-[100px] ">

            <div className='coutries-con m-auto max-w-[1300px] w-full h-auto px-4 '>

                <div data-aos="fade-right">

                    <h3 className='text-[50px] font-sans font-bold text-black  '>{t('Countries')}</h3>

                    <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                </div>

                <div className='countries-places max-w-[1300px] w-full h-auto border-2 border-fuchsia-800 mt-10 flex flex-wrap gap-[30px] justify-center justify-between max-middle:justify-evenly '>

                    <div data-aos="zoom-in" className="countries-card1 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o1} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('shengen')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e1} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div data-aos="zoom-in" className="countries-card2 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o2} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('canada')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e2} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div data-aos="zoom-in" className="countries-card3 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o3} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('usa')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e3} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div data-aos="zoom-in" className="countries-card4 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o4} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('uk')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e4} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div data-aos="zoom-in" className="countries-card5 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o5} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('ausrtalia')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e5} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div data-aos="zoom-in" className="countries-card6 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o6} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('new zealand')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e6} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div className="countries-card7 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o7} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('japan')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e7} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div className="countries-card8 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o8} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('korea')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e8} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                    <div className="countries-card9 max-w-[350px] w-full h-auto flex flex-col ">
                        <img className='object-cover h-full rounded-t-3xl ' src={o9} />
                        <div className="relative w-full shadow-md flex flex-row items-center ">
                            <h3 className='relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]'>{t('latin america')}</h3>
                            <img className='max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90 ' src={e9} />
                        </div>
                        <span class="max-w-[350px] bg-[#f00] w-full h-1"></span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Countries
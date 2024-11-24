import Carousel2 from './Carousel2'
import { useTranslation } from "react-i18next";
import './About.css'
import r2 from '../images/r2.png'

const About = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    return (
        <div id='populars' className='poulars m-auto'>

            <div className="popular-in max-w-[1300px] w-full h-auto m-auto ">

                <div className='max-w-[210px] ml-[60px] w-full h-auto flex flex-col justify-center items-center max-p992:m-auto'>

                    <h3 className='text-[30px] p992:text-[50px] mx-auto text-center p992:text-left p992:mx-[0px] font-bold p992:mt-[50px]'>
                        {t('Populars')}

                        <div class="animate-linear-1 block w-[48px] h-[5px] bg-[#f00] max-p992:m-auto "></div>

                    </h3>

                </div>

                <div className='carousel2 container'>
                    <Carousel2 />
                </div>

            </div>

            <div id='about' className="about max-w-[1920px] w-full h-auto mt-[70px] px-[15px] border-2 border-y-red-600">

                <div className="about-card m-auto max-w-[1270px] w-full h-auto flex flex-row justify-between flex-wrap gap-[10px] p1320:gap-5 border-2 border-gray-900 ">

                    <div className='flex flex-col justify-center '>

                        <span class="block max-w-[508px] w-full h-[2px] bg-[#f00] "></span>

                        <h3 className='text-[50px] font-sans font-bold mt-[50px] '>{t('About')}</h3>

                        <span class="animate-linear-1 block w-[150px] h-[5px] bg-[#f00]"></span>

                        <h5 className='max-w-[570px] w-full text-[18px] font-medium text-black mt-[30px] font-sans '>
                            {t('EASY VISA CONSULTING is a rapidly growing company specializing in visa support for travelers. We ensure that your trips are comfortable and worry-free.')}
                            <br />
                            <br />
                            {t('EASY VISA CONSULTING provides visa services for leisure and business trips to the Schengen Area, Canada, the USA, the UK, Japan, and Korea. Our team of experienced professionals ensures a high level of service, allowing you to focus on your travel plans.')}
                            <br />
                            <br />
                            {t('We are committed to making the visa application process simple and understandable for clients from Uzbekistan, enabling them to easily and quickly access the best travel destinations in the world.')}
                        </h5>

                        <span class="block max-w-[508px] w-full h-[2px] bg-[#f00] mt-[60px] "></span>

                    </div>

                    <div className='about-img flex items-end '>
                        <img className='max-w-[250px] w-full h-auto ' src={r2} />
                    </div>

                </div>

            </div>



        </div>
    )
}

export default About
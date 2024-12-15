import Carousel2 from './Carousel2'
import { useTranslation } from "react-i18next"
import './About.css'

const About = () => {
    const { t, i18n } = useTranslation()
    const languages = localStorage.getItem('i18nextLng')

    return (
        <div id='populars' className='poulars m-auto'>

            <div className="popular-in max-w-[1300px] w-full h-auto m-auto max-p992:mt-10 pb-8">

                <div className='max-w-[210px] ml-[60px] w-full h-auto flex flex-col justify-center items-center max-p992:m-auto max-p992:my-auto'>

                    <h3 className='text-[30px] p992:text-[50px] mx-auto text-center p992:text-left p992:mx-[0px] font-bold p992:mt-[50px]'>
                        {t('Populars')}

                        <div class="animate-linear-1 block w-[48px] h-[5px] bg-[#f00] max-p992:m-auto max-p456:hidden "></div>

                    </h3>

                </div>

                <div className='carousel2 container m-auto '>
                    <Carousel2 />
                </div>

            </div>

            <div id='about' className="about w-full h-auto mt-[70px] px-[15px] pt-24">

                <div className="about-card m-auto max-w-[1270px] w-full h-auto flex flex-row justify-between gap-[10px] max-p992:flex-col ">

                    <div className='flex flex-col justify-center'>

                        <span class="block w-[100%] max-p480:w-[60%] mx-auto max-p992:mx-[0px] max-p1200:w-[40%] max-p1200:ml-[0px] h-[2px] bg-[#f00]  "></span>

                        <h3 className='text-[30px] p992:text-[50px] mx-auto text-center p992:text-left p992:mx-[0px] font-bold p992:mt-[20px] '>{t('About')}</h3>

                        <span class="animate-linear-1 block w-[48px] h-[5px] bg-[#f00] max-p992:mx-auto max-p456:hidden"></span>

                        <h5 className='max-w-[570px] w-full text-[18px] font-medium text-black mt-[30px] font-sans max-p992:m-auto max-p992:max-w-[650px] '>
                            {t('EASY VISA CONSULTING is a rapidly growing company specializing in visa support for travelers. We ensure that your trips are comfortable and worry-free.')}
                            <br />
                            <br />
                            {t('EASY VISA CONSULTING provides visa services for leisure and business trips to the Schengen Area, Canada, the USA, the UK, Japan, and Korea. Our team of experienced professionals ensures a high level of service, allowing you to focus on your travel plans.')}
                            <br />
                            <br />
                            {t('We are committed to making the visa application process simple and understandable for clients from Uzbekistan, enabling them to easily and quickly access the best travel destinations in the world.')}
                        </h5>

                        <span class="block w-[100%] max-p480:w-[60%] mx-auto max-p992:mx-[0px] max-p1200:ml-[0px] max-p1200:w-[40%] max-p1200:pl-[0px] h-[2px] bg-[#f00] mt-[30px] max-p1200:mt-[-30px] "></span>

                    </div>

                    <div className='about-img flex items-end '></div>

                </div>

            </div>

        </div>
    )
}

export default About
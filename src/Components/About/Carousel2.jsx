import React from 'react'
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
import s3 from '../images/s3.jpg'
import s4 from '../images/s4.jpg'
import s5 from '../images/s5.jpg'
import s6 from '../images/s6.jpg'
import s7 from '../images/s7.jpg'
import Slider from "react-slick"
import { useTranslation } from 'react-i18next'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow:1,
        slidesToScroll:1
      }
    }
  ]
}

const images = [s1, s2, s3, s4, s5, s6, s7]

export default function Carousel2() {
  const { t } = useTranslation()
  const languages = localStorage.getItem('i18nextLng')

  const text = [
    t('Sharm El Sheikh'),
    t('Dubai'),
    t('Turkey'),
    t('Thailand'),
    t('Malaysia'),
    t('Singapore'),
    t('Indonesia')
  ]

  return (
    <div className="slider-container mx-auto max-w-[1200px] overflow-hidden">
      <Slider
        {...settings}>
        {images.map((image, index) => (
          <div key={index} className='slide mt-6 ml-10 text-center  max-p830:max-w-[750px] max-p470:max-w-[400px]'>
            <img src={image} alt={`Slide ${index + 1}`} className='w-[350px] h-[300px] rounded-lg mx-auto mx-2 max-p830:mx-auto max-p470:mx-[-30px] max-p456:max-w-[300px] max-p456:max-h-[250px] max-p456:mx-[0px] max-p360:max-w-[250px] max-p360:mx-[30px]' />
            <h2 className='w-[350px] text-3xl font-semibold mx-auto mx-2 max-p830:mx-auto max-p470:mx-[-30px]'>{text[index]}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}

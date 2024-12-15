import React from "react"
import Slider from "react-slick"
import x1 from '../images/x1.jpg'
import x2 from '../images/x2.jpg'
import x3 from '../images/x3.jpg'
import x4 from '../images/x4.jpg'
import x5 from '../images/x5.jpg'
import x6 from '../images/x6.jpg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  lazyLoad: "ondemand",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function Carousel3() {
  return (
    <Slider {...settings}>
      {[x1, x2, x3, x4, x5, x6].map((image, index) => (
        <div key={index} className="slide max-p1320:px-20 max-p1160:px-4 max-p992:mt-3">
          <div className="flex justify-center items-center h-[800px] max-p1320:mx-auto max-p1320:w-[1000px] max-p1320:h-[700px] max-p1024:w-[800px] max-p1024:h-[600px] max-p830:w-[600px] max-p830:h-[400px] max-p640:w-[500px] max-p560:w-[400px] max-p560:h-[300px] max-p456:max-w-[350px] max-p456:max-h-[250px] max-p456:px-3 max-p360:px-0 max-p360:max-w-[250px] max-p360:max-h-[200px]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="m-auto w-full h-[130%] rounded-lg"
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}

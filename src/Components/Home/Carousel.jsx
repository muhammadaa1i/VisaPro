import { useState } from "react"
import { useTranslation } from "react-i18next"
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Carousel() {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    const slides = [
        {
            id: 0,
            image: c1,
            text: t("Your comfort in travel is our concern."),
        },
        {
            id: 1,
            image: c2,
            text: t("Reliable visa processing for all countries."),
        },
        {
            id: 2,
            image: c3,
            text: t("The best tourist routes at affordable prices."),
        },
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX - endX > 50) {
            handleNext();
        } else if (endX - startX > 50) {
            handlePrev();
        }
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    }

    return (
        <div className="relative w-full h-[110vh] overflow-hidden max-p992:max-h-[950px] max-p768:max-h-[750px] max-p470:max-h-[470px]">
            <div
                className="w-full h-[110vh] flex transition-transform duration-500 ease-in-out "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full h-[110vh] flex-shrink-0 bg-cover bg-center flex justify-center items-center max-p992:max-h-[950px] max-p768:max-h-[750px] max-p470:max-h-[470px] "
                        style={{ backgroundImage: `url(${slide.image || <Skeleton/>})` }}
                    >
                        <h1 className="text-white  bg-black uppercase bg-opacity-50 px-4 py-2 rounded-2xl text-[14px] p768:text-[22px] max-w-[300px] p768:max-w-[500px] p992:text-[48px] p992:max-w-[900px] w-full font-bold text-center max-p992:my-auto">
                            {slide.text}
                        </h1>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${
                            currentSlide === index
                                ? "bg-green-500"
                                : "bg-gray-400"
                        }`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

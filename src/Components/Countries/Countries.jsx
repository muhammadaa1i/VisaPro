import React from 'react';
import { useTranslation } from "react-i18next";

import o1 from '../images/o1.jpg';
import o2 from '../images/o2.jpeg';
import o3 from '../images/o3.jpg';
import o4 from '../images/o4.jpg';
import o5 from '../images/o5.jpg';
import o6 from '../images/o6.jpg';
import o7 from '../images/o7.jpg';
import o8 from '../images/o8.jpg';
import o9 from '../images/o9.jpg';
import e1 from '../images/e1.png';
import e2 from '../images/e2.png';
import e3 from '../images/e3.jpg';
import e4 from '../images/e4.jpg';
import e5 from '../images/e5.jpg';
import e6 from '../images/e6.png';
import e7 from '../images/e7.jpg';
import e8 from '../images/e8.jpg';
import e9 from '../images/e9.png';

const countryData = [
    { name: 'shengen', image: o1, flag: e1 },
    { name: 'canada', image: o2, flag: e2 },
    { name: 'usa', image: o3, flag: e3 },
    { name: 'uk', image: o4, flag: e4 },
    { name: 'ausrtalia', image: o5, flag: e5 },
    { name: 'new zealand', image: o6, flag: e6 },
    { name: 'japan', image: o7, flag: e7 },
    { name: 'korea', image: o8, flag: e8 },
    { name: 'latin america', image: o9, flag: e9 },
];

const Countries = () => {
    const { t } = useTranslation();

    return (
        <div id="countries" className="countries m-auto max-w-[1920px] w-full h-auto pt-[100px]">
            <div className="coutries-con m-auto max-w-[1300px] w-full h-auto px-4">
                <div data-aos="fade-right">
                    <h3 className="text-[50px] font-sans font-bold text-black max-p992:text-center max-p992:text-[30px]">
                        {t('Countries')}
                    </h3>
                    <span className="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00] max-p992:m-auto max-p456:hidden"></span>
                </div>

                <div className="countries-places max-w-[1300px] w-full h-auto mt-10 flex flex-wrap gap-[30px] justify-center max-middle:justify-evenly max-p1160:justify-center">
                    {countryData.map((country, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="countries-card max-w-[350px] w-full h-auto flex flex-col"
                        >
                            <img
                                className="object-cover h-full rounded-t-3xl"
                                src={country.image}
                                alt={country.name}
                            />
                            <div className="relative w-full shadow-md flex flex-row items-center">
                                <h3 className="relative text-[22px] font-sans uppercase text-black max-w-[300px] w-full text-center font-bold my-[30px]">
                                    {t(country.name)}
                                </h3>
                                <img
                                    loading='lazy'
                                    className="max-w-[75px] w-full max-h-[50px] h-full rounded-2xl opacity-90"
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                />
                            </div>
                            <span className="max-w-[350px] bg-[#f00] w-full h-1"></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Countries;

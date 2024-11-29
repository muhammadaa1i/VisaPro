import React, { useEffect, Suspense } from 'react'
import './Home.css'
import Carousel from './Carousel'
import { useTranslation } from 'react-i18next'
import Header from '../Header/Header'
import About from '../About/About'
import Countries from '../Countries/Countries'
import Works from '../Works/Works'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

const Home = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }

    return (
        <div className='site bg-white'>
            <Header />
            <Carousel />
            <About />
            <Countries />
            <Works />
            <Services />
            <Contact />
        </div>
    )
}

export default Home
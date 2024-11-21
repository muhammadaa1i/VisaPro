import { useState } from "react"
import r2 from "../images/r2.png"
import { useTranslation } from "react-i18next"
import './Header.css'

const Header = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');
    console.log(i18n, "i18nnn")
    const handleChange = (event) => {
        console.log(event.target.value)
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }
    const [btn, setBtn] = useState(false)
    const handleLinkClick = (event, target) => {
        setBtn(false)
        setTimeout(() => {
            window.location.hash = target
        }, 100)
    }

    return (
        <div className="relative bg-white ">

            <nav className='navbar fixed w-[100vw] bg-white h-20 flex justify-between items-center px-4 py-2 z-50 shadow-md'>

                <a className='nav-href'>
                    <img className='nav-img w-[100px]' src={r2} />
                </a>

                <ul className="menu h-auto flex uppercase font-bold text-[14px] gap-8 ml-auto mr-[30px] font-sans max-p992:hidden ">

                    <li className='nav-link relative cursor-pointer '>
                        <a href='#about' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('about')}</a>
                    </li>

                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#countries' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('countries')}</a>
                    </li>

                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#works' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('our works')}</a>
                    </li>

                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#services' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('services')}</a>
                    </li>

                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#contact' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('contact')}</a>
                    </li>

                    <select
                        value={languages} id='lng' onChange={handleChange}
                        className='outline-none text-white bg-black '>
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>

                </ul>

            </nav>

            <div class="navbar-mobile hidden max-p992:block ">

                <div className="flex flex-row max-w-[170px] w-full h-auto justify-between items-center absolute top-5 right-2 ">

                    <a href class="text-black font-sans text-[16px]">+99899 712 66 66</a>

                    <button onClick={() => setBtn(!btn)} class="burger-btn z-[60] top-[30px] right-[20px] flex flex-col gap-1 ">
                        <div className="w-7 h-1 bg-red-600 "></div>
                        <div className="w-7 h-1 bg-red-600 "></div>
                        <div className="w-7 h-1 bg-red-600 "></div>
                    </button>

                </div>

                {btn && <div className="mobile-menu z-10 fixed left-0 w-full h-[100dvb] bg-white flex flex-col items-center shadow-md p-[20px] top-0 opacity-100 ">

                    {btn === true && <button className="text-red-600 font-bold text-3xl absolute top-6 right-5" onClick={() => setBtn(!btn)}>X</button>}

                    <div class="mobile-nav w-full h-full flex flex-col items-center justify-center">

                        <ul class="flex flex-col items-center justify-center mt-[50px] gap-8 text-black text-[24px] uppercase font-bold">

                            <li>
                                <a onClick={() => handleLinkClick('#about')} aria-current="page" href="#about" class="router-link-active router-link-exact-active">{t('about')}</a>
                            </li>

                            <li>
                                <a onClick={() => handleLinkClick('#about')} aria-current="page" href="#country" class="router-link-active router-link-exact-active">{t('countries')}</a>
                            </li>

                            <li>
                                <a onClick={() => handleLinkClick('#about')} aria-current="page" href="#sevice" class="router-link-active router-link-exact-active">{t("services")}</a>
                            </li>

                            <li>
                                <a onClick={() => handleLinkClick('#about')} aria-current="page" href="#works" class="router-link-active router-link-exact-active">{t('our works')}</a>
                            </li>

                            <li>
                                <a onClick={() => handleLinkClick('#about')} aria-current="page" href="#contact" class="router-link-active router-link-exact-active">{t('contact')}</a>
                            </li>

                        </ul>

                        <div class="selected__custom flex items-center mt-4">

                            <select class="outline-none text-white bg-black" value={languages} onChange={handleChange} id='lng'>
                                <option value="en">EN</option>
                                <option value="ru">RU</option>
                                <option value="uz">UZ</option>
                            </select>

                        </div>

                    </div>

                </div>
                }

            </div>

        </div>
    )
}
export default Header
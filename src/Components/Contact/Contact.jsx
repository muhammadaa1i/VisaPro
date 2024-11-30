import { useTranslation } from "react-i18next";
import mus from '../images/mus.jpg'
import axios from "axios";
import { positions } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    const Sendmessage = (event) => {
        event.preventDefault();
        const token = '7876000404:AAHlUz6f0wkrrHIRnwXRQ9AQkqPuC6QrTm0';
        const chat_id = 1337108345;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const telephone = document.getElementById("telephone").value;
        const comment = document.getElementById("comment").value;
        const messageContent = `Ismi: ${name} \nFamiliyasi: ${surname} \nTelefoni: ${telephone} \nFikri: ${comment}`

        axios.post(url, {
            chat_id: chat_id,
            text: messageContent,
        })
            .then(() => {
                toast.success('Message successfully sent!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'success'
                })
                event.target.reset()
            })
            .catch((error) => {
                console.error("Error!", error);
                toast.error('Error sending message!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error'
                })
            })
    }

    const handlePhoneInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '')
    };

    return (
        <div id='contact' className="contact max-w-[1920px] w-full h-auto bg-black pt-20 m-auto ">

            <div className="contact-con max-w-[1300px] w-full h-auto m-auto flex flex-row px-[10px] justify-between pb-8 max-p1160:flex-wrap max-p640:flex-col ">

                <div className="contact-left text-left text-white mr-3 max-p1160:ml-40 max-p992:ml-12 max-p830:ml-3 max-p640:m-auto ">

                    <div className='aos-init aos-animate' data-aos='fade-ce'>

                        <h3 className='font-bold font-sans text-[50px] '>{t('Contact')}</h3>

                        <span className="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                        <h5 className='text-[18px] font-sans mt-[35px] '>{t('For contact:')}</h5>

                    </div>

                    <ul className='mt-[15px]'>

                        <li className="txt-n leading-tight aos-init aos-animate" data-aos="zoom-in">
                            <a href="tel:997126666">+998 99 712 66 66</a>
                        </li>

                        <li className="txt-n leading-tight aos-init aos-animate" data-aos="zoom-in">
                            <a href="tel:974839999">+998 97 483 99 99</a>
                        </li>

                    </ul>

                    <p className="font-bold mt-[35px] text-[18px] aos-init aos-animate" data-aos="zoom-in">{t('Social media')}</p>

                    <div className="browsers flex flex-col gap-4 mt-[15px] justify-center aos-init aos-animate" data-aos="fade-right">

                        <div className="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a className="rounded-lg flex gap-2 items-center transition-all" href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                                <i className="fa-brands fa-instagram text-red-800 text-[30px]"></i>
                                <p className="hover:text-[#D5192F]">
                                    easy.visa.uzb
                                </p>
                            </a>

                        </div>

                        <div className="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a className="rounded-lg flex gap-2 items-center transition-all" href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                                <i className="fa-brands fa-telegram text-red-800 text-[30px]"></i>
                            </a>

                            <div className='flex flex-col'>
                                <a className="hover:text-[#D5192F] rounded-lg block transition-all" href="https://t.me/Ataev_Bakhodir90">
                                    t.me/Ataev_Bakhodir90
                                </a>

                                <a className="hover:text-[#D5192F] rounded-lg block transition-all" href="https://t.me/sevaraataeva1986">
                                    t.me/sevaraataeva1986
                                </a>
                            </div>

                        </div>

                        <div className="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a className="rounded-lg flex gap-2 items-center transition-all" href="https://t.me/easyvizatourconsulting">
                                <i className="fa-solid fa-circle-plus text-red-800 text-[30px]"></i>
                                <p className="hover:text-[#D5192F]">
                                    Telegram
                                </p>
                            </a>

                        </div>

                        <div data-aos="zoom-in" className="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <i className="fa-solid fa-location-dot text-[40px] text-red-800 "></i>

                            <p>Tashkent, Mustaqillik 59.</p>

                        </div>

                    </div>

                </div>

                <form onSubmit={Sendmessage} id="myForm" className="contact-right max-w-[350px] w-full h-auto flex flex-col text-left gap-6 pb-10 max-p1160:mr-40 max-p992:mr-12 max-p830:mr-3 max-p640:m-auto max-p640:mt-6 max-p456:max-w-[300px] ">

                    <h3 className="text-[40px] font-bold text-white aos-init aos-animate max-p456:text-center " data-aos="zoom-in">{t('Submit a request')}</h3>

                    <input id='name' required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('Name')} type="text" data-aos="zoom-in"></input>

                    <input id="surname" required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('Surname')} type="text" data-aos="zoom-in"></input>

                    <input id="telephone" pattern="[0-9]*"
                        onInput={handlePhoneInput} required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('telephone')} type="tel" data-aos="zoom-in"></input>

                    <textarea id="comment" required class="user-text h-[175px] text-[#222221] bg-white py-[10px] pl-[20px] outline-none aos-init aos-animate" name="comment" cols="30" rows="10" placeholder={t("Comments")} data-aos="zoom-in"></textarea>

                    <button type="submit" class="bg-[#D5192F] rounded-lg py-[10px] text-white font-bold transition-all hover:bg-white hover:text-[#D5192F] mt-2">{t('Submit a request')}</button>

                </form>

                <div className="gmap-frame max-w-[500px] w-full max-h-[550px] h-full aos-init aos-animate max-middle:max-w-[350px] relative max-middle:max-h-[500px] max-p1160:m-auto max-p640:mx-5 max-p456:max-w-[300px] max-p456:m-auto " data-aos="zoom-in">
                    <iframe className="max-w-[500px] w-full h-[550px]  rounded-xl max-p640:h-[150px] max-p640:max-w-[350px] max-p640:m-auto " frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=500&amp;height=550&amp;hl=en&amp;q=%D1%83%D0%BB%20%D0%BC%D1%83%D1%81%D1%82%D0%B0%D0%BA%D0%B8%D0%BB%D0%BB%D0%B8%D0%BA,%2059+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>
                </div>
        <ToastContainer position="top-center" autoClose={3000}/>
            </div>

        </div>
    )
}

export default Contact
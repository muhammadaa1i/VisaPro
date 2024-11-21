import { useTranslation } from "react-i18next";
import mus from '../images/mus.jpg'
import axios from "axios";
import { positions } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

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

            <div className="contact-con max-w-[1920px] w-full h-auto m-auto border-2 border-red-800 flex flex-row px-[10px] justify-between flex-wrap ">

                <div className="contact-left text-left text-white ">

                    <div className='aos-init aos-animate' data-aos='fade-right'>

                        <h3 className='font-bold font-sans text-[50px] '>{t('Contact')}</h3>

                        <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                        <h5 className='text-[18px] font-sans mt-[35px] '>{t('For contact:')}</h5>

                    </div>

                    <ul className='mt-[15px]'>

                        <li class="txt-n leading-tight aos-init aos-animate" data-aos="fade-right">
                            <a href="tel:997126666">+998 99 712 66 66</a>
                        </li>

                        <li class="txt-n leading-tight aos-init aos-animate" data-aos="fade-right">
                            <a href="tel:974839999">+998 97 483 99 99</a>
                        </li>

                    </ul>

                    <p class="font-bold mt-[35px] text-[18px] aos-init aos-animate" data-aos="fade-right">{t('Social media')}</p>

                    <div class="browsers flex flex-col gap-4 mt-[15px] justify-center aos-init aos-animate" data-aos="fade-right">

                        <div class="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a class="rounded-lg flex gap-2 items-center transition-all" href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                                <i className="fa-brands fa-instagram text-red-800 text-[30px]"></i>
                                <p class="hover:text-[#D5192F]">
                                    easy.visa.uzb
                                </p>
                            </a>

                        </div>

                        <div class="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a class="rounded-lg flex gap-2 items-center transition-all" href="https://www.instagram.com/easy.visa.uzb/?igsh=aXI4bG9mMm5sczZ3&utm_source=qr">
                                <i className="fa-brands fa-telegram text-red-800 text-[30px]"></i>
                            </a>

                            <div className='flex flex-col'>
                                <a class="hover:text-[#D5192F] rounded-lg block transition-all" href="https://t.me/Ataev_Bakhodir90">
                                    t.me/Ataev_Bakhodir90
                                </a>

                                <a class="hover:text-[#D5192F] rounded-lg block transition-all" href="https://t.me/sevaraataeva1986">
                                    t.me/sevaraataeva1986
                                </a>
                            </div>

                        </div>

                        <div class="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <a class="rounded-lg flex gap-2 items-center transition-all" href="https://t.me/easyvizatourconsulting">
                                <i className="fa-solid fa-circle-plus text-red-800 text-[30px]"></i>
                                <p class="hover:text-[#D5192F]">
                                    Telegram
                                </p>
                            </a>

                        </div>

                        <div data-aos="fade-right" class="max-w-[280px] w-full h-auto flex flex-row items-center gap-2">

                            <i className="fa-solid fa-location-dot text-[40px] text-red-800 "></i>

                            <p>Tashkent, Mustaqillik 59.</p>

                        </div>

                    </div>

                </div>

                <div class="contact-map max-w-[450px] w-full h-auto  aos-init aos-animate max-middle:max-w-[350px] max-middle:max-h-[500px] " data-aos="zoom-in">

                    <img className='max-w-[450px] w-full max-h-[550px] h-full rounded-2xl ' src={mus} />

                </div>

                <form onSubmit={Sendmessage} id="myForm" className="contact-right max-w-[350px] w-full h-auto flex flex-col text-left gap-6 pb-10 ">

                    <h3 class="text-[40px] font-bold text-white aos-init aos-animate" data-aos="fade-left">{t('Submit a request')}</h3>

                    <input id='name' required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('Name')} type="text" data-aos="fade-left"></input>

                    <input id="surname" required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('Surname')} type="text" data-aos="fade-left"></input>

                    <input id="telephone" pattern="[0-9]*"
                    onInput={handlePhoneInput} required class="py-[10px] bg-white pl-[20px] text-[16px] outline-none text-[#222221] aos-init aos-animate" placeholder={t('telephone')} type="tel" data-aos="fade-left"></input>

                    <textarea id="comment" required class="user-text h-[175px] text-[#222221] bg-white py-[10px] pl-[20px] outline-none aos-init aos-animate" name="comment" cols="30" rows="10" placeholder={t("Comments")} data-aos="fade-left"></textarea>

                    <button type="submit" class="bg-[#D5192F] rounded-lg py-[10px] text-white font-bold transition-all hover:bg-white hover:text-[#D5192F] mt-2">{t('Submit a request')}</button>
                    <ToastContainer />

                </form>

            </div>

        </div>
    )
}

export default Contact
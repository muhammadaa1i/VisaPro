import { useEffect } from "react";
import r2 from '../images/r2.png'
import v1 from '../videos/v1.mp4'
import v2 from '../videos/v2.mp4'
import v3 from '../videos/v3.mp4'
import v4 from '../videos/v4.mp4'
import v5 from '../videos/v5.mp4'
import v6 from '../videos/v6.mp4'
import clock from '../images/clock.webp'
import { useTranslation } from "react-i18next";

const Works = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    return (
        <div id='works' className="works m-auto max-w-[1920px] w-full h-auto border-2 border-cyan-700 pt-[100px] ">

            <div className="works-con max-w-[1300px] w-full h-auto m-auto border-2 border-fuchsia-700 flex flex-col ">

                <div data-aos="fade-right" class="aos-init aos-animate">

                    <h3 className='text-[50px] font-sans text-black font-bold '>{t('Excursion')}</h3>

                    <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                </div>

                <div className="movie-cards max-w-[1300px] w-full h-auto p-4 flex flex-row justify-between flex-wrap ">

                    <div className="moviecard1 max-w-[300px] w-full h-auto p-1 bg-white mx-auto">
                        <div className="overplay relative">
                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />
                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v1}></video>
                        </div>
                    </div>

                    <div className="moviecard2 max-w-[300px] w-full h-auto p-1 bg-white mx-auto">
                        <div className="overplay relative">
                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />
                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v2}></video>
                        </div>
                    </div>

                    <div className="moviecard3 max-w-[300px] w-full h-auto p-1 bg-white mx-auto">
                        <div className="overplay relative">
                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />
                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v3}></video>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-right" class="aos-init aos-animate">

                    <h3 className='text-[50px] font-sans text-black font-bold mt-[50px] '>{t('Client Reviews')}</h3>

                    <span class="animate-linear-1 mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                </div>

                <div className="movie-cards2 max-w-[1300px] w-full h-auto p-4 flex flex-row justify-between flex-wrap ">

                    <div className="moviecard4 max-w-[300px] w-full h-auto p-1 bg-white mx-auto ">

                        <div className="overplay relative">

                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />

                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v4}></video>

                        </div>

                    </div>

                    <div className="moviecard5 max-w-[300px] w-full h-auto p-1 bg-white mx-auto">
                        <div className="overplay relative">
                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />
                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v5}></video>
                        </div>
                    </div>

                    <div className="moviecard6 max-w-[300px] w-full h-auto p-1 bg-white mx-auto">
                        <div className="overplay relative">
                            <img className='absolute max-w-[100px] w-full h-auto top-[-20px] left-[-25px] ' src={r2} />
                            <video controls className='max-w-[300px] w-full h-auto rounded-2xl shadow-lg mx-auto ' src={v6}></video>
                        </div>
                    </div>

                </div>

            </div>

            <div className="prioritet max-w-[1920px] w-full h-auto border-2 border-violet-800 pt-[70px] pb-[150px]  ">

                <div className="prioritet-con max-w-[1300px] w-full h-auto border-2 border-teal-500 m-auto flex flex-col px-[100px] ">

                    <div data-aos="fade-right" className='aos-init aos-animate'>

                        <h3 className='text-[50px] text-white mt-[50px] font-sans font-bold text-center '>{t('Priorities in Tourism and Visas')}</h3>

                        <span class="animate-linear-1 m-auto mt-[5px] block w-[48px] h-[5px] bg-[#f00]"></span>

                    </div>


                    <div data-aos="zoom in" className='aos-init aos-animate'>

                        <h5 className='text-[17px] text-white font-bold text-center mt-5 '>{t("We provide a high level of service and reliability in obtaining tourist visas. Our team has experience in the tourism industry and is ready to quickly resolve issues related to obtaining visas. We strive to make our clients' travels comfortable and carefree, providing support at every stage—from choosing a visa to obtaining documentation.")}</h5>

                    </div>

                    <div data-aos="zoom in" className='prioritet-con2 max-w-[1260px] w-full h-auto border-2 border-red-600 pt-20 flex flex-row justify-between aos-init aos-animate '>

                        <div className="pr-card1 max-w-[220px] w-full h-auto border-2 border-fuchsia-600 flex flex-col text-white gap-5 items-center ">
                            <img className='max-w-[135px] w-full max-h-[135px] h-full ' src={clock} />
                            <h2 className='text-[15px] font-bold '>{t('Saving Your Time')}</h2>
                        </div>

                        <div className="pr-card2 max-w-[220px] w-full h-auto border-2 border-fuchsia-600 flex flex-col text-white gap-5 items-center ">
                            <svg className="max-w-[135px] w-full max-h-[135px] h-full" viewBox="0 0 480 480.00056" xmlns="http://www.w3.org/2000/svg" data-v-d4f9204d>
                                <path fill="#FFFFFF" d="m472 288h-46.695312l-43.257813-14.398438-14.046875-35.136718v-26.464844c-.054688-18.300781-13.863281-33.632812-32.054688-35.597656 0-1.097656.054688-2.195313.054688-3.289063v-117.113281c0-3.535156-2.316406-6.648438-5.703125-7.664062l-160-48c-1.5-.449219-3.09375-.449219-4.59375 0l-160 48c-3.382813 1.015624-5.703125 4.128906-5.703125 7.664062v117.113281c0 3.710938.25 7.375.382812 11.0625.203126 5.402344.503907 10.769531.984376 16.105469.082031.910156.191406 1.765625.28125 2.664062 9.824218 101.574219 71.363281 190.894532 162.777343 236.253907 2.25 1.125 4.898438 1.125 7.152344 0 11.964844-6.007813 23.519531-12.8125 34.574219-20.367188 2.511718 3.460938 5.683594 6.386719 9.335937 8.609375-7.988281 9.527344-9.734375 22.816406-4.480469 34.085938 5.253907 11.265625 16.558594 18.46875 28.992188 18.472656h136c1.582031 0 3.125-.46875 4.441406-1.34375l45.957032-30.65625h45.601562c4.417969 0 8-3.582031 8-8v-144c0-4.417969-3.582031-8-8-8zm-173.144531-39.304688 9.328125 23.304688h-46.480469c16.988281-30.472656 26.011719-64.742188 26.242187-99.632812l32.054688-9.613282v10.359375c0 1.710938-.054688 3.414063-.085938 5.128907-14.296874 5.078124-23.867187 18.585937-23.914062 33.757812v21.832031c-.003906 5.09375.964844 10.136719 2.855469 14.863281zm-114.855469 55.304688c.007812 8.171875 3.160156 16.03125 8.800781 21.945312-2.96875 2.160157-5.878906 4.398438-8.945312 6.398438l-15.855469 10.144531-15.824219-10.167969c-35.472656-22.738281-62.445312-56.558593-76.726562-96.199218l196.320312-58.898438c-1.09375 33.566406-11 66.253906-28.722656 94.777344h-27.046875c-17.671875 0-32 14.328125-32 32zm-163.65625-82.101562c-.0625-.402344-.136719-.800782-.199219-1.1875l31.792969-9.511719c.941406 4.800781 2.085938 9.601562 3.367188 14.289062l-32.25 9.679688c-1.054688-4.589844-1.925782-8.96875-2.710938-13.269531zm-3.6875-32.136719 31.640625-9.496094c.222656 5.015625.589844 10 1.167969 14.941406l-31.570313 9.472657c-.078125-.71875-.140625-1.429688-.222656-2.152344-.40625-4.125-.777344-8.3125-1.015625-12.765625zm255.34375-93.3125-208 62.398437v-57.207031l104.273438-37.238281 103.726562 29.628906zm0 16.703125v15.296875l-206.910156 62.070312c-.503906-4.96875-.816406-9.972656-.945313-15.007812zm48 17.601562v15.292969l-32 9.601563v-15.296876zm0-16.707031-32 9.601563v-15.296876l32-9.597656zm-252.671875 92.503906 130.175781-39.046875 74.496094-22.351562v15.296875l-201.375 60.414062c-1.265625-4.71875-2.394531-9.480469-3.296875-14.3125zm-51.328125-144.597656 152-45.601563 152 45.601563v20.09375l-32 9.601563v-3.648438c0-3.570312-2.367188-6.707031-5.800781-7.6875l-112-32c-1.601563-.464844-3.316407-.414062-4.886719.152344l-112 40c-3.1875 1.136718-5.3125 4.152344-5.3125 7.535156v67.648438l-32 9.601562zm152 361.070313c-68.90625-35.394532-120.046875-97.789063-141.230469-172.304688l33.335938-10c15.382812 43.304688 44.726562 80.261719 83.414062 105.058594l20.152344 12.953125c2.636719 1.695312 6.019531 1.695312 8.65625 0l20.152344-12.953125.207031-.136719c-2.816406 13.273437 3.148438 26.863281 14.824219 33.777344-4.855469 5.757812-7.515625 13.050781-7.511719 20.582031.015625 1.113281.089844 2.222656.222656 3.328125-10.289062 7.277344-21.050781 13.859375-32.222656 19.695313zm205.601562 40.976562h-133.601562c-8.835938 0-16-7.164062-16-16-.015625-8.304688 6.386719-15.214844 14.671875-15.832031 4.300781-.445313 7.507813-4.160157 7.320313-8.480469-.167969-4.296875-3.699219-7.691406-8-7.6875h-5.992188c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16h9.25c4.832031 0 9.402344 2.136719 12.578125 5.796875l32 40.960938c5.382813 6.765625 4.539062 16.410156-2.082031 22.054688-1.457031 1.28125-3.46875 1.640625-5.207031 1.640625zM264.621094 428.898438c4.835938 0 9.484375-1.421875 13.597656-4.03125 5.921875-3.027344 12.019531-7.953125 17.113281-14.1875 5.257812-6.484375 8.648438-14.21875 10.503906-22.277344 2.578125-10.53125 2.664062-21.328125-2.859375-30.652344l10.378906-10.5c8.839843 8.121094 12.953125 19.207031 12.953125 30.707031 0 5.890625-.390625 11.765625-1.1875 17.078125-1.679688 10.660156-6.519531 20.304687-13.515625 29.515625-7.515625 10.191406-16.652344 17.964843-27.398437 24.398437-9.949219 6.0625-20.625 10.554688-31.847656 10.554688-15.007812 0-30.601562-6.6875-44.074219-17.433594 8.519531 2.652344 17.738281 4.679688 26.894531 4.679688zm25.660156-36.460938c0-18.578125-7.484375-34.507812-20.53125-45.882812-5.679688-4.84375-13.476562-8.117188-21.390625-10.296875l-.214844 25.539062c8.542968 2.738281 16.695312 7.277344 23.347656 13.703125 11.484375 10.578125 18.394531 25.707031 18.394531 42.15625 0 16.835938-7.257812 33.632812-19.507812 44.734375-7.53125 7.929688-16.882812 12.523438-27.328125 14.898438-.582031 0-1.164062-.019531-1.746094-.050781 1.441406-11.601562 8.15625-21.289062 18.074219-28.648438 4.84375-3.625 10.707031-6.949219 17.355469-9.019531 4.769531-1.578125 9.835938-3.21875 14.785156-4.570312 5.65625-1.648438 11.835938-2.429688 18.304688-3.054688zm0-13.160156c-.484375 1.640625-1.117188 3.324219-1.917969 5.152344-2.101562 4.554687-5.753906 9.097656-10.386719 11.53125-6.148438 3.40625-12.628906 5.953125-19.511719 7.949219-2.375 1.296875-4.542969 2.367188-6.707031 3.421875 0-1.085938 0-2.101562 0-3.207031 0-8.5625-3.40625-16.019531-8.578125-21.730469-8.492187-8.675781-20.324219-14.96875-33.0625-17.78125-5.0625-1.027344-10.429688-1.394531-15.753906-1.121094 6.78125-2.167969 12.632812-4.96875 18.648438-7.292968 3.84375-1.515625 7.949219-2.507812 12.476562-3.75 7.59375-1.984375 14.125-4.683594 20.660156-7.554687 6.492187-2.804687 12.355469-6.78125 17.535156-11.539062 6.480469-5.53125 11.890625-12.40625 15.703125-20.207031 4.5625-8.019531 7.859375-17.355469 10.71875-26.613281 2.015625-6.882812 4.21875-13.34375 6.738281-19.5625z" data-v-d4f9204d></path>
                            </svg>
                            <h2 className='text-[15px] font-bold '>{t('Reliability')}</h2>
                        </div>

                        <div className="pr-card3 max-w-[220px] w-full h-auto border-2 border-fuchsia-600 flex flex-col text-white gap-5 items-center ">
                            <svg className='max-w-[155px] w-full max-h-[135px] h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" /></svg>
                            <h2 className='text-[15px] font-bold '>{t('Support')}</h2>
                        </div>

                        <div className="pr-card4 max-w-[220px] w-full h-auto border-2 border-fuchsia-600 flex flex-col text-white gap-5 items-center ">
                            <svg className='max-w-[135px] w-full max-h-[135px] h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3l0 1.7c0 53-43 96-96 96s-96-43-96-96l0-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" /></svg>
                            <h2 className='text-[15px] font-bold '>{t("Convenience")}</h2>
                        </div>


                    </div>

                    <div className="pr-numbers max-w-[970px] w-full h-auto relative border-2 border-red-600 m-auto mt-[100px] rounded-3xl bg-pink-900 ">

                        <div data-aos="fade-up" className="aos-init aos-animate">

                            <h1 className='text-[50px] text-white font-bold text-center '>{t('We in Numbers')}</h1>

                            <span class="animate-linear-1 m-auto mt-[5px] block w-[48px] h-[5px] bg-[#fff]"></span>

                        </div>

                        <div className="nums flex flex-row max-w-[970px] w-full h-auto text-white border-2 border-white justify-between pb-5 ">

                            <div data-aos="zoom-in" className="num-card1 border-2 border-amber-500 gap-[20px] flex flex-col aos-init aos-animate ">
                                <h1 className='text-[100px] font-sans font-bold '>7320</h1>
                                <h5 className='text-center font-bold text-[16px] uppercase '>{t('Issued Visas')}</h5>
                            </div>

                            <div data-aos="zoom-in" className="num-card2 border-2 border-amber-500 gap-[20px] flex flex-col aos-init aos-animate ">
                                <h1 className='text-[100px] font-sans font-bold '>7257</h1>
                                <h5 className='text-center font-bold text-[16px] uppercase '>{t('Successful Trips')}</h5>
                            </div>

                            <div data-aos="zoom-in" className="num-card3 border-2 border-amber-500 gap-[20px] flex flex-col aos-init aos-animate ">
                                <h1 className='text-[100px] font-sans font-bold '>7250</h1>
                                <h5 className='text-center font-bold text-[16px] uppercase '>{t('Satisfied Clients')}</h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Works
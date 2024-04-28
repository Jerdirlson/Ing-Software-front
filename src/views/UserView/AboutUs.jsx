import DOCTOR_CHECKING from '../../assets/img/people/DoctorCheck.png'
import SERVICES_BACKGROUND from '../../assets/img/backgrounds/ServicesBackground.jpg'
import { aboutUs } from '../../data/AboutUs.data'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { useState } from 'react'
import MISION_IMG from '../../assets/svg/icons/aboutUs/mision.svg'
import VISION_IMG from '../../assets/svg/icons/aboutUs/vision.svg'
import OBJETIVO_IMG from '../../assets/svg/icons/aboutUs/objetivo.svg'
import FACEBOOK_ICON from '../../assets/svg/icons/social/facebookBlack.svg'
import INSTAGRAM_ICON from '../../assets/svg/icons/social/instagramBlack.svg'
import TWITTER_ICON from '../../assets/svg/icons/social/twitterBlack.svg'
import EMAIL_ICON from '../../assets/svg/icons/social/emailBlack.svg'

/**
 * This section contains the information about the IPS 
 * @returns {Component} AboutUs
 */
const AboutUs = () => {
    const [info, setInfo] = useState(aboutUs['mision'])
    const [activeButton, setActiveButton] = useState('mision')


    const handleInfo = (option) => {
        setInfo(aboutUs[option]);
        setActiveButton(option);
        console.log(info)
    };
    return (
        <>
            <NavBar />
            <div className='flex flex-col'>
                <main className="flex flex-col pt-32 text-2xl font-light justify-center items-center">
                    {/* Primera seccion Texto "Quienes somos" e imagen */}
                    <section className="flex mx-48 mb-10">
                        <div className='w-1/2 mb-5 mr-6'>
                            <h1 className='font-bold text-4xl mb-3'>¿Quienes somos?</h1>
                            <p>
                                En SaludPro, nos enorgullece ser mucho más que una institución prestadora de salud; somos un equipo comprometido 
                                con la excelencia en el cuidado y bienestar de nuestros pacientes. Desde nuestros humildes comienzos, nos hemos 
                                dedicado a brindar atención médica de calidad con un enfoque centrado en las personas.
                            </p> <br/>
                            <p>
                                Brindamos servicios de atención médica domiciliaria,
                                con un equipo interdisciplinario, calificado, capacitado
                                para ofrecer una atención segura, oportuna, eficiente y de calidad humana,
                                utilizando la tecnología adecuada, la mejora continua de los procesos y
                                la promoción del autocuidado y la participación familiar.
                            </p>
                        </div>
                        
                        <div className='ml-2 mr-3 shadow-smallShadow'>
                            <img className="h-full w-full object-cover" src={DOCTOR_CHECKING} alt="" />
                        </div>
                        {/* Redes */}
                        <div className='flex flex-col justify-center'>
                            <a className="m-2 hover:scale-110  duration-100 w-12 h-12 hover:bg-primary-blue rounded-lg p-2 justify-center items-center hover:fill-white" href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                                <svg className='w-full h-full' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.77 234.71"><path d="M327.45,95.28h0c-.18-1-.42-1.88-.66-2.81-.08-.29-.15-.59-.23-.88-.25-.85-.53-1.67-.83-2.49-.12-.36-.25-.71-.38-1.06-.31-.78-.64-1.54-1-2.3l-.53-1.1c-.37-.72-.75-1.44-1.15-2.13-.21-.37-.44-.73-.66-1.09-.42-.68-.84-1.35-1.3-2-.25-.36-.51-.69-.77-1-.48-.63-.95-1.26-1.46-1.86-.26-.31-.55-.61-.83-.91a42.59,42.59,0,0,0-3.57-3.54l-.62-.56c-.48-.4-1-.76-1.48-1.13s-1-.77-1.51-1.13-1-.64-1.49-1-1.12-.7-1.7-1-1-.54-1.53-.8-1.23-.62-1.86-.9-1-.45-1.55-.65c-.67-.27-1.35-.51-2-.75l-1.56-.5c-.73-.21-1.47-.39-2.22-.57-.5-.11-1-.24-1.5-.34-.85-.16-1.71-.28-2.57-.39-.43,0-.85-.13-1.29-.17-1.31-.13-2.63-.2-4-.2H67.41c-1.34,0-2.66.07-4,.2-.43,0-.85.12-1.28.17-.87.11-1.73.23-2.57.39-.51.1-1,.23-1.5.34-.75.18-1.5.36-2.23.58-.52.15-1,.32-1.55.49-.69.24-1.37.48-2,.75s-1,.42-1.55.65-1.25.58-1.87.9-1,.52-1.53.8-1.14.68-1.7,1-1,.62-1.49,1-1,.75-1.51,1.13-1,.73-1.47,1.13c-.23.19-.45.41-.67.61A41.52,41.52,0,0,0,37,75.62c-.28.3-.56.6-.83.91-.51.6-1,1.23-1.46,1.87-.25.34-.52.67-.77,1-.45.64-.88,1.31-1.3,2-.22.36-.45.72-.66,1.09-.4.69-.78,1.41-1.14,2.13-.19.36-.36.73-.54,1.1-.35.76-.68,1.52-1,2.29-.14.36-.26.71-.39,1.07-.3.82-.58,1.64-.82,2.48-.09.3-.16.6-.23.9-.25.92-.49,1.85-.67,2.79h0a41.45,41.45,0,0,0-.74,7.7V255.73a41,41,0,0,0,41,41H287.22a41,41,0,0,0,41-41V103A41.45,41.45,0,0,0,327.45,95.28Zm-40.23-7.15a14.19,14.19,0,0,1,2.27.19l.39.06a14.43,14.43,0,0,1,2.08.54l.14,0-109,80.86a9.74,9.74,0,0,1-11.61,0L62.53,89l.13,0a14.56,14.56,0,0,1,2.09-.54l.38-.06a14.32,14.32,0,0,1,2.28-.19H287.22Zm0,182.45H67.41a14.87,14.87,0,0,1-14.85-14.85V114.11l103.38,76.7a35.85,35.85,0,0,0,42.75,0l103.38-76.7V255.73A14.88,14.88,0,0,1,287.22,270.58Z" transform="translate(-26.43 -62)"/></svg>
                            </a>
                            <a className="m-2 hover:scale-110  duration-100 w-12 h-12 hover:bg-gray-200 rounded-lg p-2" href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                                <img className='w-10' src={FACEBOOK_ICON} />
                            </a>
                            <a className="m-2 hover:scale-110  duration-100 w-12 h-12 hover:bg-gray-200 rounded-lg p-2" href="https://media.discordapp.net/attachments/860225409369899011/925050870230548540/Aether_was_here.gif.gif?ex=662f1702&is=662dc582&hm=98a52e289f0339048aa9e55a97c89a9140b4702f01753ec7f8ea9de73576873d&">
                                <img className='w-10' src={TWITTER_ICON} />
                            </a>
                            <a className="m-2 hover:scale-110  duration-100 w-12 h-12 hover:bg-gray-200 rounded-lg p-2" href="https://cdn.discordapp.com/attachments/1082099606839644273/1220555869809410149/IMG-20240321-WA0096.jpg?ex=662f023c&is=662db0bc&hm=6ce28538971f0bd3009e3607dbe16087dba4651dadabe4246470b5a837521978&">
                                <img className='w-10' src={INSTAGRAM_ICON} />
                            </a>
                        </div>
                    </section>
                    <div className='h-auto w-full bg-gray-100 my-10'>
                    <section className='flex justify-center items-center text-2xl'>
                        {/* Seccion "Transparencia" */}
                        <div className='flex flex-col w-2/5 h-auto text-pretty m-10'>
                            <h1 className='font-bold text-4xl mb-2 text-Dark-blue'>
                                Transparencia
                            </h1>
                            <div className='overflow-hidden'>
                                <p>
                                    !Estamos para escucharte!
                                </p>
                                <p>
                                    Línea de transparencia:
                                </p>
                                <p >
                                    <a href='#' className='font-normal '>notificacionesyquejas@saludpro.ips.com
                                    </a>
                                </p>
                                <p className='mt-6'>
                                    Un canal donde pueden informar de manera anónima actos
                                    incorrectos en la empresa. Tales como:
                                </p>
                                <p>
                                    Revelación de información confidencial, fraude, conflicto de interés,
                                    hurto u otros comportamientos irregulares
                                </p>
                            </div>
                        </div>
                        {/* Seccion "Valores" */}
                        <div className='flex flex-col w-auto h-auto text-pretty m-10'>
                            <h1 className='font-bold text-[35px] text-Dark-blue'>
                                Valores
                            </h1>
                            <ul className='list-simple list-inside' class="custom-list">
                                <li>Compasión.
                                </li>
                                <li>Excelencia.
                                </li>
                                <li>Integridad.
                                </li>
                                <li>Innovación. </li>
                                <li>Respeto y transparencia.
                                </li>
                                <li> Responsabilidad Social. </li>
                            </ul>
                        </div>
                    </section>
                </div>
                </main>
                
                {/* HR */}
                
                <section className="flex flex-col items-center w-full mb-20">
                    <div className='flex p-10'>
                        <button className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-52 h-52 mx-20 ${activeButton === "mision" ? "scale-110 shadow-customButton duration-300" : ""}`} onClick={() => handleInfo("mision")}>
                            <img className="w-1/2 h-1/2 ml-6" src={MISION_IMG} alt="" />
                            <h3 className='text-2xl text-black font-bold'>Misión</h3>
                        </button>
                        <button className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-52 h-52 mx-20 ${activeButton === "vision" ? "scale-110 shadow-customButton duration-300" : ""}`} onClick={() => handleInfo("vision")}>
                            <img className="w-1/2 h-1/2 " src={VISION_IMG} alt="" />
                            <h3 className='text-2xl text-black font-bold'>Visión</h3>
                        </button>
                        <button className={`flex flex-col items-center justify-center overflow-hidden rounded-full w-52 h-52 mx-20 ${activeButton === "objetivo" ? "scale-110 shadow-customButton duration-300" : ""}`} onClick={() => handleInfo("objetivo")}>
                            <img className="w-1/2 h-1/2 " src={OBJETIVO_IMG} alt="" />
                            <h3 className='text-2xl text-black font-bold'>Objetivo</h3>
                        </button>
                    </div>
                    <div className='mt-6 mb-24 w-2/3 h-32'>
                        <p className='text-2xl font-light'>
                            {
                                info ? info.description : 'Haz click en las imagenes para ver información'
                            }
                        </p>
                    </div>
                </section>
                <section >
                    <div className='w-full'>
                        <img className="w-full h-full object-contain" src={SERVICES_BACKGROUND} alt="Doctor Smiling" />
                    </div>
                    <h1 className='px-40 py-14'>Donec vitae sapien ut libero venenatis faucibus.
                        Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla
                        mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</h1>
                </section>
            </div>
            <Footer />
        </>


    )
}
export default AboutUs

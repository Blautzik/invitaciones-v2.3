import { GiChurch } from "react-icons/gi";
import { GiGlassCelebration, GiPartyPopper } from "react-icons/gi";
import { inter, roboto } from '../../utils/fonts';
import Image from "next/image";
import ondas from '../../../public/img_ondas02.svg'
import { DotLottiePlayer } from "@dotlottie/react-player";



const Info = ({ dia, lugar, direccion }) => {
    return (
        <div>
            <div className="flex-col w-full mt-20 mb-10">
                
                <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between items-center lg:items-start m-auto">




                    <div className="flex flex-col w-5/12">
                        <div className="flex flex-col justify-center items-center ">
                            <div className='bg-white h-40 w-40 rounded-full flex justify-center items-center drop-shadow mb-4'>
                                <DotLottiePlayer
                                    src='/corazon.lottie'
                                    autoplay
                                    loop
                                >
                                </DotLottiePlayer>
                            </div>
                            <div className="bg-slate-600 h-14 w-72 flex items-center justify-between">
                                <div className="relative bg-[#EFEDE7] w-40 h-20 rotate-45 -left-5"></div>
                                <h3 className={`${roboto.className} text-2xl text-center w-80 my-3 text-slate-50`}>Ceremonia</h3>
                                <div className="relative bg-[#EFEDE7] w-40 h-20 rotate-45 -right-5"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h4 className={`${roboto.className} text-xl text-center w-80 mt-3 text-slate-600`}>Día</h4>
                            <p className={`${inter.className} text-base mb-2 text-center w-80 text-slate-600`}>jueves 30 de juno - 17hs</p>

                            <a href="https://calendar.google.com/" target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-60 rounded-full py-2 px-8 bg-slate-600 text-slate-50 shadow-md`}>Agendar</button>
                            </a>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Lugar</h4>
                            <p className={`${inter.className} text-base text-center w-80 mb-3 text-slate-600`}>Catedral Metropolitana de Buenos Aires</p>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                            <p className={`${inter.className} text-base text-center w-80 text-slate-600`}> San Martin 27, CABA </p>
                            <a href='https://https://www.google.com/maps/place/Catedral+Metropolitana+de+Buenos+Aires/@-34.6071891,-58.3750032,17.75z/data=!4m6!3m5!1s0x95bcb9c134355bc3:0xe7611c1602820d34!8m2!3d-34.6075694!4d-58.3732574!16zL20vMGR0dGs1?hl=es-AR&entry=ttu'>
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>¿Cómo llegar?</button>
                            </a>


                        </div>
                    </div>



                    <div className="flex flex-col justify-center items-center w-5/12">
                        <div className="flex flex-col justify-center items-center">
                            <div className='bg-white h-40 w-40 rounded-full flex justify-center items-center drop-shadow'>
                                <DotLottiePlayer
                                    src='/corazon.lottie'
                                    autoplay
                                    loop
                                >
                                </DotLottiePlayer>
                            </div>

                            <div className="bg-slate-600 h-14 w-72 mt-3 flex items-center justify-between">
                                <div className="relative bg-[#EFEDE7] w-40 h-20 rotate-45 -left-5"></div>
                                <h3 className={`${roboto.className} text-2xl text-center w-80 my-3 text-slate-50`}>Fiesta</h3>
                                <div className="relative bg-[#EFEDE7] w-40 h-20 rotate-45 -right-5"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h4 className={`${roboto.className} text-xl text-center w-80 mt-3 text-slate-600`}>Día</h4>
                            <p className={`${inter.className} text-base mb-2 text-center w-80 text-slate-600`}>sábado 5 de julio - 21hs</p>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf14IEwtbBeknTzPAx_Izy7NqS1YreOa88UnZhaqgTIU90CKg/viewform?usp=sf_link" target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>Confirmar Asistencia</button>
                            </a>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Lugar</h4>
                            <p className={`${inter.className} text-base text-center w-80 mb-3 text-slate-600`}>Janos Escobar</p>
                            <a href='https://www.janoseventos.com/salones.php?q=janos-escobar' target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>Conocé el salón</button>
                            </a>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                            <p className={`${inter.className} text-base text-center w-80 text-slate-600`}> Av. Sarmiento 1131, Belén de Escobar</p>
                            <a href='https://https://www.google.com/maps/place/Catedral+Metropolitana+de+Buenos+Aires/@-34.6071891,-58.3750032,17.75z/data=!4m6!3m5!1s0x95bcb9c134355bc3:0xe7611c1602820d34!8m2!3d-34.6075694!4d-58.3732574!16zL20vMGR0dGs1?hl=es-AR&entry=ttu' target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>¿Cómo llegar?</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default Info
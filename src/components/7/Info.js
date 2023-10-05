
import { inter, roboto } from '../../utils/fonts';
import {  motion } from "framer-motion"
import { DotLottiePlayer } from "@dotlottie/react-player";



const Info = ({ article }) => {
    return (
        <div className=" relative w-full mt-4 -globals-36 ">
            <div className="flex-col items-center  w-full ">
                <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between md:items-center md:justify-center items-center lg:items-start m-auto">
                    <div className="flex flex-col justify-center items-center w-5/12">



                        <motion.div
                            initial={{
                                scale: 0.8,
                                opacity: 0,

                            }}
                            transition={{
                                duration: 0.6,

                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            className="flex flex-col justify-center items-center">
                            <div className='bg-white h-40 w-40 rounded-full flex justify-center items-center drop-shadow mb-8'>
                                <DotLottiePlayer
                                    src='/torta.lottie'
                                    autoplay
                                    loop
                                >

                                </DotLottiePlayer>
                            </div>
                            <div className="bg-slate-600 h-14 w-72 mt-3 flex items-center justify-between">
                                <div className="relative bg-[#fff] w-40 h-20 rotate-45 -left-5"></div>
                                <h3 className={`${roboto.className} text-2xl text-center w-80 my-3 text-slate-50`}>Fiesta</h3>
                                <div className="relative bg-[#fff] w-40 h-20 rotate-45 -right-5"></div>
                            </div>
                        </motion.div>



                        <div className="flex flex-col justify-center items-center">
                            <motion.div
                                initial={{
                                    scale: 0.8,
                                    opacity: 0,

                                }}
                                transition={{
                                    duration: 1.2,

                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="flex flex-col justify-center items-center"
                            >

                                <h4 className={`${roboto.className} text-xl text-center w-80 mt-3 text-slate-600`}>Día</h4>
                                <p className={`${inter.className} text-base mb-2 text-center w-80 text-slate-600`}>Viernes 1 de septiembre - 21:30 a 05:30</p>

                                <a href="https://forms.gle/YjWev9czayxjnDXB9" target="_blank">
                                    <button className={`${roboto.className} text-base m-auto text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 lg:hover:bg-white lg:hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>Confirmar Asistencia</button>
                                </a>
                            </motion.div>


                            <motion.div
                                initial={{
                                    scale: 0.8,
                                    opacity: 0,

                                }}
                                transition={{
                                    duration: 1.2,

                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="flex flex-col justify-center items-center"
                            >

                                <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Lugar</h4>
                                <p className={`${inter.className} text-base text-center w-80 mb-3 text-slate-600`}>Jano's San Isidro</p>
                                <a href='https://www.janoseventos.com/salones.php?q=janos-San%20Isidro' target="_blank">
                                    <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 rounded-full py-2 px-8 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>Conocé el salón</button>
                                </a>
                            </motion.div>



                            <motion.div
                                initial={{
                                    scale: 0.8,
                                    opacity: 0,

                                }}
                                transition={{
                                    duration: 1.2,

                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="flex flex-col justify-center items-center"
                            >
                                <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                                <p className={`${inter.className} text-base text-center w-80 text-slate-600`}> Av. Bernabé Márquez 504</p>
                                <a href='https://www.google.com/maps/place/Janos+San+Isidro/@-34.478008,-58.519432,15z/data=!4m6!3m5!1s0x95bcb168e2679ab5:0xc1e8dbff0dd17415!8m2!3d-34.478008!4d-58.519432!16s%2Fg%2F11s4cqq26c?entry=ttu' target="_blank">

                                    <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 rounded-full py-2 px-8 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                                </a>

                            </motion.div>




                            <motion.div
                                initial={{
                                    scale: 0.5,
                                    opacity: 0,

                                }}
                                transition={{
                                    duration: 1.2,

                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    scale: 1,
                                }}
                                className="flex flex-col justify-center items-center"
                            >

                                <div>
                                    <h3 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}> Dress Code </h3>
                                    <h4 className={`${inter.className} text-base text-center w-80 text-slate-600`}> Elegante </h4>

                                </div>

                                
                            <div>

                                <video autoPlay loop muted className="h-36">
                                    <source src="https://cdnl.iconscout.com/lottie/premium/thumb/suit-7228596-5862216.mp4" type="video/mp4" />

                                </video>
                            </div>
                                
                            </motion.div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Info
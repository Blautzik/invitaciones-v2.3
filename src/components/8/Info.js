
import { inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from 'next/image';
import fiestaIcon from '../../../public/fiestas-12.png';
import suitIcon from '../../../public/suit (1).png'



const Info = ({ dia, lugar, direccion, article }) => {


    console.log('-------------------->asdasdqawaerasdfwertfsdxcvsdgjhdrty',article)
    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        borderRadius: '5px',
    } 

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
                            <div className='h-24 w-24 relative mb-6'>
                                <Image
                                    src={fiestaIcon}
                                    fill

                                />

                            </div>
                            <div className="bg-violeta h-14 w-72 mt-3 flex items-center justify-between">
                                <div className="relative bg-[#fff] w-40 h-20 rotate-45 -left-5"></div>
                                <h3 className={`${openSans.className} text-2xl text-center w-80 my-3 text-slate-50`}>FIESTA</h3>
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

                                <h4 className={`${openSans.className} text-xl text-center w-80 mt-3 text-slate-600`}>Día</h4>
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>Viernes 1 de septiembre - 21:30 a 05:30</p>

                                {/* <a href="https://forms.gle/YjWev9czayxjnDXB9" target="_blank">
                                    <button className={`${roboto.className} text-base m-auto text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 lg:hover:bg-white lg:hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>Confirmar Asistencia</button>
                                </a> */}
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

                                <h4 className={`${openSans.className} text-xl text-center w-80 text-slate-600`}>Salón</h4>
                                <p className={`${openSans.className} text-base text-center w-80 mb-3 text-slate-600`}>Jano's San Isidro</p>

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
                                <h4 className={`${openSans.className} text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                                <p className={`${openSans.className} text-base text-center w-80 text-slate-600`}> Av. Bernabé Márquez 504</p>
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
                            >
                                <div className='relative w-[90vw] h-60 mt-4 md:w-[45vw] md:h-96 rounded-sm'>


                                    <Image
                                        src='https://res.cloudinary.com/fedexx/image/upload/v1695168479/1656690528_Recorrido_San_Isidro_29_de_junio_de_2022__74A9641_fryiyb.jpg'
                                        fill
                                        quality={50}
                                        style={imgstyle}
                                    />

                                </div>
                            </motion.div>

                            <motion.div className='flex w-[75vw] justify-evenly mt-5'>

                                <a href='https://www.janoseventos.com/salones.php?q=janos-San%20Isidro' target="_blank">
                                    <button className={`${openSans.className} text-base text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-7 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>Conocelo</button>
                                </a>
                                <a href='https://www.google.com/maps/place/Janos+San+Isidro/@-34.478008,-58.519432,15z/data=!4m6!3m5!1s0x95bcb168e2679ab5:0xc1e8dbff0dd17415!8m2!3d-34.478008!4d-58.519432!16s%2Fg%2F11s4cqq26c?entry=ttu' target="_blank">

                                    <button className={`${openSans.className} text-base text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-7 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
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

                                <div className='flex flex-col items-center mt-6'>
                                    <h3 className={`${openSans.className} text-xl text-center w-80 text-slate-600`}> Dress Code </h3>
                                    <h4 className={`${openSans.className} text-base text-center w-80 text-slate-600`}> Elegante </h4>
                                    <div className='h-16 w-16 relative m-6'>

                                        <Image
                                            src={suitIcon}
                                            fill
                                        />
                                    </div>
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
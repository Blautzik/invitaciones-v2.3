import { inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';
import fiestaIcon from '../../../public/fiestas-12.png';
import suitIcon from '../../../public/suit (1).png'
import salones, { encontrarSalon } from "../../data/salones"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { obtenerHoraArgentina } from '@/helpers';


const Info = ({ article }) => {
    const fechaCeremonia = new Date(article.fecha);
    const formattedDate = fechaCeremonia.toLocaleDateString("es-ES", {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    

    const salon =  encontrarSalon(article.salon)

    function capitalize(string) {
        return string.replace(/^\w/, match => match.toUpperCase());
    }

    console.log(article.fecha)
    const hora = obtenerHoraArgentina(article.fecha)
    console.log(hora)


    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        borderRadius: '5px',
    }

    return (
        <div className=" relative w-full mt-4 -globals-36 overflow-x-hidden">
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

                            <h3 className={`${openSans.className} text-slate-700 sm:text-2xl xs:text-xl mb-10 font-[700] text-center`}>La Fiesta</h3>


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
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>{capitalize(formattedDate) + " - " + hora.slice(0, 5) }</p>
                                {article.hora_fin &&
                                    <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>Hasta Las: {article.hora_fin}</p>

                                }


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
                                <p className={`${openSans.className} text-base text-center w-80 mb-3 text-slate-600`}>{article.salon}</p>

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
                                <p className={`${openSans.className} text-base text-center w-80 text-slate-600`}> {salon.direccion}</p>
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

                                    {
                                        salon.foto_salon &&
                                        <Image
                                            src={salon.foto_salon}
                                            fill
                                            quality={50}
                                            style={imgstyle}
                                        />
                                    }

                                </div>
                            </motion.div>

                            {salon.link &&
                                <div className='mt-5 w-full flex flex-col items-center sm:flex-row justify-evenly'>
                                    <a href={salon.link} target="_blank">
                                        <button className={`${openSans.className} sm:text-sm text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>Conocelo</button>
                                    </a>
                                    <a href={salon.link_maps} target="_blank">

                                        <button className={`${openSans.className} sm:text-sm  text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                                    </a>
                                </div>
                            }


                            <div
                                className="flex flex-col justify-center items-center"
                            >

                                <div className='flex flex-col items-center mt-6'>
                                    <h3 className={`${openSans.className} text-xl text-center w-80 text-slate-600`}> Dress Code </h3>
                                    <h4 className={`${openSans.className} text-base text-center w-80 text-slate-600`}> {article.dress_code ? article.dress_code : "Elegante"} </h4>
                                    <div className='h-16 w-16 relative m-6'>
                                        <Image
                                            src={suitIcon}
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Info
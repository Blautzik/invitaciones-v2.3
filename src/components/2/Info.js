
import { inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';
import fiestaIcon from '../../../public/fiestas-12.png';
import suitIcon from '../../../public/suit (1).png'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'


const Info = ({ article }) => {

    const fechaCeremonia = new Date(article.fecha)
    fechaCeremonia.setDate(fechaCeremonia.getDate() + 1);
    const formattedDate = format(fechaCeremonia, "EEEE d 'de' MMMM", { locale: es });




    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        borderRadius: '5px',
    }

    return (
        <div className="relative -top-[1px] w-full overflow-x-hidden ">

            <div style={{backgroundImage: `url(${article.fondo_sugerido})`, backgroundSize:'cover'}} className={`flex flex-col md:flex-row md:w-10/12 w-full justify-between md:items-center md:justify-center items-center lg:items-start  `}>
                
                <div className={article.fondo_sugerido ? "text-white flex flex-col justify-center items-center w-5/12": "flex flex-col text-slate-700 justify-center items-center w-5/12" }>
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

                        <h3 className={`${openSans.className} sm:text-2xl xs:text-xl mb-10 font-[700] text-center`}>La Fiesta</h3>


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

                            <h4 className={`${openSans.className} text-xl text-center w-80 mt-3 `}>Día</h4>
                            <p className={`${openSans.className} text-base mb-2 text-center w-80 `}>{article.fecha_string} - {article.hora_string}</p>
                            {article.hora_fin &&
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 `}>Hasta Las: {article.hora_fin}</p>

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

                            <h4 className={`${openSans.className} text-xl text-center w-80 `}>Salón</h4>
                            <p className={`${openSans.className} text-base text-center w-80 mb-3 `}>{article.salon}</p>

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
                            <h4 className={`${openSans.className} text-xl text-center w-80 `}>Dirección</h4>
                            <p className={`${openSans.className} text-base text-center w-80`}> {article.direccion_salon}</p>
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

                            {
                                !article.no_conozcas &&
                                <div className='relative w-[90vw] h-60 mt-4 md:w-[45vw] md:h-96 rounded-sm'>

                                    <Image
                                        src={article.foto_salon}
                                        fill
                                        quality={50}
                                        style={imgstyle}
                                    />

                                </div>
                            }

                        </motion.div>

                        <div className='mt-5 w-full flex flex-col items-center sm:flex-row justify-evenly'>
                            {
                                !article.no_conozcas &&
                                <a href={article.link_salon} target="_blank">
                                    <button className={`${openSans.className} sm:text-sm text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>Conocelo</button>
                                </a>
                            }
                            <a href={article.ubicacion} target="_blank">

                                <button className={`${openSans.className} sm:text-sm  text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                            </a>
                        </div>


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
                                <h3 className={`${openSans.className} text-xl text-center w-80 `}> Dress Code </h3>
                                <h4 className={`${openSans.className} text-base text-center w-80 `}> {article.dress_code ? article.dress_code : "Elegante"} </h4>
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

    );
};


export default Info
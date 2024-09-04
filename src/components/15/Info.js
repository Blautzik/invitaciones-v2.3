import { inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';
import fiestaIcon from '../../../public/fiestas-12.png';
import suitIcon from '../../../public/suit (1).png'
import salones, { encontrarSalon } from "../../data/salones"
import { obtenerHoraArgentina } from '@/helpers';

const Info = ({ article }) => {
    const fechaCeremonia = new Date(article.fecha);
    const formattedDate = fechaCeremonia.toLocaleDateString("es-ES", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        timeZone: 'America/Argentina/Buenos_Aires'
    });

    const hora = fechaCeremonia.toLocaleTimeString("es-ES", {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires' 
    });

    const salon = encontrarSalon(article.salon);


    let hora_fin = false

    if(article.form_id == "1l3h9980DQhgjmjxUbqJJzYJsKB5KpuQ0GeQFMbWJ36A"){
        hora_fin = "20:00"
    }
    if(article.form_id == "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0" ){
        hora_fin = "05:00"
    }
    if(article.form_id == "1QLYZgzByxTw1jyFIJY_u4gFlgF_CLHIM39vD3HDE1mI"){
        hora_fin = "21:00"
    } 


    if(article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA" ){
        article.mfmf = "sin_janos"
    }


    if(article.form_id == "1gxvaHJl7vw6q-k-b4IKTlFAXINgHub3Gc3-3EwOtesc"){
        salon.foto_salon = "https://res.cloudinary.com/fedexx/image/upload/v1725450558/fotos%20salones/Imagen_de_WhatsApp_2024-09-02_a_las_12.20.25_c5dc6810_cxbybf.jpg"
    }






    function capitalize(string) {
        return string.replace(/^\w/, match => match.toUpperCase());
    }

    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        zIndex: 0,
        borderRadius: '5px',
    }

    return (
        <div className="relative w-full mt-4 -globals-36 overflow-x-hidden">
            <div className="flex-col items-center w-full">
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
                            className="flex flex-col justify-center items-center"
                        >
                            <div className='h-24 w-24 relative mb-6'>
                                <Image
                                    src={fiestaIcon}
                                    fill
                                />
                            </div>
                            <h3 className={`${openSans.className} text-slate-700 sm:text-2xl xs:text-xl mb-8 font-[700] text-center`}>La Fiesta</h3>
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
                                {
                                    article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA" ?
                                    <>
                                        <h4 className={`${openSans.className} text-xl font-semibold text-center w-80 text-slate-600`}>Día</h4>
                                        <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>{capitalize(formattedDate)}</p>
                                        <h4 className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>Ceremonia civil 20 hs</h4>
                                        <h4 className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>Fiesta a continuación </h4>
                                    </>
                                    :
                                    <>
                                        <h4 className={`${openSans.className} text-xl font-semibold text-center w-80 mt-3 text-slate-600`}>Día</h4>
                                        <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>{capitalize(formattedDate) + " - " + hora}</p>
                                    </>
                                }
                                {hora_fin &&
                                    <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}>Hasta Las: {hora_fin}</p>
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
                                <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 text-slate-600`}>Salón</h4>
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
                                <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                                <p className={`${openSans.className} text-base text-center w-80 text-slate-600`}> {salon?.direccion}</p>
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
                                    article.mail !== 'bzerrizuela@gmail.com' ?
                                    <div className='relative w-[90vw] h-60 mt-4 md:w-[45vw] md:h-96 rounded-sm'>
                                    {salon?.foto_salon &&
                                        <Image
                                        src={salon.foto_salon}
                                        fill
                                        quality={50}
                                        style={imgstyle}
                                        />
                                    }
                                </div>  :
                                        <></>
                                    }
                            </motion.div>
                            {salon?.link &&
                                <div className='mt-5 w-full flex flex-col items-center sm:flex-row justify-evenly'>
                                    {
                                        article.mfmf != "sin_janos" &&
                                        <a href={salon?.link} target="_blank">
                                            <button className={`${openSans.className} sm:text-sm text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none shadow-lg transform active:scale-90 transition-transform`}>Conocelo</button>
                                        </a>
                                    }
                                    <a href={salon.link_maps} target="_blank">
                                        <button className={`${openSans.className} sm:text-sm text-center mt-2 mb-3 w-44 lg:w-64 bg-black rounded-full mx-1 py-2 px-6 text-slate-50 outline-none shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                                    </a>
                                </div>
                            }
                            <div className="flex flex-col justify-center items-center">
                                { article.nombre != "Noe" &&

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
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
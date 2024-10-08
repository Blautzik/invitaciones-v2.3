import { bride, comfortaa, inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';
import fiestaIcon from '../../../public/fiestas-12.png';
import suitIcon from '../../../public/suit (1).png'
import ceremoniaIcon from "../../../public/heartseparator1.png"
import salones, { encontrarSalon } from "../../data/salones"
import { obtenerHoraArgentina } from '@/helpers';

const InfoVip = ({ article }) => {
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
    let bg = ""
    let text = "text-slate-700"
    let bgbtn = "bg-black"
    let txtbtn = "text-slate-50"
    let foto_ceremonia = false

    if (article.form_id == "1l3h9980DQhgjmjxUbqJJzYJsKB5KpuQ0GeQFMbWJ36A") {
        hora_fin = "20:00"
    }
    if (article.form_id == "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0" || article.form_id == "1WBw_6hjgbraJrNv_d_mNhsiQPQtIyEMCwYQz2AU9EiI") {
        hora_fin = "05:00"
    }
    if (article.form_id == "1QLYZgzByxTw1jyFIJY_u4gFlgF_CLHIM39vD3HDE1mI") {
        hora_fin = "21:00"
    }


    if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
        article.mfmf = "sin_janos"
    }


    if (article.form_id == "1gxvaHJl7vw6q-k-b4IKTlFAXINgHub3Gc3-3EwOtesc") {
        salon.foto_salon = "https://res.cloudinary.com/fedexx/image/upload/v1725450558/fotos%20salones/Imagen_de_WhatsApp_2024-09-02_a_las_12.20.25_c5dc6810_cxbybf.jpg"
    }


    if (article.form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
        bg = "bg-black"
        text = "text-white"
    }


    if (article.form_id == "1fxKU_AxCcsXCC9i-OXHvMeHP9HXhQFSRvHm_txKCe_4") {
        foto_ceremonia = "https://res.cloudinary.com/fedexx/image/upload/v1701302507/jesi%20y%20maxi/descarga_mjuczu.jpg"
    }




    if (article.form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
        text = "text-secondary-600"
        bgbtn = "bg-[#e8e4db]"
        txtbtn = "text-secondary-600"
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

    const textito = `${openSans.className} text-gray-600 tracking-wider font-[500]`

    return (
        <div className={`relative w-full mt-4 -globals-36 overflow-x-hidden ${bg}`}>
            <h3 className={`${comfortaa.className} ${text} text-slate-700 sm:text-2xl xs:text-xl ${foto_ceremonia ? "mb-0" : "mb-4"} font-[700] text-center`}>Ceremonia y Fiesta</h3>
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

                            <>
                                <h4 className={`${openSans.className} text-xl font-semibold text-center w-80 mt-3 ${text}`}>Día</h4>
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 ${text}`}>{capitalize(formattedDate) + " - " + hora} hs.</p>
                            </>
                
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
                    <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 ${text}`}>Salón</h4>
                    <p className={`${openSans.className} text-base text-center w-80 mb-3 ${text}`}>{article.salon}</p>
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
                    <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 ${text}`}>Dirección</h4>
                    <p className={`${openSans.className} text-base text-center w-80 ${text}`}> {salon?.direccion}</p>
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
                            </div> :
                            <></>
                    }
                </motion.div>
                {salon?.link &&
                    <div className='mt-5 w-full flex flex-col items-center sm:flex-row justify-evenly '>
                        {
                            article.mfmf != "sin_janos" &&
                            <a href={salon?.link} target="_blank">
                                <button className={`${openSans.className} ${text == "text-white" && "invert"} sm:text-sm text-center mt-2 mb-3 w-44 lg:w-64 ${bgbtn} rounded-full mx-1 py-2 px-6 ${txtbtn} outline-none shadow-lg transform active:scale-90 transition-transform`}>Conocelo</button>
                            </a>
                        }
                        <a href={salon.link_maps} target="_blank">
                            <button className={`${openSans.className} ${text == "text-white" && "invert"} sm:text-sm text-center mt-2 mb-7 w-44 lg:w-64 ${bgbtn} rounded-full mx-1 py-2 px-6 ${txtbtn} outline-none shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                        </a>
                    </div>
                }
                <div className="flex flex-col justify-center items-center">
                        <div className='flex flex-col items-center mt-7'>
                            <h3 className={`${openSans.className} text-2xl text-center mb-3 w-80 ${text}`}> Dress Code </h3>
                            <h4 className={`${openSans.className} text-2xl text-center mb-14 w-80 ${text}`}> {article.dress_code ? article.dress_code : "Elegante"} </h4>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default InfoVip;
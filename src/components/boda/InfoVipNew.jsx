import { comfortaa, openSans } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';
import { encontrarSalon } from "../../data/salones"

const InfoVipNew = ({ article }) => {
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

    function capitalize(string) {
        return string.replace(/^\w/, match => match.toUpperCase());
    }

    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        zIndex: 0,
        borderRadius: '5px',
    }

    const containerStyle = {
        backgroundImage: 'url(https://res.cloudinary.com/fedexx/image/upload/v1738024529/fondo_dpibuy.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    }

    const overlayStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }

    return (
        <div style={containerStyle} className="w-full -mt-20 -globals-36 overflow-x-hidden">
            <div style={overlayStyle}></div>
            <div className="relative z-10">
                <h3 className={`${comfortaa.className} text-[#2f4538] sm:text-2xl xs:text-xl mb-4 font-[700] mt-14 text-center`}>
                    Ceremonia y Fiesta
                </h3>
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
                        <h4 className={`${openSans.className} text-xl font-semibold text-center w-80 mt-3 text-[#2f4538]`}>
                            Día
                        </h4>
                        <p className={`${openSans.className} text-base mb-2 text-center w-80 text-[#2f4538]`}>
                            {capitalize(formattedDate) + " de 2025" + " - " + hora} hs.
                        </p>
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
                        <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 text-[#2f4538]`}>
                            Salón
                        </h4>
                        <p className={`${openSans.className} text-base text-center w-80 mb-3 text-[#2f4538]`}>
                            {article.salon}
                        </p>
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
                        <h4 className={`${openSans.className} font-semibold text-xl text-center w-80 text-[#2f4538]`}>
                            Dirección
                        </h4>
                        <p className={`${openSans.className} text-base text-center w-80 text-[#2f4538]`}>
                            {salon?.direccion}
                        </p>
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
                    </motion.div>

                    {salon?.link && (
                        <div className='mt-5 w-full flex flex-col items-center sm:flex-row justify-evenly'>
                            <a href={salon.link_maps} target="_blank" rel="noopener noreferrer">
                                <button className={`${openSans.className} sm:text-sm text-center mt-2 mb-7 w-44 lg:w-64 bg-[#e8e4db] rounded-full mx-1 py-2 px-6 text-[#2f4538] outline-none shadow-lg transform active:scale-90 transition-transform`}>
                                    ¿Cómo llegar?
                                </button>
                            </a>
                        </div>
                    )}

                    <div className="flex flex-col justify-center items-center">
                        <div className='flex flex-col items-center mt-7'>
                        <h3 className={`${comfortaa.className} text-[#2f4538] sm:text-2xl xs:text-xl mb-4 font-[700] mt-4 text-center`}>
                                Dress Code
                            </h3>
                            <h3 className={`${comfortaa.className} text-[#2f4538] sm:text-2xl xs:text-xl mb-16 font-[700] mt- text-center`}>
                                {article.dress_code ? article.dress_code : "Elegante"}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoVipNew;
import Header from '@/components/1/Header';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import Head from 'next/head';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import { alegreya, comfortaa, minion, openSans, roboto, EyesomeScript, EyesomeRegular } from '../../utils/fonts';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { encontrarSalon } from '@/data/salones';
import Formulario from '@/components/love/Formulario';
import { BiCalendarCheck } from 'react-icons/bi';
import { Countdown } from '@/components/love/Countdown';

const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};



const WeddingInvitation = ({ article }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [copyMessage, setCopyMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!article) {
        return <div>Invitation not found</div>;
    }

    const palabrasPositivas = ["Amor", "Gratitud", "Unión", "Alegría", "Felicidad", "Armonía"];


    const {
        nombre,
        fecha,
        salon,
        dress_code,
        ceremonia,
        fecha_ceremonia,
        hora,
        lugar,
        direccion_ceremonia,
        foto_portada,
        foto_agendar,
        foto_regalos,
        frase_regalos,
        cbu,
        alias,
        titular,
        galeria,
        form_id
    } = article;

    // Process images
    const portada = foto_portada ? getGoogleDriveImageUrl(foto_portada) : '';
    const agendarImage = foto_agendar ? getGoogleDriveImageUrl(foto_agendar) : '';
    
    const regalosImage = foto_regalos ? getGoogleDriveImageUrl(foto_regalos) : '';
    const galeriaImages = galeria ? galeria.split(',').map(url => getGoogleDriveImageUrl(url.trim())) : [];
    const thumb = foto_portada ? getOptimizedGoogleDriveImageUrl(foto_agendar) : '';


    // Format date
    const formattedDate = new Date(fecha).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    const hour = new Date(fecha).toLocaleTimeString("es-ES", {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires' // Forzar zona horaria de Argentina
    });

    const salonFound = encontrarSalon(article.salon);



    const renderPolaroidImage = (img, index) => (
        <FadeInSection key={index}>
            <div className="inline-block bg-white p-4 shadow-lg transform rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-300">
                <div className="relative">
                    <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                        <p className={`text-gray-800 ${EyesomeScript.className} text-xl`}>{palabrasPositivas[index]}</p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );



    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyMessage(`${type} copiado al portapapeles`);
            setTimeout(() => setCopyMessage(''), 3000); // Clear message after 3 seconds
        }).catch(err => {
            console.error('Error al copiar: ', err);
            setCopyMessage('Error al copiar');
        });
    };



    return (
        <>
                <Head>
                    <title>
                        {article.nombre}
                        {article.frase_portada ? (" " + article.frase_portada)
                            : " Nos Casamos!"
                        }
                    </title>
                    <meta property="og:image" content={thumb} />
                    <meta property="og:description" content={"Comenzamos un nuevo capítulo de nuestra historia y queremos festejarlo con vos"} />
                    <meta property="og:image:type" content="image/jpeg" />

                </Head>

            <div className="relative min-h-[100vh]">
                {!imageError && (
                    <div className="fixed-background fixed h-[100vh] inset-0 z-0">
                        <Image
                            src={portada}
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={100}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            alt="Background"
                        />
                    </div>
                )}
                {imageError && (
                    <div className="fixed inset-0 bg-gray-200 z-0">
                        {/* Fallback content */}
                    </div>
                )}
                <main className={`relative z-10 min-h-[100dvh] ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>

                    <motion.div
                        className="fixed inset-0 bg-transparent z-50 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: loading ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ pointerEvents: loading ? 'auto' : 'none' }}
                    >
                        <div className='flex flex-col items-center justify-center '>
                            <img src='https://res.cloudinary.com/fedexx/image/upload/v1720805445/salones/6_it4kfk.webp' className='h-16 w-16 grayscale' />
                            <div className={`${EyesomeRegular.className} text-3xl font-bold text-gray-900`}>Cargando...</div>
                        </div>
                    </motion.div>

                    <motion.section
                        className={`text-center py-12 ${EyesomeScript.className} mt-40 rounded-lg p-6`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: loading ? 0 : 1, y: loading ? 50 : 0 }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        <h1 className="text-6xl font-thin text-gray-900 mb-2 tracking-tighter">{nombre}</h1>
                        <p className={`${EyesomeRegular.className} text-3xl font-bold text-gray-900`}>{formattedDate}</p>


                        <div className="container mx-auto px-4 mt-8 py-8">
                            <FadeInSection>
                                <section className={`text-center py-12 ${EyesomeRegular.className} p-6 mt-8  bg-opacity-80`}>
                                    <h2 className="text-4xl font-semibold text-gray-900 mb-8">Faltan:</h2>
                                    <Countdown targetDate={fecha} />
                                </section>
                            </FadeInSection>

                            {galeriaImages.length > 0 && (
                                <div className="space-y-16 my-16">
                                    {galeriaImages.slice(0, 2).map((img, index) => renderPolaroidImage(img, index))}
                                </div>
                            )}



                            <FadeInSection>
                                <section className={`text-center py-12 ${EyesomeRegular.className} font-bold border border-gray-800 p-6 mt-8 bg-white bg-opacity-80`}>
                                    <p className="text-xl text-gray-800 font-bold">
                                        Hoy comenzamos una nueva historia y queremos festejarlo con vos!
                                    </p>
                                </section>
                            </FadeInSection>



                            <FadeInSection>
                                <section className={`text-center py-12 ${openSans.className} border border-gray-800 p-6 mt-8 bg-white bg-opacity-80`}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <div className='flex justify-center '>

                                                <img src='https://res.cloudinary.com/fedexx/image/upload/v1720805445/salones/6_it4kfk.webp' className='h-24 w-24 grayscale' />
                                            </div>
                                            <h3 className={` ${EyesomeScript.className} text-4xl text-gray-800 mb-4`}>Ceremonia y Fiesta</h3>
                                            <p className="text-gray-800">
                                                {ceremonia === "La ceremonia es en el salón" && (
                                                    <>
                                                        {formattedDate} <br />
                                                        Hora: {hour} <br />
                                                        Lugar: {salon}<br />
                                                        Dirección: {salonFound.direccion}<br /><br />
                                                    </>
                                                )}
                                                Fiesta: {salon}<br />
                                            </p>
                                            <img src={salonFound.foto_salon} />
                                            <div className='h-32 flex flex-col items-center justify-center'>
                                                <a className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors" href={salonFound.link_maps}>
                                                    ¿Cómo llegar?
                                                </a>
                                                <a className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors" href={salonFound.link}>
                                                    Conocelo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <FadeInSection>
                                    <section className={`text-center py-12 ${openSans.className} border border-gray-800 p-6 mt-8 bg-white bg-opacity-80`}>
                                        <h3 className={` ${EyesomeScript.className} text-4xl text-gray-800 mb-4`}>Dress code</h3>
                                        <p className="text-xl text-gray-800">{dress_code}</p>
                                        <div className='flex justify-center '>

                                            <img src='https://res.cloudinary.com/fedexx/image/upload/v1720813290/icono_edited_lgekr1.webp' className='mt-4 h-14 w-14 grayscale' />
                                        </div>
                                    </section>
                                </FadeInSection>

                                {galeriaImages.length > 2 && (
                                    <div className="space-y-16 my-16">
                                        {galeriaImages.slice(2, 4).map((img, index) => renderPolaroidImage(img, index + 2))}
                                    </div>
                                )}


                                <FadeInSection>
                                    <section className={`text-center py-12 ${openSans.className} border border-gray-800 p-6 mt-8 bg-white bg-opacity-80`}>
                                        <h3 className={` ${EyesomeScript.className} text-4xl text-gray-800 mb-4`}>Confirma tu asistencia</h3>
                                        <p className="text-gray-800 mb-4">Agradecemos que confirmes tu asistencia.</p>


                                        <Formulario />
                                    </section>
                                </FadeInSection>

                                <FadeInSection>
                                    <section className={`text-center py-12 ${openSans.className} border border-gray-800 p-6 mt-8 bg-white bg-opacity-80`}>

                                        <div>
                                            <div className='flex justify-center '>

                                                <img src='https://res.cloudinary.com/fedexx/image/upload/v1720817855/4_edited_uvv719.webp' className='h-24 w-24 grayscale' />
                                            </div>
                                            <h3 className={` ${EyesomeScript.className} text-4xl text-gray-800 mb-4`}>Regalos</h3>

                                            <p className="text-gray-800 text-sm">
                                                {frase_regalos}<br /><br />
                                                CBU:<br /> {cbu}<br />
                                                Alias:<br /> {alias}<br />
                                                Titular: <br />{titular}
                                            </p>
                                            <button
                                                onClick={() => copyToClipboard(cbu, 'CBU')}
                                                className="bg-gray-800 text-white px-3 py-1 mt-2 rounded-full hover:bg-slate-700 transition-colors text-xs"
                                            >
                                                Copiar CBU
                                            </button>
                                        </div>
                                    </section>


                                </FadeInSection>



                            </FadeInSection>


                            {galeriaImages.length > 4 && (
                                <div className="space-y-16 my-16">
                                    {galeriaImages.slice(4, 6).map((img, index) => renderPolaroidImage(img, index + 4))}
                                </div>
                            )}

                            <FadeInSection>
                                <section className={`text-center py-12 flex flex-col items-center ${comfortaa.className}`}>
                                    <h2 className="text-3xl font-semibold text-gray-800 ">¡TE ESPERAMOS!</h2>
                                    <h3 className={`text-center text-6xl py-12 ${EyesomeScript.className}`}>{nombre}</h3>
                                    <a className={`${comfortaa.className} bg-gray-800 text-white w-44 flex justify-evenly items-center mb-8 text-[14px] font-[600] px-6 py-4 rounded-full `}
                                        href={`https://calendar.google.com/calendar/u/0/r/week/${formattedDate}`}
                                        target="_blank"
                                    >
                                        <BiCalendarCheck className="text-[20px]" />
                                        Agendar
                                    </a>

                                </section>
                            </FadeInSection>


                            <FadeInSection>
                                <a href='https://janoseventos.com' target='_blank'>
                                    <div className='object-contain mt-8 mb-8'>
                                        <Image
                                            src={'https://res.cloudinary.com/fedexx/image/upload/v1692357541/invi/LOGO_PNG_HORIZONTAL_VIOLETA_iwuny5.png'}
                                            width={250}
                                            height={100}
                                            quality={25}
                                            alt='logo'
                                        />

                                    </div>
                                </a>
                            </FadeInSection>
                        </div>
                    </motion.section>
                </main >
            </div >
        </>
    );
};

export default WeddingInvitation;



export async function getStaticProps({ params, previewData }) {
    const { uid } = params;

    if (!uid) {
        return {
            notFound: true,
        };
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbwkiLCPIUWZt57bEVdlwyOKRW6C36etkeckMHgrczFYlLD06qFXM5JRpTSGpJBWEdM/exec');

    if (!response.ok) {
        return {
            notFound: true,
        };
    }

    const articles = await response.json();

    // Log de los artículos obtenidos para verificación


    const articleData = articles.find(article => String(article.url) === uid);

    if (!articleData) {
        return {
            notFound: true,
        };
    }

    const article = {
        uid,
        ...articleData,
    };
    console.log(article)

    // Log de los datos del artículo para verificación


    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        };
    }

    const res = await fetch('https://script.google.com/macros/s/AKfycbwkiLCPIUWZt57bEVdlwyOKRW6C36etkeckMHgrczFYlLD06qFXM5JRpTSGpJBWEdM/exec');
    const posts = await res.json();


    if (!Array.isArray(posts) || posts.length === 0) {
        return {
            paths: [],
            fallback: false,
        };
    }

    const paths = posts
        .filter(post => post.url) // Asegúrate de filtrar los posts que tienen el nombre definido
        .map(post => ({
            params: { uid: String(post.url) }, // Asegúrate de que el parámetro uid sea una cadena
        }));

    // Log de las rutas generadas para verificación
    console.log('BODA Paths:', paths);

    return { paths, fallback: false };
}
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

    useEffect(() => {
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
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
        timeZone: 'America/Argentina/Buenos_Aires'
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
            setTimeout(() => setCopyMessage(''), 3000);
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
                    {article.frase_portada ? (" " + article.frase_portada) : " Nos Casamos!"}
                </title>
                <meta property="og:image" content={thumb} />
                <meta property="og:description" content={"Comenzamos un nuevo capítulo de nuestra historia y queremos festejarlo con vos"} />
                <meta property="og:image:type" content="image/jpeg" />
            </Head>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0">
                    {!imageError && (
                        <Image
                            src={portada}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            alt="Background"
                        />
                    )}
                    {imageError && (
                        <div className="w-full h-full bg-gray-200">
                            {/* Fallback content */}
                        </div>
                    )}
                </div>
                <div className="relative h-full overflow-y-auto">
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
                            {/* Your existing content sections go here */}
                            {/* I'm not repeating all the sections to keep the response concise, but they should remain unchanged */}
                            
                            {/* Example of one section: */}
                            <FadeInSection>
                                <section className={`text-center py-12 ${EyesomeRegular.className} p-6 mt-8  bg-opacity-80`}>
                                    <h2 className="text-4xl font-semibold text-gray-900 mb-8">Faltan:</h2>
                                    <Countdown targetDate={fecha} />
                                </section>
                            </FadeInSection>

                            {/* Include all other sections here */}

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
                </div>
            </div>
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
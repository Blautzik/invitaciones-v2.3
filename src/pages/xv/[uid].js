import React from 'react'
import Head from 'next/head';
import Header from '@/components/1/Header';
import Countdown from '@/components/1/Countdown';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Regalos from '@/components/15/Regalos';
import Footer from '@/components/4/Footer';
import { easeIn, motion } from "framer-motion"
import Formulario from '@/components/1/Formulario';
import Agendar from '@/components/1/Agendar';
import Audiowe from '@/components/Audiowe';
import Image from 'next/image';
import FormularioSinNino from '@/components/1/FormularioSinNino';
import InfoBat from '@/components/1/infoBat';
import FormularioBat from '@/components/1/FormularioBat';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import { SwiperGallery } from '@/components/15/Swiper';
import FormularioPlaylist from '@/components/15/FormularioPlaylist';
import FormularioVIP from '@/components/1/FormularioVIP';

const Invitacion = ({ article }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: -1000,
        opacity: 0.65,
    }

    const imageStyleFlipped = {
        objectFit: 'cover',
        objectPosition: '50% 100%',
        zIndex: -1000,
        opacity: 0.65,
        transform: 'scaleY(-1)'
    }

    if (article) {

        let portada = false
        let thumb = false

        if (article.foto_portada) {
            portada = getGoogleDriveImageUrl(article.foto_portada)
            thumb = getOptimizedGoogleDriveImageUrl(article.foto_portada)
        }
        let galeria = false
        let foto_agendar = false
        let foto_regalos = false
        let frase = article.qwe || "Te espero para compartir la alegría de esta noche inolvidable y única"
        let menu_antinino = false

        if (article.galeria) {
            const urlsArray = article.galeria.split(',').map(url => url.trim())
            galeria = urlsArray.map(url => getGoogleDriveImageUrl(url));
        }

        if (article.foto_agendar) {
            foto_agendar = getGoogleDriveImageUrl(article.foto_agendar)
        }

        if (article.foto_regalos) {
            foto_regalos = getGoogleDriveImageUrl(article.foto_regalos)
        }

        if (article.form_id == "1uG27558N8RX4coNRJrKF1qep_8l2xfJ1UeQvTZk26Rg"){
            article.frase_cierre = "Gracias por acompañarnos"
        }


        const ig_link = article["Link Instagram  (opcional)"];



        if (article.mfmf === "menu_sin_ninos") {
            menu_antinino = true
        }


        const title = `${article.nombre}${article.frase_portada ? " " + article.frase_portada : " Mis quince"}`;
        const description = `Te ${article.mfmf === "plural" ? "invitamos" : "invito"} a compartir la alegría de esta fiesta inolvidable y única`;



        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" itemProp="image" content={thumb} />
                    {
                        article.mail !== "bzerrizuela@gmail.com" &&
                        <meta property="og:description" content={description}/>
                    }

                    <meta property="og:image:type" content="image/jpeg" />
                </Head>


                {article.music &&
                    <div className='fixed bottom-4 right-0 z-50'>
                        <Audiowe music={article.music} />
                    </div>
                }
                <div className='flex flex-col justify-center items-center w-screen'>

                    <main className="w-screen" >

                        <section className='z-10'>
                            <Header
                                title={article.nombre}
                                coverImage={portada}
                                date={article.fecha}
                                content={frase}
                                foto_pc={portada}
                                frase_portada={article.frase_portada}
                                sin_ondas={article.sin_ondas}
                                mail={article.mail}
                            />
                        </section>

                        <div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 2,
                                    easeIn
                                }}
                                whileInView={{
                                    x: 0, opacity: 1
                                }}
                                className='overflow-hidden md:hidden'>

                                <Countdown date={article.fecha} />
                            </motion.div>


                            <section>
                                <motion.div>
                                    <div className="h-full w-full flex flex-col items-center justify-between ">
                                        {
                                            article.fondo_sugerido &&
                                            <Image
                                                src={article.fondo_sugerido}
                                                fill
                                                quality={100}
                                                style={imageStyle}
                                                alt='portada'
                                            />
                                        }


                                        <Info
                                            article={article}
                                        />

                                        {
                                            article.es_bat &&
                                            <InfoBat article={article} />
                                        }
                                    </div>
                                </motion.div>
                            </section>

                            {article.galeria &&
                                <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                                    {
                                        article.mfmf == "swiper" ?
                                            <SwiperGallery galeria={galeria} />
                                            : <Gallery imagenes={galeria} titulo={"Book de Fotos"} mail={article.mail} />
                                    }
                                </section>
                            }

                            {article.form_id && (
                                article.mail === 'bzerrizuela@gmail.com' ? (
                                    <FormularioVIP form_id={article.form_id} frase_extra={article.qwe} article={article} />
                                ) : (
                                    <div>
                                        {article.mfmf === "sin_ninos" || article.mfmf === "sin_ninostransporte" ? (
                                            <FormularioSinNino form_id={article.form_id} frase_extra={article.qwe} article={article} />
                                        ) : article.mfmf === "playlist" ? (
                                            <FormularioPlaylist form_id={article.form_id} frase_extra={article.frase_extra} />
                                        ) : (
                                            <Formulario
                                                form_id={article.form_id}
                                                frase_extra={article.frase_extra}
                                                color_fondo={article.color_fondo}
                                                menu_antinino={menu_antinino}
                                                sin_ninos={article.sin_ninos}
                                            />
                                        )}
                                    </div>
                                )
                            )}



                            {foto_regalos &&
                                <div>
                                    <Regalos article={article} foto_regalos={foto_regalos} />
                                </div>
                            }

                            <section className='relative'>
                                {
                                    article.fondo_sugerido &&
                                    <Image
                                        src={article.fondo_sugerido}
                                        fill
                                        quality={100}
                                        style={imageStyle}
                                        alt='portada'
                                    />
                                }

                                <div className='z-50'>
                                    <Agendar className='z-40' foto_agendar={foto_agendar} ig_link={ig_link} fb_link={article.link_face} tw_link={article.link_twitter} fecha={article.fecha} />
                                </div>

                            </section>

                            <section className='relative pt-5'>
                                {
                                    article.fondo_sugerido &&
                                    <Image
                                        src={article.fondo_sugerido}
                                        fill
                                        quality={100}
                                        style={{ ...imageStyleFlipped }}
                                        alt='portada'
                                    />
                                }

                                <>
                                    <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} mail={article.mail} />
                                    <div className={`w-screen bg-violeta h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>
                                </>

                            </section>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}

export default Invitacion


export async function getStaticProps({ params, previewData }) {
    const { uid } = params;

    if (!uid) {
        return {
            notFound: true,
        };
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbzoCjNfx0GeGNW3v1jIV_J3a0_QIOWiKau4nNQQg5CyLvh82UsBsz26aNaa0O9PxVmGxA/exec');

    if (!response.ok) {
        return {
            notFound: true,
        };
    }

    const articles = await response.json();


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

    const res = await fetch('https://script.google.com/macros/s/AKfycby4SXrqWFSAr9T1Aou5ocCpgfKMntQFesRyL2wO_vc3I53hoKRfnL9F5a-Z8R3h3HSuvw/exec');
    const posts = await res.json();


    if (!Array.isArray(posts) || posts.length === 0) {
        return {
            paths: [],
            fallback: false,
        };
    }

    const paths = posts
        .filter(post => post.url) 
        .map(post => ({
            params: { uid: String(post.url) },
        }));


    console.log('Paths:', paths);

    return { paths, fallback: false };
}
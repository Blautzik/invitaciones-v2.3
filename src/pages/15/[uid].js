import Header from '@/components/15/Header';
import Head from 'next/head';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Agendar from '@/components/15/Agendar';
import Regalos from '@/components/15/Regalos';
import Formulario from '@/components/6/Formulario';
import Footer from '../../components/4/Footer';
import { easeIn, motion } from 'framer-motion';
import Audiowe from '../../components/Audiowe';
import Image from 'next/image';
import FormularioSinNino from '../../components/1/FormularioSinNino';
import InfoBat from '../../components/1/infoBat';

import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import FormularioSimple from '@/components/15/FormularioSimple';
import { encontrarSalon } from '../../data/salones';
import InfoBatDan from '@/components/1/infoBatDan';



const Invitacion = ({ article }) => {
    if (!article) {
        return null
    }


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


        const salon = encontrarSalon(article.salon);


        if (article.foto_portada) {
            portada = getGoogleDriveImageUrl(article.foto_portada)
            thumb = getOptimizedGoogleDriveImageUrl(article.foto_portada)
        } else {
            thumb = salon.foto_salon
        }

        let galeria = false
        let foto_agendar = false
        let foto_regalos = false
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

        const ig_link = article['Link Instagram (opcional)']

        let bg = article.form_id === "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0" ? "bg-black" : "bg-violeta"

        if(article.form_id === "1QLYZgzByxTw1jyFIJY_u4gFlgF_CLHIM39vD3HDE1mI"){
            bg = "bg-[#ffa4a4]"
        }


        const title = `${article.nombre}${article.frase_portada ? " " + article.frase_portada : " Mis quince"}`;
        const description = `Te ${article.mfmf === "plural" ? "invitamos" : "invito"} a compartir la alegría de esta fiesta inolvidable y única`;


        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" itemProp="image" content={thumb} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image:type" content="image/jpeg" />
                </Head>


                <div >
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portada}
                        date={article.fecha}
                        content={article.frase_portada}
                        h1_centrado={article.h1_centrado}
                        portada_custom={article.portada_custom}
                        article={article}
                        mail={article.mail}
                    />
                </div>

                <section id='info'>
                    <motion.div>
                        <div className="h-full w-full flex flex-col items-center justify-between ">
                            {
                                article.fondo_sugerido &&
                                <Image
                                    src={article.data.fondo_sugerido}
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
                                article.mfmf === "bar_dionisio" &&
                                <>
                                    <InfoBat article={article} />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            }
                            {
                                article.mfmf === "bar_dan" &&
                                <>
                                    <InfoBatDan article={article} />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            }


                        </div>
                    </motion.div>
                </section>


                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        <Gallery imagenes={galeria} titulo={"Book de Fotos"} mail={article.mail} />
                    </section>
                }
                <div>
                    {
                        article.mfmf == "formulario_simple" ?
                            <FormularioSimple form_id={article.form_id} frase_extra={article.frase_extra} />
                            :
                            <Formulario form_id={article.form_id} frase_extra={article.frase_extra} bg={bg} menu_antinino={article.menu_antinino} sin_ninos={article.sin_ninos} />
                    }
                </div>

                {article.foto_regalos &&

                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} bg={bg} />
                    </div>
                }


                <div className='z-50 mb-10'>
                    <Agendar className='z-40' foto={foto_agendar} ig_link={ig_link} fb_link={article.link_face} tw_link={article.link_tw} fecha={article.fecha} bg={article.bg_color} />
                </div>

                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} mfmf={article.mfmf} />


                <div className={`w-screen ${bg} h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>

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
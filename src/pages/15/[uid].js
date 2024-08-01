import Header from '@/components/15/Header';
import Head from 'next/head';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Agendar from '@/components/15/Agendar';
import Regalos from '@/components/15/Regalos';
import Formulario from '@/components/6/Formulario';
import * as prismic from '@prismicio/client';
import Countdown from '../../components/1/Countdown';
import Footer from '../../components/4/Footer';
import { easeIn, motion } from 'framer-motion';
import Audiowe from '../../components/Audiowe';
import Image from 'next/image';
import FormularioSinNino from '../../components/1/FormularioSinNino';
import InfoBat from '../../components/1/infoBat';
import FormularioBat from '../../components/1/FormularioBat';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import FormularioSimple from '@/components/15/FormularioSimple';



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

        if (article.foto_portada) {
            portada = getGoogleDriveImageUrl(article.foto_portada)
            thumb = getOptimizedGoogleDriveImageUrl(article.foto_portada)
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
        return (
            <>
                <Head>
                    <title>
                        {article.nombre}
                        {article.frase_portada ? (" " + article.frase_portada)
                            : " Mis quince"
                        }
                    </title>
                    <meta property="og:image" content={thumb} />
                    <meta property="og:description" content={"Te invito a compartir la alegría de esta noche inolvidable y única"} />
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
                                    <InfoBat article={article}/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    </>

                                }

                        </div>
                    </motion.div>
                </section>



                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        <Gallery imagenes={galeria} titulo={"Book de Fotos"} />
                    </section>
                }

                <div>

                    {
                        article.mfmf == "formulario_simple" ?
                            <FormularioSimple form_id={article.form_id} frase_extra={article.frase_extra} />
                            :
                            <Formulario form_id={article.form_id} frase_extra={article.frase_extra} color_fondo={article.color_fondo} menu_antinino={article.menu_antinino} sin_ninos={article.sin_ninos} />
                    }








                </div>


                {article.alias &&

                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} />
                    </div>
                }




                <div className='z-50 mb-10'>
                    <Agendar className='z-40' foto={foto_agendar} ig_link={article.link_ig} fb_link={article.link_face} tw_link={article.link_tw} fecha={article.fecha} bg={article.bg_color} />
                </div>

                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} mfmf={article.mfmf} />


                <div className={`w-screen bg-violeta h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>

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

    // Log de los datos del artículo para verificación
    console.log(article)

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
        .filter(post => post.url) // Asegúrate de filtrar los posts que tienen el nombre definido
        .map(post => ({
            params: { uid: String(post.url) }, // Asegúrate de que el parámetro uid sea una cadena
        }));

    // Log de las rutas generadas para verificación
    console.log('Paths:', paths);

    return { paths, fallback: false };
}
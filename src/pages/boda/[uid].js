

import Header from '@/components/6/Header';
import Head from 'next/head';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Agendar from '@/components/15/Agendar';
import Regalos from '@/components/15/Regalos';
import Formulario from '@/components/6/Formulario';
import * as prismic from '@prismicio/client';
import Countdown from '../../components/1/Countdown';
import Footer from '../../components/boda/Footer';
import { easeIn, motion } from 'framer-motion';
import Audiowe from '../../components/Audiowe';
import Image from 'next/image';
import FormularioSinNino from '../../components/1/FormularioSinNino';
import InfoBat from '../../components/1/infoBat';
import FormularioBat from '../../components/1/FormularioBat';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import FormularioNombre from '@/components/boda/FormularioNombres';
import { SliderTestigos } from '@/components/boda/SliderTestigos';



const Invitacion = ({ article }) => {

    console.log(article)

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
            console.log("********************************", foto_regalos)
        }
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
                    <meta property="og:description" content={"Te invitamos a compartir la alegría de esta noche inolvidable y única"} />
                    <meta property="og:image:type" content="image/jpeg" />

                </Head>


                <div className="mb-16">
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portada}
                        date={article.fecha}
                        content={article.frase}
                        h1_centrado={article.h1_centrado}
                    />
                </div>

                <div id="info">
                    <Info article={article} />
                </div>


                {article.regalo_sin_datos &&
                    <div>
                        <Regalos article={article} />
                    </div>
                }

                {article.cbu &&
                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} />
                    </div>
                }
                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        <Gallery imagenes={galeria} titulo={"Book de Fotos"} article={article} />
                    </section>
                }

                <div>
                    {
                        article.mail === "mercedes.matta10@gmail.com" ?
                            <FormularioNombre form_id={article.form_id} bg={article.bg_color} otra_frase={article.otra_frase_ninos} article={article} frase_formulario={article.frase_formulario} />
                            :
                            <Formulario form_id={article.form_id} bg={article.bg_color} otra_frase={article.otra_frase_ninos} frase_formulario={article.frase_formulario} />
                    }
                </div>


                {
                    article.mail === "mercedes.matta10@gmail.com" && <SliderTestigos />
                }


                <div className='mb-5'>
                    <Agendar foto={foto_agendar} fecha={article.fecha} bg={article.bg_color} />
                </div>
                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} />


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

    const response = await fetch('https://script.google.com/macros/s/AKfycbwmHj6frc5-xZaHRLHIOVgE1iY_d75FizjIyEquORZkJozgISCXav5pFQLNJGXqSIv1/exec');

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

    const res = await fetch('https://script.google.com/macros/s/AKfycbwmHj6frc5-xZaHRLHIOVgE1iY_d75FizjIyEquORZkJozgISCXav5pFQLNJGXqSIv1/exec');
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
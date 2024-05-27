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
import { getGoogleDriveImageUrl } from '@/helpers';



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
        const portada = getGoogleDriveImageUrl(article.foto_portada)
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

        if(article.foto_regalos) {
            foto_regalos = getGoogleDriveImageUrl(article.foto_regalos)
        }
        return (
            <>
                <Head>
                    <title>
                        {article.nombre}
                        {article.frase_portada ? (" " + article.frase_portada)
                            : "Mis quince"
                        }
                    </title>
                    <meta property="og:image" content={portada} />
                    <meta property="og:description" content={"Te invito a compartir la alegría de esta noche inolvidable y única"} />
                </Head>


                <div className="mb-16">
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portada}
                        date={article.fecha}
                        content={article.frase_portada}
                        h1_centrado={article.h1_centrado}
                    />
                </div>

                <section>
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
                                article.es_bat &&
                                <InfoBat article={article} />
                            }
                        </div>
                    </motion.div>
                </section>


                {article.cbu &&
                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} />
                    </div>
                }

                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        <Gallery imagenes={galeria} titulo={"Book de Fotos"} />
                    </section>
                }

                <div>
                    {article.sin_ninos ?
                        <FormularioSinNino form_id={article.form_id} frase_extra={article.frase_extra} />
                        :
                        <Formulario form_id={article.form_id} frase_extra={article.frase_extra} color_fondo={article.color_fondo} menu_antinino={article.menu_antinino} sin_ninos={article.sin_ninos} />
                    }



                </div>


        
                <div className='z-50 mb-10'>
                    <Agendar className='z-40' foto={foto_agendar} ig_link={article.link_ig} fb_link={article.link_face} tw_link={article.link_tw} fecha={article.fecha} bg={article.bg_color} />
                </div>

                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} />


                <div className={`w-screen bg-violeta h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>








            </>





        )

    }
}


export default Invitacion



export async function getStaticProps({ params, previewData }) {
    const { uid } = params; // Extrae uid de params

    // Realiza una solicitud HTTP GET a tu endpoint de Google Apps Script API
    const response = await fetch('https://script.google.com/macros/s/AKfycbzLZe2MiUp-aeZYnkncQ3pw5SIWG-s4oU27BvlPZX5zeeOrK-tljz08MiLv1q-V1RNoIQ/exec');

    // Maneja el estado de la respuesta
    if (!response.ok) {
        return {
            notFound: true,
        };
    }

    // Analiza los datos JSON de la respuesta
    const articles = await response.json();

    // Encuentra el artículo que coincida con el uid
    const articleData = articles.find(article => String(article.nombre) === uid);

    // Si no se encuentra el artículo, retorna 404
    if (!articleData) {
        return {
            notFound: true,
        };
    }

    // // Procesa los datos del artículo según sea necesario
    // const fecha = new Date(articleData.fecha);
    // const formattedFecha = fecha.toISOString(); 

    const article = {
        uid, // Usa el uid extraído
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

    // Llama a un endpoint externo de API para obtener los posts
    const res = await fetch('https://script.google.com/macros/s/AKfycbzLZe2MiUp-aeZYnkncQ3pw5SIWG-s4oU27BvlPZX5zeeOrK-tljz08MiLv1q-V1RNoIQ/exec');
    const posts = await res.json();

    // Obtén las rutas que queremos prerenderizar basadas en los posts
    // En entornos de producción, prerenderiza todas las páginas
    // (construcciones más lentas, pero carga inicial de página más rápida)
    const paths = posts.map((post) => ({
        params: { uid: String(post.nombre) }, // Asegúrate de que el parámetro uid sea una cadena
    }));

    // { fallback: false } significa que otras rutas deberían devolver 404
    return { paths, fallback: false };
}
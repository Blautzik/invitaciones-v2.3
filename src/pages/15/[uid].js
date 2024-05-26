import Header from '@/components/6/Header';
import Head from 'next/head';
import Info from '@/components/6/Info';
import Gallery from '@/components/6/Gallery';
import Agendar from '@/components/6/Agendar';
import Regalos from '@/components/6/Regalos';
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



const Invitacion = ({ article }) => {
    console.log(article)

    function getGoogleDriveImageUrl(driveUrl) {
    const fileId = driveUrl.match(/[-\w]{25,}/);

    if (!fileId) {
        throw new Error("Invalid Google Drive URL");
    }

    return `https://drive.google.com/uc?export=view&id=${fileId[0]}`;
    }

    article = false
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
        const portada  = getGoogleDriveImageUrl(article.foto_portada)
        return (
            <>
                <Head>
                    <title>
                        {article.nombre}
                        {article.frase_portada ? (" " + article.frase_portada)
                            : "Te invito a compartir la alegría de esta noche inolvidable y única"
                        }
                    </title>
                    <meta property="og:image" content={portada} />
                    <meta property="og:description" content={"Mis quince"} />

                </Head>
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
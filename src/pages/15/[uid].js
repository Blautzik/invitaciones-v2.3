import Header from '@/components/6/Header';
import Head from 'next/head';
import Info from '@/components/6/Info';
import Gallery from '@/components/6/Gallery';
import Agendar from '@/components/6/Agendar';
import Regalos from '@/components/6/Regalos';
import Formulario from '@/components/6/Formulario';


const seis = ({ article }) => {
    console.log(article)
    return (

        <>
            <h1>arti</h1>
        </>

    );
};

export default seis;

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
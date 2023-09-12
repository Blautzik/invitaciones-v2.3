
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Header from '@/components/6/Header';
import Info from "@/components/6/Info";
import Regalos from "@/components/6/Regalos";
import Formulario from "@/components/6/Formulario";
import Agendar from "src/components/6/Agendar";
import Gallery from "src/components/6/Gallery";







const seis = ({ article }) => {
    return (
        <>
        <div className="mb-16">
            <Header title={article.data.title}
                coverImage={prismic.asImageSrc(article.data.foto)}
                coverImagePc={prismic.asImageSrc(article.data.portadapc)}
                date={article.data.fecha_evento}
                content={article.data.frase} 
                />
        </div>

        <div id="info">
            <Info />
        </div>


        <div>
            <Regalos />
        </div>

        <div>
            <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} />
        </div>

        <div>
            <Formulario />
        </div>
        

        <div>
            <Agendar />
        </div>
        </>
    )
}

export default seis




export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });

    const article = await client.getByUID("boda", params.uid);
    console.log(article)
    return {
        props: {
            article
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const articles = await client.getAllByType("boda");

    const linkResolver = (doc) => {
        if (doc.type === 'boda') {
            return `/6/${doc.uid}/`
        } else {
            return `false`
        }
    }


    return {
        paths: articles.map((article) => prismic.asLink(article, { linkResolver })),
        fallback: false,
    };
}


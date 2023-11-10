
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Header from '@/components/6/Header';
import Info from "@/components/6/Info";
import Regalos from "@/components/6/Regalos";
import Formulario from "@/components/6/Formulario";
import Agendar from "src/components/6/Agendar";
import Gallery from "src/components/6/Gallery";
import Head from 'next/head';
import Audiowe from "@/components/Audiowe";







const seis = ({ article }) => {
    return (
        <>
            <Head>
                <title>
                    {article.data.title}
                </title>
                <meta property="og:image" content={prismic.asImageSrc(article.data.foto)} />
                <meta property="og:description" content={article.data.title} />

            </Head>


            {article.data.music &&
                <div className='fixed bottom-4 right-0 z-50'>
                    <Audiowe music={article.data.music} />
                </div>
            }

            <div className="mb-16">
                <Header title={article.data.title}
                    coverImage={prismic.asImageSrc(article.data.foto)}
                    coverImagePc={prismic.asImageSrc(article.data.portadapc)}
                    date={article.data.fecha_evento}
                    content={article.data.frase}
                />
            </div>

            <div id="info">
                <Info article={article.data} />
            </div>


            {article.data.cbu &&
                <div>
                    <Regalos article={article.data} />
                </div>
            }

            <div>

                <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} videoId={article.data.video_id} />
                
            </div>

            <div>
                <Formulario form_id={article.data.form_id} />
            </div>


            <div>
                <Agendar foto={article.data.foto_agendar} />
            </div>
        </>
    )
}

export default seis




export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });

    const article = await client.getByUID("boda", params.uid);
    console.log(article.data)
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


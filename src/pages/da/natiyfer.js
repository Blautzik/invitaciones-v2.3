
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Header from '@/components/daneses/6/Header';
import Info from "@/components/daneses/6/Info";
import Regalos from "@/components/daneses/6/Regalos";
import Formulario from "@/components/daneses/6/Formulario";
import Agendar from "src/components/daneses/6/Agendar";
import Gallery from "src/components/daneses/6/Gallery";
import Head from 'next/head';
import Audiowe from "@/components/Audiowe";


const siete = ({ article }) => {
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


            {article.data.regalo_sin_datos &&
                <div>
                    <Regalos article={article.data} />
                </div>
            }

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
                <Agendar foto={article.data.foto_agendar} fecha={article.data.fecha_evento} />
            </div>
        </>
    )
}

export default siete




export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });

    const article = await client.getByUID("boda", 'natiyfer');
  
    return {
        props: {
            article
        },
    };
}



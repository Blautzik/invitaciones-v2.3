

import Header from '@/components/6/Header';
import Head from 'next/head';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Agendar from '@/components/1/Agendar';
import Regalos from '@/components/15/Regalos';
import Formulario from '@/components/6/Formulario';
import Footer from '../../components/boda/Footer';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import FormularioNombre from '@/components/boda/FormularioNombres';
import { SliderTestigos } from '@/components/boda/SliderTestigos';
import InfoSouci from '@/components/15/InfoSouci';



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
        let bg = false

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


        if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
            bg = "bg-[#f8f5ee]"
        }
        let portadaPC = false

        if (article.form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
            bg = "bg-[#e8e4db]"
            article.sin_janos=true
        }




        const mail = article.mail

        let title = `${article.nombre}${article.frase_portada ? " " + article.frase_portada : " Nos casamos!"}`;
        let description = `Te invitamos a compartir la alegría de esta fiesta inolvidable y única`;



        
        if(article.form_id == "1QnzLLfyqDlbbehwIJa7qPbEtpm16iZaEt8pI28cgW8k"){
            portadaPC = "https://res.cloudinary.com/fedexx/image/upload/c_fill_pad,w_1920,h_900,g_auto,b_gen_fill/v1725917127/FullSizeRender_-_Milagros_Blaquier_bymrxn.jpg"
            title = "Maila & Maxi | 4-10 — 17hs"
            description = "¡Te invitamos a nuestro civil! R.S.V.P."
        }


        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" itemProp="image" content={thumb} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image:type" content="image/jpeg" />
                </Head>



                <div className="mb-16">
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portadaPC ? portadaPC : portada}
                        date={article.fecha}
                        content={article.frase}
                        h1_centrado={article.h1_centrado}
                        article={article}
                    />
                </div>


                {

                    article.form_id == "1QnzLLfyqDlbbehwIJa7qPbEtpm16iZaEt8pI28cgW8k" ?

                        <div id="info">
                            <InfoSouci article={article} />
                        </div>
                        :
                        <div id="info">
                            <Info article={article} />
                        </div>
                }



                {article.regalo_sin_datos &&
                    <div>
                        <Regalos article={article} />
                    </div>
                }

                {article.foto_regalos &&
                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} bg={bg} />
                    </div>
                }
                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        <Gallery imagenes={galeria} titulo={"Book de Fotos"} mail={article.mail} />
                    </section>
                }

                <div>
                    {
                        mail === "mercedes.matta10@gmail.com" ?
                            <FormularioNombre form_id={article.form_id} bg={article.bg_color} otra_frase={article.otra_frase_ninos} mail={mail} frase_formulario={article.frase_formulario} />
                            :
                            <Formulario form_id={article.form_id} otra_frase={article.otra_frase_ninos} frase_formulario={article.frase_formulario} bg={bg} />
                    }
                </div>


                {
                    article.mail === "mercedes.matta10@gmail.com" && <SliderTestigos />
                }


                <div className='mb-5'>
                    <Agendar foto={foto_agendar} fecha={article.fecha} bg={bg} />
                </div>
                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} form_id={article.form_id} />


                <div className={`w-screen ${bg ? `${bg} text-secondary-600 mt-8` : "bg-violeta text-white"} h-8 text-center pt-2 `}>{article.nombre} </div>
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

    const res = await fetch('https://script.google.com/macros/s/AKfycbwmHj6frc5-xZaHRLHIOVgE1iY_d75FizjIyEquORZkJozgISCXav5pFQLNJGXqSIv1/exec');
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


    console.log('BODA Paths:', paths);

    return { paths, fallback: false };
}
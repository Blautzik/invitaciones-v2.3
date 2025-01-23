

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
import InfoCondicional from '@/components/boda/InfoCondicional';
import Countdown from '@/components/15/Countdown';
import { openSans } from '../../utils/fonts';
import Link from 'next/link';
import FormularioSimple from '@/components/15/FormularioSimple';
import Seccion from '@/components/boda/Seccion';
import { SwiperGallery } from '../../components/15/Swiper';



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
        let bg = undefined
        let agendar = false
        let countdownFuera = false
        let texto = "text-slate-50"
        let formulario_simple = false
        let nombre = article.nombre
        let sin_footer = false
        let parte_extra = false
        let imgstyle = false
        let foto2 = false
        let ig_link = false
        let marginPortada = "mb-16"

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

        if (article.url == "Mayra-y-Hernan-17-01") {
            bg = "bg-[#f8f5ee]"
        }

        let portadaPC = false

        if (article.form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
            bg = "bg-[#e8e4db]"
            article.sin_janos = true
            portadaPC = "https://res.cloudinary.com/fedexx/image/upload/v1727139538/XV_1920_x_1080_px_20_hdntbw.png"
            countdownFuera = true
            texto = "text-secondary-600"
            nombre = ""
        }

        const mail = article.mail

        let title = `${article.nombre}${article.frase_portada ? " " + article.frase_portada : " Nos casamos!"}`;
        let description = `Te invitamos a compartir la alegría de esta fiesta inolvidable y única`;

        if (article.form_id == "1QnzLLfyqDlbbehwIJa7qPbEtpm16iZaEt8pI28cgW8k") {
            portadaPC = "https://res.cloudinary.com/fedexx/image/upload/c_fill_pad,w_1920,h_900,g_auto,b_gen_fill/v1725917127/FullSizeRender_-_Milagros_Blaquier_bymrxn.jpg"
            title = "Maila & Maxi | 4-10 — 17hs"
            description = "¡Te invitamos a nuestro civil! R.S.V.P."
        }


        if (article.form_id == "1BVNjGdXGL4DgYyY0qOy0OfSzXWWCG9WusnvfNaSaRyA") {
            agendar = "2024/10/26"
        }


        if (article.form_id == "1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM") {
            portadaPC = getGoogleDriveImageUrl("https://drive.google.com/file/d/13NtL5nST7jldK1kjEKFWr8gYZzSLPwtn/view?usp=sharing")
            formulario_simple = true
        }


        if (article.form_id == "1WxaFG9lHytoa57dHPOsZA1pSmLKOSonPABwwoeXcUBM") {
            parte_extra = true
            imgstyle = {
                objectFit: 'cover',
                objectPosition: '50% 50%',
                transform: 'scale(1.25)',
                zIndex: 0,
                borderRadius: '5px',
            }
            foto2 = getGoogleDriveImageUrl("https://drive.google.com/open?id=1fl3dRPUiBUbamUekn7p2epkdTqSGMDTs")
        }


        if (article.form_id == "1C2fb3SL58pSRdc150OIlBh2AlswwHbH1wZFSO_ayXmc") {
            ig_link = "https://www.instagram.com/joaivan_/profilecard/?igsh=N2cyaGcyMjF0NTEz"
        }


        if (article.url == "Angel-y-Liliana-30-11") {
            bg = "bg-[#f8f5ee]"
        }

        if (article.url == "Cris-y-Tefi") {
            bg = "bg-[#BED3BB]"
            article.mfmf = "swiper"
        }


        if (article.url == "Dai-y-Leo"){
            bg = "bg-[#5f8575] text-secondary-50"

        }
        if (article.url == "Vane-y-Fawaz"){
            texto = "text-blue-800"
            marginPortada = "mt-0"
            bg= "bg-blue-900"
        }

        if (article.url == "Ivonne-y-Pablo"){
            article.mfmf = "swiper"

        }

        if (article.url == "Nahir-y-Ivan"){
            bg = "bg-[#BED3BB]"
            article.sin_janos = true
            nombre = ""
        }

        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" itemProp="image" content={thumb} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image:type" content="image/jpeg" />
                </Head>



                <div className={marginPortada}>
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portadaPC ? portadaPC : portada}
                        date={article.fecha}
                        content={article.frase}
                        h1_centrado={article.h1_centrado}
                        article={article}
                        form_id={article.form_id}
                    />
                </div>

                {countdownFuera &&
                    <>
                        <div className={`flex flex-col items-center relative -mt-16  pt-16 mb-12 ${bg} shadow-lg`}>
                            <h2 className={`${openSans.className} ${texto} max-w-xs  text-center text-xl tracking-widest ]`}> Nos casamos en</h2>
                            <Countdown date={article.fecha} texto={texto} />
                            <Link href='#info' scroll={false}>
                                <button className={`${openSans.className} py-3 px-9 bg-white rounded-full text-gray-900 font-[900] text-center mb-8 `}>MÁS INFO</button>
                            </Link>
                        </div>
                    </>
                }

                <InfoCondicional article={article} />

                {
                    parte_extra && <Seccion article={article} />
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
                        {
                            article.mfmf == "swiper" ?
                                <SwiperGallery galeria={galeria} article={article} />
                                : <Gallery imagenes={galeria} titulo={"Book de Fotos"} mail={article.mail} />
                        }
                    </section>
                }

                <div>
                    {
                        mail === "mercedes.matta10@gmail.com" ?
                            <FormularioNombre form_id={article.form_id} bg={article.bg_color} otra_frase={article.otra_frase_ninos} mail={mail} frase_formulario={article.frase_formulario} />
                            :
                            formulario_simple ? <FormularioSimple form_id={article.form_id} otra_frase={article.otra_frase_ninos} frase_formulario={article.frase_formulario} bg={bg} />
                                :
                                <Formulario form_id={article.form_id} otra_frase={article.otra_frase_ninos} frase_formulario={article.frase_formulario} bg={bg} article={article} />
                    }
                </div>


                {article.mail === "mercedes.matta10@gmail.com" && <SliderTestigos />}

                {parte_extra &&
                    <div className="flex flex-col justify-between items-center m-auto max-w-[400px] overflow-hidden ">
                        <div className=" flex justify-center">
                            <img
                                src={foto2}
                                alt="Imagen 1"
                                className="w-full h-auto max-w-[90vw] mt-4 md:w-[45vw] md:h-96 rounded-sm object-cover"
                                style={imgstyle}
                            />
                        </div>
                    </div>
                }


                <div className='mb-5'>
                    <Agendar foto_agendar={foto_agendar} fecha={article.fecha} bg={bg} agendar={agendar} ig_link={ig_link} />
                </div>
                <Footer frase_cierre={article.frase_cierre} sin_janos={article.sin_janos} form_id={article.form_id} />

                {!sin_footer &&
                    <div className={`w-screen ${bg ? `${bg}  mt-8` : "bg-violeta text-white"} h-8 text-center pt-2 `}>{nombre} </div>
                }
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
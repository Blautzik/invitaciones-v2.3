import Header from '@/components/15/Header';
import Head from 'next/head';
import Info from '@/components/15/Info';
import Gallery from '@/components/15/Gallery';
import Agendar from '@/components/15/Agendar';
import Regalos from '@/components/15/Regalos';
import Formulario from '@/components/6/Formulario';
import Footer from '../../components/4/Footer';
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import InfoBat from '../../components/1/infoBat';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import FormularioSimple from '@/components/15/FormularioSimple';
import { encontrarSalon } from '../../data/salones';
import InfoBatDan from '@/components/1/infoBatDan';
import { SwiperGallery } from '../../components/15/Swiper';
import { BiUpload } from "react-icons/bi";
import Link from 'next/link';
import { openSans } from '../../utils/fonts';
import { Button } from '@/components/ui/button';
import Audiowe from '../../components/Audiowe';


const Invitacion = ({ article }) => {
    if (!article) {
        return null
    }

    let music = false

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
        let logo_inv = false
        let cloud_fotos = false

        const salon = encontrarSalon(article.salon);

        if (article.foto_portada) {
            portada = getGoogleDriveImageUrl(article.foto_portada)
            thumb = getOptimizedGoogleDriveImageUrl(article.foto_portada)
        } else {
            thumb = salon.foto_salon
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

        const ig_link = article['Link Instagram (opcional)']

        let bg = article.form_id === "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0" ? "bg-black" : "bg-violeta"

        if (article.form_id === "1QLYZgzByxTw1jyFIJY_u4gFlgF_CLHIM39vD3HDE1mI") {
            bg = "bg-[#ffa4a4]"
        }

        if (article.form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
            bg = "bg-black"
            article.sin_janos = true
        }

        if (article.url === "Carmela-01-12"){
            bg= "bg-[#f185a9]"

        }


        if (article.url == "Sofi-13-12") {
            bg = 'bg-[#f8f5ee]'
        }


        //9-11
        if (article.form_id == "1aLSubnXmSUuyCEA9_1XPPkjIK5bECXyKsHDl60kWxJs") {
            bg = "bg-[url('https://res.cloudinary.com/fedexx/image/upload/v1727300651/Imagen_de_WhatsApp_2024-09-19_a_las_10.54.59_d90a1b17_zf54it.jpg')] bg-no-repeat bg-cover"
        }

        const title = `${article.nombre}${article.frase_portada ? " " + article.frase_portada : " Mis quince"}`;
        let description = `Te ${article.mfmf === "plural" ? "invitamos" : "invito"} a compartir la alegría de esta fiesta inolvidable y única`;

        if (article.url == "ASTJ-07-11") {
            article.frase_cierre = "Despidamos juntos otro año"
            description = "Despidamos juntos otro año"
            cloud_fotos = true
        }

        
        if (article.url == "Lisandro-04-01"){
            music = "https://od.lk/s/NDVfNDgyMTcyOTZf/Ed%20Sheeran%20-%20Perfect%20-%20LatinHype%20%28youtube%29.mp3"
        }




        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" itemProp="image" content={thumb} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image:type" content="image/jpeg" />
                </Head>

                {music &&
                    <div className='fixed bottom-4 right-0 z-50'>
                        <Audiowe music={music} />
                    </div>
                }


                <div className={bg == "bg-black" && bg}>
                    <Header title={article.nombre}
                        coverImage={portada}
                        coverImagePc={portada}
                        date={article.fecha}
                        content={article.frase_portada}
                        h1_centrado={article.h1_centrado}
                        portada_custom={article.portada_custom}
                        article={article}
                        mail={article.mail}
                    />
                </div>

                <section id='info' className={bg == "bg-black" && bg}>
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
                                    <InfoBat article={article} />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            }
                            {
                                article.mfmf === "bar_dan" &&
                                <>
                                    <InfoBatDan article={article} />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </>
                            }


                        </div>
                    </motion.div>
                </section>


                {article.galeria &&
                    <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                        {
                            article.mfmf == "swiper" ?
                                <SwiperGallery galeria={galeria} article={article}/>
                                : <Gallery imagenes={galeria} titulo={"Book de Fotos"} mail={article.mail} />
                        }
                    </section>
                }

                {
                    cloud_fotos &&
                    <section className="bg-[#fff] mt-12 text-center flex flex-col justify-center items-center  ">
                        <h4 className={`${openSans.className} max-w-xs text-xl font-semibold text-center text-slate-700 mb-5`}>Compartí tus fotos para mostrar el día de la fiesta </h4>
                        
                        <a target='_blank' href={"https://forms.gle/MKkyYRtGeMNknXJcA"} className='mb-10' >
                        <button className={`${openSans.className} text-white sm:text-sm flex justify-center text-center mt-2 mb-3 w-44 lg:w-64 rounded-full mx-1 py-2 px-6 bg-black outline-none shadow-lg transform active:scale-90 transition-transform`}>
                            <BiUpload className='h-8 w-8 text-slate-50 ' />
                            </button>
                        </a>

                    </section>
                }

                <div>
                    {
                        article.mfmf == "formulario_simple" ?
                            <FormularioSimple form_id={article.form_id} frase_extra={article.frase_extra} />
                            :
                            <Formulario form_id={article.form_id} frase_extra={article.frase_extra} bg={bg} menu_antinino={article.menu_antinino} sin_ninos={article.sin_ninos} article={article} />
                    }
                </div>

                {article.foto_regalos &&

                    <div>
                        <Regalos article={article} foto_regalos={foto_regalos} bg={bg} />
                    </div>
                }




                <div>
                    <Agendar className='z-40' foto={foto_agendar} ig_link={ig_link} fb_link={article.link_face} form_id={article.form_id} tw_link={article.link_tw} fecha={article.fecha} bg={article.bg_color} />
                </div>

                <Footer frase_cierre={article.frase_cierre} form_id={article.form_id} sin_janos={article.sin_janos} mfmf={article.mfmf} />


                <div className={`w-screen ${bg} h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>

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

    const res = await fetch('https://script.google.com/macros/s/AKfycby4SXrqWFSAr9T1Aou5ocCpgfKMntQFesRyL2wO_vc3I53hoKRfnL9F5a-Z8R3h3HSuvw/exec');
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


    console.log('Paths:', paths);

    return { paths, fallback: false };
}
import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/1/Header';
import Countdown from '@/components/1/Countdown';
import Info from '@/components/1/Info';
import Gallery from '@/components/1/Gallery';
import Regalos from '@/components/1/Regalos';
import Footer from '@/components/4/Footer';
import { easeIn, motion } from "framer-motion"
import Formulario from '@/components/1/Formulario';
import Agendar from '@/components/1/Agendar';
import Audiowe from '@/components/Audiowe';
import Image from 'next/image';
import FormularioEspecial from '@/components/1/FormularioEspecial';
import { Viaoda_Libre } from 'next/font/google';
import FormularioSinNino from '@/components/1/FormularioSinNino';
import InfoBat from '@/components/1/infoBat';
import FormularioBat from '@/components/1/FormularioBat';

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

  article.url = ""

  if (article) {
    return (
      <>
        <Head>
          <title>
            {article.data.title} 
            {article.data.frase_portada && (" "+ article.data.frase_portada)}
          </title>
          <meta property="og:image" content={prismic.asImageSrc(article.data.foto)} />
          <meta property="og:description" content={article.data.frase} />

        </Head>



        {article.data.music &&
          <div className='fixed bottom-4 right-0 z-50'>
            <Audiowe music={article.data.music} />
          </div>
        }
        <div className='flex flex-col justify-center items-center w-screen'>

          <main className="w-screen" >

            <section className='z-10'>
              <Header
                title={article.data.title}
                coverImage={prismic.asImageSrc(article.data.foto)}
                date={article.data.fecha}
                content={article.data.frase}
                foto_pc={prismic.asImageSrc(article.data.foto_pc)}
                frase_portada={article.data.frase_portada}
                sin_ondas={article.data.sin_ondas}
                article={article}
              />
            </section>



            <div>


              <motion.div
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  easeIn
                }}
                whileInView={{
                  x: 0, opacity: 1
                }}
                className='overflow-hidden'>

                <Countdown date={article.data.fecha} />
              </motion.div>




              <section>
                <motion.div>
                  <div className="h-full w-full flex flex-col items-center justify-between ">
                    {
                      article.data.fondo_sugerido &&
                      <Image
                        src={article.data.fondo_sugerido}
                        fill
                        quality={100}
                        style={imageStyle}
                        alt='portada'
                      />
                    }


                    <Info
                      article={article.data}
                    />

                    {
                      article.data.es_bat && 
                      <InfoBat article={article.data} />
                    }
                  </div>
                </motion.div>
              </section>

              {
                article.data.galeria[0].foto1 &&
                <section className="bg-[#fff] mt-12 text-center flex justify-center ">
                  <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} />
                </section>
              }

              <div>
                {article.data.formulario_especial ?
                  <FormularioSinNino form_id={article.data.form_id} frase_extra={article.data.frase_extra} />
                  : article.data.es_bat
                    ? <FormularioBat form_id={article.data.form_id} frase_extra={article.data.frase_extra} color_fondo={article.data.color_fondo} menu_antinino={article.data.menu_antinino}/> 
                    : 
                    <Formulario form_id={article.data.form_id} frase_extra={article.data.frase_extra} color_fondo={article.data.color_fondo} menu_antinino={article.data.menu_antinino} sin_ninos={article.data.sin_ninos} article={article} />
                    
                }
              </div>

              {/* {article.data.cbu &&
                <div>
                  <Regalos article={article.data} />
                </div>
              } */}

              {article.data.frase_regalos &&
                <div>
                  <Regalos article={article.data} />
                </div>
              }

              <section className='relative'>
                {
                  article.data.fondo_sugerido &&
                  <Image
                    src={article.data.fondo_sugerido}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                  />
                }

                <div className='z-50'>
                  <Agendar className='z-40' foto_agendar={article.data.foto_agendar} ig_link={article.data.link_ig} fb_link={article.data.link_face} tw_link={article.data.link_twitter} fecha={article.data.fecha}/>
                </div>

              </section>

              <section className='relative pt-5'>
                {
                  article.data.fondo_sugerido &&
                  <Image
                    src={article.data.fondo_sugerido}
                    fill
                    quality={100}
                    style={{ ...imageStyleFlipped }}
                    alt='portada'
                  />
                }

                {article.data.link_salon?
                  <>
                    <Footer frase_cierre={article.data.frase_cierre} sin_janos={article.data.sin_janos} />
                    <div className={`w-screen bg-violeta h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>
                  </>
                  :
                  <>
                  </>
                }
              </section>
            </div>
          </main>
        </div>
      </>
    )
  }
}

export default Invitacion


export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("quince", params.uid);


  return {
    props: {
      article
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("quince");

  const linkResolver = (doc) => {
    if (doc.type === 'quince') {
      return `/1/${doc.uid}/`
    } else {
      return `false`
    }
  }


  return {
    paths: articles.map((article) => prismic.asLink(article, { linkResolver })),
    fallback: false,
  };
}

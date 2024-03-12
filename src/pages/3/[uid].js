import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/3/Header';
import Countdown from '@/components/1/Countdown';
import Info from '@/components/2/Info';
import Gallery from '@/components/1/Gallery';
import Regalos from '@/components/3/Regalos';
import Footer from '@/components/2/Footer';
import { easeIn, motion } from "framer-motion"
import Formulario from '@/components/3/Formulario';
import Agendar from '@/components/1/Agendar';
import Audiowe from '@/components/Audiowe';
import Image from 'next/image';
import FormularioEspecial from '@/components/1/FormularioEspecial';

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
    return (
      <>
        <Head>
          <title>
            {article.data.title}
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
                coverImagePc={prismic.asImageSrc(article.data.foto_pc)}
                frase_portada={article.data.frase_portada}
                sin_ondas={article.data.sin_ondas}
              />
            </section>

            <div>

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
                {article.data.formulario_especial?
                <FormularioEspecial form_id={article.data.form_id} frase_extra={article.data.frase_extra} />
                  :
                <Formulario form_id={article.data.form_id} frase_extra={article.data.frase_extra} />
                }
              </div>



              {article.data.frase_regalos &&
                <div className='mb-8'>
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
                  <Agendar className='z-40' foto_agendar={article.data.foto_agendar} ig_link={article.data.link_ig} fb_link={article.data.link_face} tw_link={article.data.link_twitter} />
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
                <Footer frase_cierre={article.data.frase_cierre} sin_janos={article.data.sin_janos} />
                <div className="w-screen bg-violeta h-8 text-center pt-2 text-white">Invitaciones Jano's </div>
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
  console.log(article)
  console.log(article.data)

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
      return `/3/${doc.uid}/`
    } else {
      return `false`
    }
  }


  return {
    paths: articles.map((article) => prismic.asLink(article, { linkResolver })),
    fallback: false,
  };
}

import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/8/Header';
import Countdown from '@/components/8/Countdown';
import Info from '@/components/8/Info';
import Gallery from '@/components/8/Gallery';
import Regalos from '@/components/8/Regalos';
import Footer from '@/components/4/Footer';
import { easeIn, motion } from "framer-motion"
import Formulario from '@/components/8/Formulario';
import Agendar from '@/components/8/Agendar';

const Invitacion = ({ article }) => {

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
        <div className='flex flex-col  justify-center items-center'>

        <main className="bg-[#fff]">

          <section className='z-10'>

            <Header
              title={article.data.title}
              coverImage={prismic.asImageSrc(article.data.foto)}
              date={article.data.fecha}
              content={article.data.frase}

            />


          </section>
          <div className=''>

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



            <section className=' overflow-x-hidden  '>
              <motion.div

                className=''>

                <Info className=' '
                  article={article.data}
                />
              </motion.div>

            </section>

            <section className="bg-[#fff] mt-12  text-center flex justify-center ">
              <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} className='' />
            </section>

               
            <section>
                <Formulario />
            </section>

            <section className=" bg-[#fff]  z-50">
              <Regalos />
            </section>

            <section>
              <Agendar/>
            </section>

            <section className='bg-[#fff] mt-5'>
              <Footer />
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
      return `/8/${doc.uid}/`
    } else {
      return `false`
    }
  }


  return {
    paths: articles.map((article) => prismic.asLink(article, { linkResolver })),
    fallback: false,
  };
}

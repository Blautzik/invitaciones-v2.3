import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/4/Header';
import Image from 'next/image';
import Countdown from '@/components/4/Countdown';
import Info from '@/components/4/Info';
import Gallery from '@/components/4/Gallery';
import Regalo from '@/components/4/Regalo';
import Footer from '@/components/4/Footer';
import ondas from '../../../public/img_ondas02.svg'
import { easeIn ,motion } from "framer-motion"

const Invitacion = ({ article }) => {

  const imageStyle = {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    opacity: 0.7,
    position: 'relative',
    top: '-140px',
    background: '#EFEDE7'
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

        <main className="bg-[#fff] ">

          <section className='h-screen md:h-auto md:w-auto z-10'>

            <Header
              title={article.data.title}
              coverImage={prismic.asImageSrc(article.data.foto)}
              date={article.data.fecha}
              content={article.data.frase}

            />


          </section>
          <div className=' z-50'>

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



            <section className=' md:h-[50rem] md:-asdasd-36 md:w-full overflow-x-hidden  '>
              <motion.div

               className='md:flex md:justify-center'>

                <Info className=' '

                />
              </motion.div>

            </section>

            <section className="bg-[#fff] mt-12 md:z-40 h-[75vh] md:h-auto relative text-center -translate-y-1 max-w-screen-sm">
              <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} className='' />
            </section>



            <section className="lg:max-w-[60vw] m-auto  relative  bg-[#fff] md:z-0 z-50 -translate-y-2">
              <Regalo />
            </section>

            <section className='bg-[#fff] -translate-y-4'>
              <Footer />
              {/* <Footermio /> */}
            </section>
          </div>
          <div className=" relative bottom-0 py-4 text-center w-screen lg:w-full text-white z-50 bg-neutral-900">
            © 2023 Copyright: Federico Blautzik
          </div>
        </main>
      </>

    )
  }

}

export default Invitacion


export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("quince", params.uid);
  console.log(article)
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
      return `/4/${doc.uid}/`
    } else {
      return `false`
    }
  }


  return {
    paths: articles.map((article) => prismic.asLink(article, { linkResolver })),
    fallback: false,
  };
}

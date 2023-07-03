import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/2/Header';
import Image from 'next/image';
import Countdown from '@/components/2/Countdown';
import Info from '@/components/2/Info';
import Gallery from '@/components/2/Gallery';
import Regalo from '@/components/1/Regalo';
import Footer from '@/components/1/Footer';
import ondas from '../../../public/img_ondas02.svg'

const Invitacion = ({article}) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        opacity: 0.7,
        position: 'relative',
        top: '-140px',
        background: '#EFEDE7'
      }
  
  if(article){
      return (
        <>
        <Head>
          <title>
            {article.data.title}
          </title>
          <meta property="og:image" content={prismic.asImageSrc(article.data.foto)} />
          <meta property="og:description" content={article.data.frase} />
  
        </Head>
        
        <main className="bg-[#EFEDE7] w-screen ">
  
          <section className='h-screen w-screen'>
  
            <Header
              title={article.data.title}
              coverImage={prismic.asImageSrc(article.data.foto)}
              date={article.data.fecha}
              content={article.data.frase}
              className='h-screen w-full'
            />
  
  
          </section>
  
          <section className='h-[45vh] mt-20 bg-[#EFEDE7]'>
            <Countdown date={article.data.fecha} />
          </section>
  
  
          <section className=' lg:h-screen lg:max-w-[60vw] m-auto bg-[#EFEDE7]'>
            <Info
  
            />
  
          </section>
          <section className='mt-40 h-0 lg:mt-0 lg:h-32 bg-[#EFEDE7] -z-20'>
            <div className="-z-10">
              <Image src={ondas} alt="Image description" style={imageStyle} />
            </div>
          </section>
          <section className="lg:relative block text-center p-2">
            <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria}/>
          </section>
          <section className="lg:max-w-[60vw] m-auto bg-[#EFEDE7]">
            <Regalo />
          </section>
  
          <section>
            <Footer />
            {/* <Footermio /> */}
          </section>
        </main>
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
         return `/2/${doc.uid}/`
        } else {
          return `false`
        }
       }
  
    return {
      paths: articles.map((article) => prismic.asLink(article, { linkResolver})),
      fallback: false,
    };
  }
  

import Head from "next/head";

import Header from "@/components/1/Header";
import Countdown from "@/components/1/Countdown";
import Info from "@/components/1/Info";
import ondas from '../../../public/img_ondas02.svg'
import Image from "next/image";
import Gallery from "@/components/1/Gallery";
import Regalo from "@/components/1/Regalo";
import Footer from "@/components/1/Footer";
import Footermio from "@/components/1/Footermio";
import { createClient } from "@prismicio/client";






export default function Article({ article }) {

  const imageStyle = {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    opacity: 0.7,
    position: 'relative',
    top: '-140px',
    background: '#EFEDE7'
  }

  return (
  <>
    
    <Head>
        <title>
          {prismic.asText(article.data.title)}
        </title>
        <meta property="og:image" content={prismic.asImageSrc(article.data.featuredImage)} />
        <meta property="og:description" content="Nos Casamos y queremos compartir este momento con vos!" />

      </Head>
      <main className="bg-[#EFEDE7]">

        <section className='h-screen'>

          <Header
            title={article.data.title[0].text}
            coverImage={prismic.asImageSrc(article.data.featuredImage)}
            date={article.data.fechaEvento}
            content={article.data.frase}
            />


        </section>

        <section className='h-[45vh] mt-20 bg-[#EFEDE7]'>
          <Countdown date={article.data.fechaEvento} />
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
          <Gallery />
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
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("quince", params.uid);
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("quince");

  return {
    paths: articles.map((article) => prismic.asLink(article)),
    fallback: false,
  };
}

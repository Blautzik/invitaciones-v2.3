
import Head from "next/head";

import Header from "@/components/1/Header";
import Countdown from "@/components/1/Countdown";
import Info from "@/components/1/Info";
import Image from "next/image";
import Gallery from "@/components/1/Gallery";
import Regalo from "@/components/1/Regalo";
import Footer from "@/components/1/Footer";
import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import { DotLottiePlayer } from "@dotlottie/react-player";


export default function Article({ article }) {

  if (article) {
    return (
      <>
        <Head>
          <title>
            {article.data.title}
          </title>
          <meta property="og:image" content={prismic.asImageSrc(article.data.featuredImage)} />
          <meta property="og:description" content="Nos Casamos y queremos compartir este momento con vos!" />
        </Head>



        <main className="bg-[#EFEDE7] flex flex-col justify-center items-center">

          <section className='h-screen'>

            <Header
              title={article.data.title}
              coverImage={prismic.asImageSrc(article.data.foto)}
              date={article.data.fecha}
              content={article.data.frase}
            />


          </section>

          <section className='h-[45vh] mt-20 bg-[#EFEDE7]'>
            <Countdown date={article.data.fecha_evento} />
          </section>


          <section className=' m-auto bg-[#EFEDE7]'>
            <Info

            />

          </section>



          <section className="text-center p-2">
            <Gallery />
          </section>


          <section className="m-auto ">
            <Regalo />
          </section>

          <section className="block">
            <Footer />


          </section>


          <section className="h-24 mt-8">

            <a href='https://janoseventos.com' target='_blank'>
              <Image
                src={'https://res.cloudinary.com/fedexx/image/upload/v1692357541/invi/LOGO_PNG_HORIZONTAL_VIOLETA_iwuny5.png'}
                width={250}
                height={100}
                quality={25}
                alt='logo'
              />

            </a>
          </section>


                    
          <div className="w-full ">
            <DotLottiePlayer
              src='/flores.lottie'
              autoplay
              loop
            >
            </DotLottiePlayer>
          </div>

        </main>

      </>
    )
  }

}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("boda", params.uid);
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("boda");

  const linkResolver = (doc) => {
    if (doc.type === 'boda') {
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





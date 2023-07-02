import React from 'react'
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import Head from 'next/head';
import Header from '@/components/3/Header';
import Image from 'next/image';
import Countdown from '@/components/3/Countdown';
import Info from '@/components/3/Info';
import Gallery from '@/components/3/Gallery';
import Regalo from '@/components/1/Regalo';
import Footer from '@/components/1/Footer';
import ondas from '../../../public/img_ondas02.svg'

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

                <main className="bg-[#f6f2e3] w-screen ">

                    <section className='h-screen w-screen'>

                        <Header
                            title={article.data.title}
                            coverImage={prismic.asImageSrc(article.data.foto)}
                            date={article.data.fecha}
                            content={article.data.frase}
                            className='h-screen w-full'
                        />


                    </section>

                    <section className='h-[45vh] mt-20 bg-[#f6f2e3]'>
                        <Countdown date={article.data.fecha} />
                        <div className='w-full h-24 translate-y-32'>

                            <img className='asdasdasdasdasdasdasdasdasdasdas' src='https://www.fixdate.io/modelo-invitacion/95/img/curva02.png' />
                        </div>
                    </section>


                    <section className='relative lg:h-screen lg:max-w-[60vw] m-auto bg-[#f6f2e3]  pb-24'>
                        <Info className='bg-[#f6f2e3] '

                        />

                    </section>

                    <section className="bg-[#f6f2e3] relative text-center pb-24 -translate-y-4">
                        <Gallery imagenes={article.data.galeria} titulo={article.data.titulo_galeria} className=''/>
                    </section>



                    <section className="lg:max-w-[60vw] m-auto  relative lg:h-screen bg-[#f6f2e3] z-50 pt-10 -translate-y-6">
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


    return {
        paths: articles.map((article) => prismic.asLink(article)),
        fallback: false,
    };
}

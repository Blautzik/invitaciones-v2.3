import Header from '@/components/1/Header';
import { getGoogleDriveImageUrl, getOptimizedGoogleDriveImageUrl } from '@/helpers';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// ... (Countdown component remains the same)
const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`grid grid-cols-4 gap-4 ${comfortaa.className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-4xl font-bold text-gray-800">{value}</div>
          <div className="text-sm text-slate-500">{unit}</div>
        </div>
      ))}
    </div>
  );
};


const WeddingInvitation = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!article) {
    return <div>Invitation not found</div>;
  }

  const {
    nombre,
    fecha,
    salon,
    dress_code,
    ceremonia,
    fecha_ceremonia,
    hora,
    lugar,
    direccion_ceremonia,
    foto_portada,
    foto_agendar,
    foto_regalos,
    frase_regalos,
    cbu,
    alias,
    titular,
    galeria,
    form_id
  } = article;

  // Process images
  const portada = foto_portada ? getGoogleDriveImageUrl(foto_portada) : '';
  const thumb = foto_portada ? getOptimizedGoogleDriveImageUrl(foto_portada) : '';
  const agendarImage = foto_agendar ? getGoogleDriveImageUrl(foto_agendar) : '';
  const regalosImage = foto_regalos ? getGoogleDriveImageUrl(foto_regalos) : '';
  const galeriaImages = galeria ? galeria.split(',').map(url => getGoogleDriveImageUrl(url.trim())) : [];

  // Format date
  const formattedDate = new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        {/* ... (Head content remains the same) */}
      </Head>

      <div className="relative min-h-screen">
        {!imageError && (
          <div className="fixed inset-0 z-0">
            <Image
              src={portada}
              layout="fill"
              objectFit="cover"
              quality={100}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {imageError && (
          <div className="fixed inset-0 bg-gray-200 z-0">
            {/* Fallback content */}
          </div>
        )}
        <main className={`relative z-10 min-h-screen ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          <div className="container mx-auto px-4 py-8">
            <FadeInSection>
              <section className={`text-center py-12 ${alegreya.className} border-4 border-gray-800 rounded-lg p-6 bg-white bg-opacity-80`}>
                <h1 className="text-7xl font-bold text-gray-800 mb-4">{nombre}</h1>
                <p className="text-3xl text-gray-800">{formattedDate}</p>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className={`text-center py-12 ${minion.className} border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80`}>
                <h2 className="text-4xl font-semibold text-gray-800 mb-8">¿Cuánto falta?</h2>
                <Countdown targetDate={fecha} />
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className={`text-center py-12 ${openSans.className} border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80`}>
                <p className="text-xl text-gray-800 mb-8">
                  Hoy comenzamos una nueva historia y queremos festejarlo con vos
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ceremonia y Fiesta</h3>
                    <p className="text-gray-800">
                      {ceremonia && (
                        <>
                          Ceremonia: {fecha_ceremonia} {hora}<br />
                          Lugar: {lugar}<br />
                          Dirección: {direccion_ceremonia}<br /><br />
                        </>
                      )}
                      Fiesta: {salon}<br />
                    </p>
                    <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors">
                      ¿Cómo llegar?
                    </button>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Regalo</h3>
                    {regalosImage && (
                      <Image
                        src={regalosImage}
                        alt="Regalos"
                        width={200}
                        height={200}
                        className="mb-4 mx-auto"
                      />
                    )}
                    <p className="text-gray-800">
                      {frase_regalos}<br /><br />
                      CBU: {cbu}<br />
                      Alias: {alias}<br />
                      Titular: {titular}
                    </p>
                  </div>
                </div>
              </section>
            </FadeInSection>

            <FadeInSection>
              <section className={`text-center py-12 ${roboto.className} border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80`}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dress code</h3>
                <p className="text-xl text-gray-800">{dress_code}</p>
              </section>
            </FadeInSection>

            {agendarImage && (
              <FadeInSection>
                <section className="text-center py-12 border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80">
                  <h3 className={`text-2xl font-semibold text-gray-800 mb-4 ${comfortaa.className}`}>Agendar Evento</h3>
                  <Image
                    src={agendarImage}
                    alt="Agendar Evento"
                    width={300}
                    height={300}
                    className="mx-auto"
                  />
                </section>
              </FadeInSection>
            )}

            <FadeInSection>
              <section className={`text-center py-12 ${openSans.className} border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80`}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Confirma tu asistencia</h3>
                <p className="text-gray-800 mb-4">Agradecemos que confirmes tu asistencia.</p>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors">
                  Confirmar asistencia
                </button>
              </section>
            </FadeInSection>

            {galeriaImages.length > 0 && (
              <FadeInSection>
                <section className="text-center py-12 border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80">
                  <h3 className={`text-2xl font-semibold text-gray-800 mb-8 ${alegreya.className}`}>Galería</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galeriaImages.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Galería ${index + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </section>
              </FadeInSection>
            )}

            <FadeInSection>
              <section className={`text-center py-12 ${minion.className} border-4 border-gray-800 rounded-lg p-6 mt-8 bg-white bg-opacity-80`}>
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">¡TE ESPERAMOS!</h2>
                <h3 className="text-6xl font-bold text-gray-800 mb-8">{nombre}</h3>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors mb-4">
                  PDF RECUERDO
                </button>
                <p className="text-sm text-slate-500">
                  @2024 Invitaciones virtuales - Todos los derechos reservados
                </p>
              </section>
            </FadeInSection>
          </div>
        </main>
      </div>
    </>
  );
};

export default WeddingInvitation;



export async function getStaticProps({ params, previewData }) {
    const { uid } = params; 

    if (!uid) {
        return {
            notFound: true,
        };
    }

    const response = await fetch('https://script.google.com/macros/s/AKfycbwkiLCPIUWZt57bEVdlwyOKRW6C36etkeckMHgrczFYlLD06qFXM5JRpTSGpJBWEdM/exec');

    if (!response.ok) {
        return {
            notFound: true,
        };
    }

    const articles = await response.json();

    // Log de los artículos obtenidos para verificación


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
    console.log(article)

    // Log de los datos del artículo para verificación


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

    const res = await fetch('https://script.google.com/macros/s/AKfycbwkiLCPIUWZt57bEVdlwyOKRW6C36etkeckMHgrczFYlLD06qFXM5JRpTSGpJBWEdM/exec');
    const posts = await res.json();


    if (!Array.isArray(posts) || posts.length === 0) {
        return {
            paths: [],
            fallback: false,
        };
    }

    const paths = posts
        .filter(post => post.url) // Asegúrate de filtrar los posts que tienen el nombre definido
        .map(post => ({
            params: { uid: String(post.url) }, // Asegúrate de que el parámetro uid sea una cadena
        }));

    // Log de las rutas generadas para verificación
    console.log('BODA Paths:', paths);

    return { paths, fallback: false };
}
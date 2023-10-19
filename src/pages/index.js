import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FullscreenSlider from '@/components/FulscreenSlider';
import Servicios from '@/components/Servicios';
import { amatic, roboto } from '../utils/fonts';

const smartphoneMockup = 'https://res.cloudinary.com/fedexx/image/upload/v1696787444/invi/pngwing.com_ddzl1w.png';

// Replace with the provided Cloudinary URL for the product images
const productImageURL = 'https://res.cloudinary.com/fedexx/image/upload/v1696788282/invi/Captura_de_pantalla_2023-10-08_150359_pnbmyt.png';

function ProductCard({ product }) {
  return (
    <div className="w-72 mx-auto bg-white p-4 rounded-lg shadow-md relative flex flex-col justify-center items-center">
      {/* Smartphone mockup with product image */}
      <div
        className="absolute inset-0 flex pt-3 justify-center"
      >
        <img
          src={smartphoneMockup}
          alt="Smartphone Mockup"
          className="w-auto h-48 "
        />
      </div>
      <img
        src={productImageURL} // Use the provided Cloudinary URL for the product image
        alt={product.name}
        className="max-h-[11.1rem] mx-auto mb-7"
      />
      <h3 className={`${amatic.className} text-slate-900 font-bold text-center text-2xl leading-[0.7]`}>{product.name}</h3>
      <ul className="text-gray-600 list-disc mt-3 max-w-[75%]">{product.description.map((e) => <li className={`${roboto.className} md:w-8/12 text-sm `}>{e}</li>)}</ul>
        <div className={`${roboto.className} bg-black text-white flex justify-evenly items-cente text-[14px] font-[600] px-6 py-4 rounded-full w-[75%] z-50`}>
      <a href={product.demo}
      >
        VER DEMO
        </a>
        </div>
    </div>
  );
}




function LandingPage() {
  const products1 = [
    {
      id: 1,
      name: 'Invitación interactiva',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 2,
      name: 'Invitación interactiva Completa',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre', 'Lista de regalos y datos para transferencias', 'Album de fotos con slider.', 'Cuenta Regresiva'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 3,
      name: 'Invitación interactiva VIP',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre', 'Lista de regalos y datos para transferencias', 'Album de fotos con slider.', 'Cuenta Regresiva', 'selección de preferencias de menú para los invitados', 'sugerencia de canciones', 'wall de Instagram con tu #hashtag'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 4,
      name: 'Adicionales',
      description: ['Video', 'musica de fondo', 'album de fotos extendido(hasta 18 fotos)'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
  ];

  const products2 = [
    {
      id: 5,
      name: 'Product 5',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 6,
      name: 'Product 6',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre', 'Lista de regalos y datos para transferencias', 'Album de fotos con slider.', 'Cuenta Regresiva'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 7,
      name: 'Product 7',
      description: ['Foto con presentación', 'ubicación de la ceremonia', 'dirección de la fiesta', 'confirmación de asistencia', 'Frase y Foto de cierre', 'Lista de regalos y datos para transferencias', 'Album de fotos con slider.', 'Cuenta Regresiva', 'selección de preferencias de menú para los invitados', 'sugerencia de canciones', 'wall de Instagram con tu #hashtag'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
    {
      id: 8,
      name: 'Product 8',
      description: ['Video', 'musica de fondo', 'album de fotos extendido(hasta 18 fotos)'],
      demo: 'https://www.invitacionesjanos.com.ar/1/vicky'
    },
  ];

  const slides = [
    {
      id: 1,
      title: 'Invitaciones Interactivas',
      description: 'Description for Product 5',
      bgImg: 'https://res.cloudinary.com/fedexx/image/upload/v1695161045/regalos-chicas-15-anos-ideas_qzipkj.webp'
    },
    {
      id: 2,
      title: 'Tarjetas Movedizas',
      description: 'Description for Product 5',
      bgImg: 'https://res.cloudinary.com/fedexx/image/upload/v1694460733/A-1191-480x543_gjlyce.jpg'
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>


      <FullscreenSlider slides={slides} />
      <Servicios />



      {/* Product Slider 1 */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container mx-auto">
          <h2 className={`${amatic.className} text-slate-900  text-5xl leading-[0.7] text-center`}>BODAS</h2>
          <Slider {...sliderSettings} className="slider">
            {products1.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>

      {/* Product Slider 2 */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className={`${amatic.className} text-slate-900 text-5xl leading-[0.7] text-center`}>CUMPLEAÑOS DE QUINCE</h2>
          <Slider {...sliderSettings} className="slider">
            {products2.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const smartphoneMockup = 'https://res.cloudinary.com/fedexx/image/upload/v1696787444/invi/pngwing.com_ddzl1w.png';

// Replace with the provided Cloudinary URL for the product images
const productImageURL = 'https://res.cloudinary.com/fedexx/image/upload/v1696788282/invi/Captura_de_pantalla_2023-10-08_150359_pnbmyt.png';

function ProductCard({ product }) {
  return (
    <div className="w-64 mx-auto bg-white p-4 rounded-lg shadow-md relative">
      {/* Smartphone mockup with product image */}
      <div
        className="absolute inset-0 flex pt-2 justify-center"
        style={{
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)', // Create a rectangular frame effect
        }}
      >
        <img
          src={smartphoneMockup}
          alt="Smartphone Mockup"
          className="w-auto h-80"
        />
      </div>
      <img
        src={productImageURL} // Use the provided Cloudinary URL for the product image
        alt={product.name}
        className="max-h-[18.5rem] mx-auto"
      />
      <h3 className="text-xl font-semibold mb-2 mt-4">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}

function LandingPage() {
  const products1 = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
    },
  ];

  const products2 = [
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for Product 6',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description for Product 7',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description for Product 8',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Hero Section */}
      {/* ... (unchanged) ... */}

      {/* Product Slider 1 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
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
          <h2 className="text-3xl font-semibold text-center mb-8">New Arrivals</h2>
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
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export const SwiperGallery = ({ galeria }) => {
  return (
    <div className="max-w-full mx-auto">
<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  speed={800}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  }}
  pagination={false}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper h-[600px]"
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  loop={true}
>
  {galeria?.map((item, index) => (
    <SwiperSlide key={index} className="flex items-center justify-center" style={{width: '300px'}}>
      {({ isActive }) => (
        <div className={`
          w-[300px] h-[500px] overflow-hidden
          ${isActive ? 'z-20 scale-110' : 'z-10 opacity-90 '}
          transition-all duration-1000
        `}>
          <img 
            src={item} 
            alt={`foto-${index}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}
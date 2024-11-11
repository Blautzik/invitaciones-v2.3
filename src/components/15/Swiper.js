import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { PiXCircleLight } from "react-icons/pi";

export const SwiperGallery = ({ galeria, article }) => {
  let height = "h-[500px]"

  if(article.url == "Martu-y-Polo"){
    height = "h-[400px]"
  }


  return (
    <div className="mx-auto max-w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {galeria?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
            style={{ width: "300px" }}
          >
            {({ isActive }) => (
              <div
                className={`
                ${height} w-[300px] overflow-hidden
          ${isActive ? "z-20 scale-110" : "z-10 opacity-90 "}
          transition-all duration-1000
        `}
              >
                <img
                  src={item}
                  alt={`foto-${index}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

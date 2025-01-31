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
  let height = "h-[500px]";
  let bgimg = false;

  if (article.url == "Martu-y-Polo") {
    height = "h-[400px]";
  }

  if (article.url == "Mia-22-02") {
    bgimg =
      "https://res.cloudinary.com/fedexx/image/upload/v1738349672/WhatsApp_Image_2025-01-31_at_9.58.36_AM_kcmoyg.jpg";
  }

  return (
    <div className={`relative mx-auto min-h-[600px] max-w-full ${bgimg && "-mt-12"}`}>
      {bgimg && (
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            backgroundColor: "red", // Para debug
            backgroundImage: `url('${bgimg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            zIndex: -1,
          }}
        ></div>
      )}
      <div className="relative z-10 mx-auto max-w-full">
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
    </div>
  );
};

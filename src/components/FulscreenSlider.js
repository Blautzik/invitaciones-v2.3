'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './FullScreenSlider.module.css'
import { pacifico } from '@/utils/fonts';
import { useState } from 'react';

const FullscreenSlider = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dotsClass: styles['slick-dots'],
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setActiveSlide(next),
    };


    return (
        <div className='bg-slate-600'>

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <>
                        <div key={index} className="relative h-screen flex items-center justify-center">
                            <div className="text-white z-20 text-center flex flex-col items-center">
                                <h2 className={`${pacifico.className} text-slate-50 text-center text-6xl mb-6`}>Invitaciones Interactivas</h2>
                                <p className="text-lg my-2 w-9/12">{slide.text}</p>
                                <div className="mt-4">
                                    <button className="border-solid rounded-md border-2 border-white text-white px-4 py-2 mx-2 font-bold cursor-pointer">{slide.btn1}</button>
                                    <button className="border-solid rounded-md border-2 border-white text-white px-4 py-2 mx-2 font-bold cursor-pointer">{slide.btn2}</button>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ backgroundImage: `url(${slide.bgImg}) ` }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center -z-10 flex items-center justify-center text-center opacity-50 "
                        >
                        </div>
                    </>
                ))}
            </Slider>
            <div className={styles['slick-dots']}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles['slick-dot']} ${index === activeSlide ? styles['slick-active'] : ''}`}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default FullscreenSlider;
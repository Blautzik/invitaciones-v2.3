import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullscreenSlider = ({slides}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade:true, // Adjust the speed as needed
        autoplaySpeed: 1000,
    };


    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative h-screen flex items-center justify-center">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-75"
                        style={{ backgroundImage: `url(${slide.bgImg})` }}
                    ></div>
                    <div className="text-white z-10 text-center">
                        <h2 className="text-2xl m-0">{slide.title}</h2>
                        <p className="text-lg my-2">{slide.text}</p>
                        <div className="mt-4">
                            <button className="bg-white text-black px-4 py-2 mx-2 border-none cursor-pointer">Button 1</button>
                            <button className="bg-white text-black px-4 py-2 mx-2 border-none cursor-pointer">Button 2</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default FullscreenSlider;
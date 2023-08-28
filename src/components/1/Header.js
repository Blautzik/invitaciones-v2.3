
import { motion } from 'framer-motion';
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { great_vives, inter, roboto } from "../../utils/fonts";
import moment from "moment/moment";
import Image from 'next/image';

const Header = ({ coverImage, coverImagePc, title, date, content }) => {
    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        zIndex:0,
        opacity:0.7,
        backgroundColor:'#555',
    }

    const dateFormated = moment(date).format('DD-MM-YYYY')

    return (
        <div className="scroll-smooth">
            <div className="w-full h-screen  bg-cover ">
            <div className="absolute  top-0 left-0 w-full h-screen bg-cover bg-slate-800 "></div>
                <div className='md:hidden'>

                <Image
                    src={coverImage}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                    />
                </div>

                <div className='hidden md:block'>
                <Image
                    src={coverImagePc}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                    />
                </div>
                

                <div className="w-full h-full flex container relative mx-auto z-10">
                    <div className=" w-full items-center justify-center flex flex-wrap z-30">
                        <div className="w-full  px-4 ml-auto mr-auto text-center">
                            <div className="w-full">
                                <motion.div initial='hidden' animate='visible' variants={{
                                    hidden: {
                                        scale: .95,
                                        opacity: 0
                                    },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: .5,
                                            duration: .9
                                        }
                                    },
                                }} >

                                    <div className='flex justify-center mt-48'>
                                        <span className='border-b w-1/4 border-b-white h-4 mx-3'></span>
                                        <h3 className={`${roboto.className} text-gray-50 text-2xl`}>{dateFormated}</h3>
                                        <span className='border-b w-1/4 border-b-white h-4 mx-3'></span>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <h1 className={`${great_vives.className} text-gray-50 text-7xl `} >
                                            {title}
                                        </h1>
                                        <div className='border-b border-b-white w-9/12'></div>
                                        <h2 className={`${roboto.className} text-gray-50 text-2xl w-7/12 mt-10 pt-8`}>{content}</h2>
                                    </div>

                                </motion.div>
                                <div className="flex w-full justify-center globals-40 pt-24"> 
                                        <IoChevronDown className='animate-bounce text-4xl text-gray-50 z-50' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
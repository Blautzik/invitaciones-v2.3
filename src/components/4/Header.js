
import { motion } from 'framer-motion';
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { great_vives, inter, roboto, playFair } from "../../utils/fonts";
import moment from "moment/moment";
import Image from 'next/image';
import separador from '../../assets/curva_portada_horizontal.png'

const Header = ({ coverImage, title, date, content }) => {
    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        zIndex: 0,
        opacity: 0.7,
        backgroundColor: '#555',
    }

    const dateFormated = moment(date).format('DD-MM-YYYY')

    return (
        <div className=" h-screen ">

            <motion.div 
                initial={{
                    opacity:0,
                    y:150
                }}
                whileInView={{
                    opacity:1, 
                    y:0
                }}
                className="relative top-0 w-full h-3/5 bg-center bg-cover ">
                <div className=" top-0 w-full h-full bg-center bg-cover bg-slate-800 foto"></div>
                <Image
                    src={coverImage}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                    
                />
                <div className='absolute bottom-0 left-0 bg-footer-texture h-24 w-full z-50 bg-cover'></div>
            </motion.div>
            <div className='w-full h-full bg-[#fff]'>
                <div className='w-full flex justify-center  pt-14'>
                    <div className='flex w-full justify-center '> 
                        <span className='border-b w-1/4 border-b-[#3b1b55] h-5 mx-3'></span>
                        <h3 className={`${playFair.className} text-slate-600 text-2xl mb-6`}>{dateFormated}</h3>
                        <span className='border-b w-1/4 border-b-[#3b1b55] h-5 mx-3'></span>
                    </div>
                </div>

                <div className='bg-[#fff] text-center h-full'>
                    <h1 className={`${playFair.className} text-slate-600 text-center text-7xl mb-2 first-letter:`}>{title}</h1>
                    <h3 className={`${playFair.className} text-[#3b1b55] text-center text-4xl mb-6`}>Mis 15 años</h3>
                    <p className={`${playFair.className} text-slate-600 text-center text-xl mb-6 mx-7`}>{content}</p>
                </div>
            </div>
                
                    

            

        </div>
    )
}

export default Header




{/* <div className="w-full flex container relative mx-auto z-10">
<div className=" w-full items-center justify-center flex flex-wrap z-30">
    <div className="w-full lg:w-7/12 lg:max-w-7/12 px-4 ml-auto mr-auto text-center">
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

                
                <div className='flex flex-col items-center'>
                    <h1 className={`${great_vives.className} text-gray-50 text-7xl `} >
                        {title}
                    </h1>
                    <h2 className={`${roboto.className} text-amber-300 text-4xl mb-6`}>Mis 15 años</h2>
                    <div className='border-b border-b-white w-9/12'></div>
                    <h2 className={`${roboto.className} text-gray-50 text-2xl w-7/12 mt-10 pt-8`}>{content}</h2>
                </div>

            </motion.div>
            <div className="flex w-full justify-center globals-40">
                <IoChevronDown className='animate-bounce text-4xl text-gray-50 z-50' />
            </div>
        </div>
    </div>
</div> */}
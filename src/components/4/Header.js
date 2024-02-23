
import { motion } from 'framer-motion';
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { great_vives, inter, roboto, playFair, twcen } from "../../utils/fonts";
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

            <div 

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
            </div>
            <div className='w-full h-full bg-[#fff]'>
                <div className='w-full flex justify-center  pt-14'>
                    <div className='flex w-full justify-center '> 
                        <span className='border-b w-1/4 border-b-[#3b1b55] h-5 mx-3'></span>
                        <h3 className={`${playFair.className} text-slate-600 text-2xl mb-6`}>{dateFormated}</h3>
                        <span className='border-b w-1/4 border-b-[#3b1b55] h-5 mx-3'></span>
                    </div>
                </div>

                <div className='bg-[#fff] text-center h-full'>
                    <h1 className={`${twcen.className} text-slate-600 text-center text-8xl leading-[0.7]`}>{title}</h1>
                    <h3 className={`${playFair.className} text-[#3b1b55] text-center text-3xl mb-6`}>MIS <span className='relative bottom-1'>15</span> AÑOS</h3>
                    <p className={`${playFair.className} text-slate-600 text-center text-xl mb-6 mx-7`}>{content}</p>
                </div>
            </div>           

        </div>
    )
}

export default Header



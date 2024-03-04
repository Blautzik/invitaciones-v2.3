import Image from 'next/image'
import { PiGiftThin } from "react-icons/pi";
import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';


const Regalos = ({ article }) => {



    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        opacity: 0.65,
        backgroundColor: '#fff',
    }

    const iconStyle = {
        filter: 'invert(1)',
    }

    return (
        <div className=' w-full'>
            <div className="  w-full flex flex-col relative items-center justify-center">
                <Image
                    src={article.foto_regalos}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className='mt-4 text-center mx-8 flex flex-col items-center text-white opacity-100 z-30'>
                    <h3 className={`${comfortaa.className} ${article.letra_oscura && 'text-slate-900' } text-3xl mt-2 mb-2 font-[700]`}>Regalos</h3>

                    <PiGiftThin className={`${article.letra_oscura && 'text-slate-900'} text-8xl`} />
                    {article.alias ?
                        <div className={`${openSans.className} ${article.letra_oscura && 'text-slate-900'} font-[300] text-sm leading-5`}>
                            {article.frase_regalos}
                        </div>
                        :
                        <div className={`${openSans.className}  ${article.letra_oscura && 'text-slate-900'} font-[400] leading-5 mt-4 mb-8`}>
                            {article.frase_regalos}
                        </div>
                    }
                </div>
            </div>


        </div>
    )
}

export default Regalos



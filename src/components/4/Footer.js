
import { great_vives } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'




const Footer = ({frase_cierre, sin_janos}) => {
    return (
        <div className='flex flex-col items-center justify-center text-center  '>
            
            
            <h2 className={`${great_vives.className} text-gray-600 md:text-5xl text-4xl mx-10 `}>
               { frase_cierre || "Gracias por acompañarme en este momento tan importante!!"}
            </h2>
            { !sin_janos &&
            <a href='https://janoseventos.com' target='_blank'>
                <div className='object-contain mt-8 mb-8'>
                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1692357541/invi/LOGO_PNG_HORIZONTAL_VIOLETA_iwuny5.png'}
                        width={250}
                        height={100}
                        quality={25}
                        alt='logo'
                    />

                </div>
            </a>}
        </div>
    )
}

export default Footer
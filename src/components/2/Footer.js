
import { great_vives } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'


const Footer = ({frase_cierre, sin_janos, logo}) => {
    return (
        <div className='flex flex-col items-center justify-center text-center  '>
            

            {logo && 
                <img 
                className='object-contain w-1/2 md:w-1/6 -top-7 relative '
                src='https://res.cloudinary.com/fedexx/image/upload/v1717694547/Dise%C3%B1o_sin_t%C3%ADtulo_2_rri6fp.png'></img>
            }


            {
                !logo &&
                <h2 className={`${great_vives.className} text-gray-600 md:text-5xl text-4xl mx-10 `}>
                
               { frase_cierre || "Nos vemos !!"}
            </h2>

            }
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
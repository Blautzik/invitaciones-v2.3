
import { bride, comfortaa, great_vives, openSans } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'




const Footer = ({frase_cierre, sin_janos, form_id}) => {


    let tipo = great_vives.className
    let otra = false


    if (form_id == "1QnzLLfyqDlbbehwIJa7qPbEtpm16iZaEt8pI28cgW8k"){
        tipo = comfortaa.className
    }

    if (form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk"){
        frase_cierre = "Gracias por acompañarnos en este día tan especial."
        otra = "Tatiana y Andrés"
        tipo = openSans.className
    }




   
    return (
        <div className='flex flex-col items-center justify-center text-center  '>
            
            
            <h2 className={`${tipo}  ${otra ? "text-secondary-600" : "font-thin text-gray-700" } md:text-4xl text-xl mx-10 `}>
               { frase_cierre || "Gracias por acompañarnos en este momento tan importante!!"}
            </h2>
            <h2 className={`${tipo} ${otra ? "text-secondary-600 mt-3 mb-10" : "font-thin text-gray-700" }  md:text-4xl text-xl mx-10 `}>
               { otra && otra }
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
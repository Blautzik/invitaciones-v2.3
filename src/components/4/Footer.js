
import { comfortaa, great_vives, minion,  } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'




const Footer = ({frase_cierre, sin_janos, mfmf, mail, form_id }) => {

        let bg = "bg-white"
    let text = "text-slate-700"
    let whitespace_pre = false


    if(form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU"){
        bg="bg-black"
        text="text-[#eac759]"
    }

    if(frase_cierre == "La vida no se mide en minutos \n se mide en momentos \n ❤ \n Gracias por acompañarme!!"){
        whitespace_pre = "cierre"
    }


    return (
        <div className={`${bg} flex flex-col items-center justify-center text-center pb-8 pt-8 `}>
            
            {
                mail != 'bzerrizuela@gmail.com' &&
                <h2 className={`${mfmf == "formulario_simple" ? comfortaa.className : great_vives.className} ${mfmf == "formulario_simple" ? "hidden" :` ${text}  md:text-5xl text-4xl mx-10` } ${whitespace_pre && whitespace_pre} `}>
               { frase_cierre || "Gracias por acompañarme en este momento tan importante!!"}
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
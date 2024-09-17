
import { comfortaa, great_vives, minion,  } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'




const Footer = ({frase_cierre, sin_janos, mfmf, mail, form_id }) => {

        let bg = "bg-white"
    let text = "text-slate-700"


    if(form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU"){
        bg="bg-black"
        text="text-[#eac759]"
    }


    return (
        <div className={`${bg} flex flex-col items-center justify-center text-center `}>
            
            {
                mail != 'bzerrizuela@gmail.com' &&
                <h2 className={`${mfmf == "formulario_simple" ? comfortaa.className : great_vives.className} ${mfmf == "formulario_simple" ? "hidden" :` ${text}  md:text-5xl text-4xl mx-10` } `}>
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
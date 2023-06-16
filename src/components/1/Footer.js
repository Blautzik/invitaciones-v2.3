
import { great_vives } from '@/utils/fonts'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center mx-10'>
            <h2 className={`${great_vives.className} text-gray-600 md:text-5xl text-4xl `}>
                Gracias por acompañarnos en este momento tan importante!!
            </h2>
            <a href='https://janoseventos.com' target='_blank'>
                <img className='w-52 h-24' src='https://www.janoseventos.com/assets/img/logos/Logos-Janos-horizontal.png' layout='cover' alt='logojanos' />
            </a>
            <div className="py-4 text-center w-screen lg:w-full text-white  bg-neutral-900">
                © 2023 Copyright: Federico Blautzik
                
            </div>
        </div>
    )
}

export default Footer
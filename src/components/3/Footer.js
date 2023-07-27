
import { great_vives } from '@/utils/fonts'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center  -globals-36 bg-[#f6f2e3] mb:[-40rem] md:-mb-72'>
            <h2 className={`${great_vives.className} mt-16 text-gray-600 md:text-5xl text-4xl mx-10 `}>
                Gracias por acompañarnos en este momento tan importante!!
            </h2>
            <a href='https://janoseventos.com' target='_blank'>
                <img className='w-52 h-24' src='https://www.janoseventos.com/assets/img/logos/Logos-Janos-horizontal.png' layout='cover' alt='logojanos' />
            </a>
        </div>
    )
}

export default Footer
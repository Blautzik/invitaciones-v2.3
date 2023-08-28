
import { great_vives } from '@/utils/fonts'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center '>
            <h2 className={`${great_vives.className} text-gray-600 text-4xl mx-10`}>
                Gracias por acompañarnos en este momento tan importante!!
            </h2>

        </div>
    )
}

export default Footer
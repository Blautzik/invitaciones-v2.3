import Image from 'next/image'

import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from './Accordion';

const Regalos = () => {



    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        opacity: 0.35,
        backgroundColor: '#000',
    }

    const iconStyle = {
        filter: 'invert(1)',
    }

    return (
        <div className='h-screen w-full'>
            <div className="h-full  w-full flex flex-col relative items-center justify-between bg-gray-100">
                <Image
                    src={'https://res.cloudinary.com/fedexx/image/upload/v1695161045/regalos-chicas-15-anos-ideas_qzipkj.webp'}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className='mt-11 text-center mx-10 flex flex-col items-center text-gray-800 opacity-100 z-30'>

                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png'}
                        height={65}
                        width={65}
                        style={iconStyle}

                    />
                    <h3 className={`${comfortaa.className} text-2xl mt-6 mb-10 font-[700]`}>Regalos</h3>
                    <div className={`${openSans.className} font-[500] text-lg  leading-7`}>

                        Si querés podés hacerme un regalo realizando un depósito a la siguiente cuenta o acceder a la lista de regalos.

                    </div>
                </div>

                <div className={`${comfortaa.className} z-30 w-10/12 md:w-1/4 mb-24 opacity-70`}>
                    <Accordion open header="Datos Bancarios" className='bg-violeta'>
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            <p className='pb-2'><strong>Titular: </strong> Mia Borat</p>
                            <p className='pb-2'><strong>CBU:</strong> 5412312313214512 </p>
                            <p className='pb-2'><strong>Alias: </strong> mis.quince</p>
                            <p className='pb-2'><strong> CUIL: </strong> 20-123456789-2 <strong>DNI: </strong> 32.123.456</p>
                        </div>

                    </Accordion>
                    <Accordion open header="Lista de Regalos">
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            <p className='pb-2'><strong>Lista 1: </strong> Fravega</p>
                            <p className='pb-2'><strong>Lista 2: </strong> Avon </p>
                            
                        </div>

                    </Accordion>
                </div>
            </div>


        </div>
    )
}

export default Regalos
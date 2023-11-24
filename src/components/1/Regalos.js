import Image from 'next/image'

import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from './Accordion';

const Regalos = ({article}) => {



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
        <div className='h-screen w-full'>
            <div className="h-full  w-full flex flex-col relative items-center justify-between bg-gray-600">
                <Image
                    src={article.foto_regalos}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className='mt-11 text-center mx-10 flex flex-col items-center text-white opacity-100 z-30'>

                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png'}
                        height={65}
                        width={65}
                        style={iconStyle}

                    />
                    <h3 className={`${comfortaa.className} text-2xl mt-6 mb-2 font-[700]`}>Regalos</h3>
                    {article.cbu ?

                        <div className={`${openSans.className} font-[500] leading-7`}>
                       {article.frase_regalos}
                        </div>
                        :
                        <div className={`${openSans.className} font-[500] leading-7 mt-52`}>
                        {article.frase_regalos}
                        </div>
                    }
                    
                </div>

                <div className={`${comfortaa.className} z-30 w-10/12 md:w-1/4 mb-24 opacity-70`}>
                    {
                        article.cbu &&
                        <Accordion open header="Datos Bancarios" className='bg-violeta'>
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>
                            <p className='pb-2'><strong>CBU:</strong> {article.cbu} </p>
                            <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>
                            <p className='pb-2'><strong>DNI: </strong> {article.dni}</p>
                        </div>

                    </Accordion>
                    }
                    {article.lista_regalos &&
                        <Accordion open header="Lista de Regalos">
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            <p className='pb-2'><strong>Lista 1: </strong> Fravega</p>
                            <p className='pb-2'><strong>Lista 2: </strong> Avon </p>
                            
                        </div>
                    </Accordion>
                    }
                </div>
            </div>


        </div>
    )
}

export default Regalos
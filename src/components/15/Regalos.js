import Image from 'next/image'
import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from '../6/Accordion'

const Regalos = ({ article, foto_regalos }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
        opacity: 0.65,
        backgroundColor: '#fff',
    }

    const iconStyle = {
        filter: 'invert(1)',
    }



    return (
        <div className='h-screen w-full'>
            <div className="h-full w-full flex flex-col relative items-center justify-between bg-gray-600">
                <Image
                    src={foto_regalos}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className={`${article.mfmf === "regalo_sin_datos" ? 'pt-[72vh] ' : 'mt-6'} text-center mx-10 flex flex-col items-center text-white opacity-100 z-30 `}>
                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png'}
                        height={65}
                        width={65}
                        style={iconStyle}
                    />
                    <h3 className={`${comfortaa.className} text-2xl mt-4 mb-2 font-[700]`}>Regalos</h3>
                    <div className={`${openSans.className} font-[500] leading-5`}>
                        {article.frase_regalos}
                    </div>
                </div>
                <div className={`${comfortaa.className} z-30 w-10/12 lg:w-1/2 mb-24 opacity-70`}>
                    {article.alias && <Accordion open header="Datos Bancarios" bg={article.bg_color}>
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            {article.titular && <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>}
                            {article.cbu && <p className='pb-2'><strong>CBU: </strong> {article.cbu} </p>}
                            <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>
                            {article.dni && <p className='pb-2'><strong>DNI: </strong> {article.dni}</p>}
                        </div>
                    </Accordion>
                    }
                </div>
            </div>
        </div>
    )
}

export default Regalos
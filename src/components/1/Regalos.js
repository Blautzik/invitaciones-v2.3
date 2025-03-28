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
                <div className='mt-4 text-center mx-8 flex flex-col items-center text-white opacity-100 z-30'>

                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png'}
                        height={35}
                        width={35}
                        style={iconStyle}

                    />
                    <h3 className={`${comfortaa.className} text-xl mt-2 mb-2 font-[700]`}>Regalos</h3>
                    {article.alias ?

                        <div className={`${openSans.className} font-[300] text-sm leading-5`}>
                       {article.frase_regalos}
                        </div>
                        :
                        <div className={`${openSans.className} font-[400] leading-5 mt-44`}>
                        {article.frase_regalos}
                        </div>
                    }
                    
                </div>

                <div className={`${comfortaa.className} z-30 w-10/12 md:w-1/4 mb-24 opacity-70`}>
                    {
                        article.titular &&
                        <Accordion open header="Datos Bancarios" className='bg-violeta'>
                        <div className={`${openSans.className} text-sm opacity-100`}>
                            <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>
                            { article.cbu && <p className='pb-2'><strong>CBU/CVU:</strong> {article.cbu} </p>}
                            { article.alias && <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>}
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



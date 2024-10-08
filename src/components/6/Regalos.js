import Image from 'next/image'

import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from './Accordion';

const Regalos = ({ article }) => {



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
        <div className='h-screen w-full '>
            <div className="h-full w-full flex flex-col relative items-center justify-between " style={{ backgroundImage: `url(${article.fondo_regalos})`, backgroundSize:'cover', backgroundPosition:"center"  }}>
                <div className={`${article.regalo_sin_datos ? 'pt-[72vh] ' : 'mt-6'} text-center mx-10 flex flex-col items-center text-white opacity-100 z-30 `}>

                    <img
                        src="https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png"
                        height="65"
                        width="65"
                        style={iconStyle}
                    />
                    <h3 className={`${comfortaa.className} text-2xl mt-4 mb-2 font-[700]`}>Regalos</h3>
                    <div className={`${openSans.className} font-[500] leading-5`}>
                        {article.frase}
                    </div>
                </div>

                <div className={`${comfortaa.className} z-30 w-10/12 md:w-1/4 mb-24 opacity-70`}>

                    {article.cbu && <Accordion open header="Datos Bancarios" bg={article.bg_color}>
                        <div className={`${openSans.className} text-sm font-thin opacity-100`}>
                            {article.titular_cuenta && <p className='pb-2'><strong>Titular: </strong> {article.titular_cuenta}</p>}
                            <p className='pb-2'><strong>CBU: </strong> {article.cbu} </p>
                            <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>
                            {article.dni && <p className='pb-2'><strong>CUIL: </strong> {article.dni}</p>}
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
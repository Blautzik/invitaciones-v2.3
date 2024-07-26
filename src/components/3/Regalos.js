import Image from 'next/image'
import { PiGiftThin } from "react-icons/pi";
import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from '../1/Accordion';


const Regalos = ({ article }) => {



    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        opacity: 1,
        backgroundColor: '#fff',
    }

    const iconStyle = {
        filter: 'invert(1)',
    }

    if(!article.cbu){
        return (
            <div className=' w-full'>
                <div className="  w-full flex flex-col relative items-center justify-center bg-gray-600">
                    <Image
                        src={article.foto_regalos}
                        fill
                        quality={100}
                        style={imageStyle}
                        alt='portada'
                    />
                    <div className='mt-4 text-center mx-8 flex flex-col items-center text-white opacity-100 z-30'>
    
    
                        <h3 className={`${comfortaa.className} text-3xl mt-2 mb-2 font-[700]`}>Regalos</h3>
    
                        <PiGiftThin className='text-8xl white' />
                        {article.alias ?
    
                            <div className={`${openSans.className} font-[300] text-sm leading-5`}>
                                {article.frase_regalos}
                            </div>
                            :
                            <div className={`${openSans.className} font-[400] leading-5 mt-4 mb-8`}>
                                {article.frase_regalos}
                            </div>
                        }
    
    
    
                    </div>
    
    
                </div>
    
    
            </div>
        )
    }else if(!article.frase_regalos){
        return (
<div className='w-full'>
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
                    
                </div>

                <div className={`${comfortaa.className} z-30 w-10/12 md:w-1/4 mb-24 mt-24 opacity-70`}>
                    {
                        article.titular &&
                        <Accordion open={true} header="Datos Bancarios" className='bg-violeta'>
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
    }else 
    
    
    {
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

    
}

export default Regalos



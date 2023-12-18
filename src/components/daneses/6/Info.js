import React from 'react'
import { PiMapPin } from 'react-icons/pi'
import { comfortaa, openSans } from '../../../utils/fonts';
import Image from 'next/image';
import ceremoniaIcon from '../../../../public/fiestas-11.png'
import fiestaIcon from '../../../../public/fiestas-12.png'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import suitIcon from '../../../../public/suit (1).png'
import ropa from '../../../../public/ropa.png'

const Info = ({ article }) => {

    const fechaCeremonia = new Date(article.fecha_evento)
    fechaCeremonia.setDate(fechaCeremonia.getDate() + 1);
    const formattedDate = format(fechaCeremonia, "EEEE d 'de' MMMM", { locale: es });




    const textito = `${openSans.className} text-gray-600 tracking-wider font-[500]`
    return (
        <div className='flex md:flex-row md:justify-evenly md:items-start flex-col'>
            <div className='md:mt-4 flex flex-col items-center justify-center text-center'>
                <div className='h-16 w-16 relative mb-6'>
                    <Image
                        src={ceremoniaIcon}
                        fill
                    />
                </div>
                <h3 className={`${comfortaa.className} text-slate-700 sm:text-2xl xs:text-xl mb-10 font-[700] text-center`}>Vielsen</h3>

                {
                    article.foto_ceremonia ?
                        <Image
                            src={article.foto_ceremonia}
                            height={10}
                            width={300}
                            style={{
                                objectFit: 'cover',
                                position: 'relative',
                                marginBottom: 48,
                                borderRadius: 5
                            }}
                        /> :
                        <Image
                            src='https://res.cloudinary.com/fedexx/image/upload/v1694286992/03-ceremonia-1_reblw1.jpg'
                            height={10}
                            width={300}
                            style={{
                                objectFit: 'cover',
                                position: 'relative',
                                marginBottom: 48,
                                borderRadius: 5
                            }}
                        />
                }

                <div className={`${openSans.className}my-4 text-center leading-7`}>

                    <p className={textito}><strong>Dato </strong> Fredag d. 8. marts 2040 </p>
                    <p className={textito}><strong>Tidspunkt: </strong> KI 16:30</p>
                    <p className={textito}><strong>Sted: </strong>Katedralen i San Isidro </p>
                    <p className={textito}>Av. del Libertador 16200. San Isidro. Buenos Aires provinsen</p>
                </div>
                <a href={article.ubicacion_civil} target='_blank'>
                    <button className={`${openSans.className} flex flex-row py-4 px-8 mt-6 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                        <PiMapPin className=' text-lg mr-1' /> Anvisning til kirken
                    </button>
                </a>
            </div>





            <div className='md:mt-4 flex flex-col items-center justify-center text-center'>
                <div className='h-16 w-16 relative mb-6'>
                    <Image
                        src={fiestaIcon}
                        fill
                    />

                </div>
                <h3 className={`${comfortaa.className} text-slate-700 sm:text-2xl xs:text-xl  mb-10 font-[700] text-center`}>Festen</h3>

                <Image
                    src={article.foto_salon}
                    height={10}
                    width={300}
                    style={{
                        objectFit: 'cover',
                        position: 'relative',
                        marginBottom: 48,
                        borderRadius: 5
                    }}
                />

                <div className={`${openSans.className}my-4 text-center w-10/12 leading-7`}>

                    <p className={textito}><strong>Dato: </strong>Fredag d. 8. marts 2024 </p>
                    <p className={textito}><strong>Sted: </strong> Palacio Sans Souci</p>
                    <p className={textito}>Paz 705, Victoria, Buenos Aires provinsen</p>

                </div>

                <div className='flex flex-col items-center mt-6'>
                    <h3 className={`${openSans.className} text-xl text-center w-68 text-slate-600`}> Dress Code: </h3>
                    <h4 className={`${openSans.className} text-md text-center w-68 font-bold text-slate-800`}>Elegant</h4>
                    <div className='h-12 w-12 relative m-6'>
                        {
                            article.otro_iconito?
                            <Image
                            src={ropa}
                            fill
                            />
                            :
                            <Image
                            src={suitIcon}
                            fill
                            />
                        }
                    </div>
                    
                </div>


                <a href={article.ubicacion} target='_blank'>


                    <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                        <PiMapPin className=' text-lg mr-1' /> 
                        Anvisning til festen</button>
                </a>
            </div>
        </div>
    )
}

export default Info
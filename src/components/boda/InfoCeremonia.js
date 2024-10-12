import React from 'react'
import { PiMapPin } from 'react-icons/pi'
import { comfortaa, openSans } from '../../utils/fonts';
import Image from 'next/image';
import ceremoniaIcon from '../../../public/fiestas-11.png'
import fiestaIcon from '../../../public/fiestas-12.png'
import { format, formatDistanceStrict } from 'date-fns'
import { es } from 'date-fns/locale'
import suitIcon from '../../../public/suit (1).png'
import ropa from '../../../public/ropa.png'
import { encontrarSalon } from '@/data/salones';

const InfoCeremonia = ({ article }) => {
    const fechaCeremonia = new Date(article.fecha);
    const formattedDate = fechaCeremonia.toLocaleDateString("es-ES", {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        timeZone: 'America/Argentina/Buenos_Aires'
    });

    const hora = fechaCeremonia.toLocaleTimeString("es-ES", {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires'
    });

    let foto_ceremonia = "https://res.cloudinary.com/fedexx/image/upload/v1701302507/jesi%20y%20maxi/descarga_mjuczu.jpg"

    const salon = encontrarSalon(article.salon);


    const link_maps = "https://maps.app.goo.gl/teqVKjJwCaPqGseT8"


    if (article.form_id == "1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM"){
        foto_ceremonia = "https://res.cloudinary.com/fedexx/image/upload/v1728739699/Imagen_de_WhatsApp_2024-10-11_a_las_14.27.55_88eddf8f_wozmzj.jpg"
      }

    const textito = `${openSans.className} text-gray-600 tracking-wider font-[500]`
    return (
        <div className='flex md:flex-row md:justify-evenly md:items-start flex-col'>


            {foto_ceremonia &&

                <div className='md:mt-4 flex flex-col items-center justify-center text-center'>
                    <div className='h-16 w-16 relative mb-6'>
                        <Image
                            src={ceremoniaIcon}
                            fill
                        />
                    </div>
                    <h3 className={`${comfortaa.className} text-slate-700 sm:text-2xl xs:text-xl mb-10 font-[700] text-center`}>{article.es_civil ? 'El Civil' : 'La Ceremonia'}</h3>

                    {
                        foto_ceremonia ?
                            <Image
                                src={foto_ceremonia}
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

                        <p className={textito}><strong>Fecha: </strong>{article.fecha_ceremonia} </p>
                        <p className={textito}><strong>Hora: </strong> {article.hora}</p>
                        <p className={textito}><strong>Lugar: </strong> {article.lugar}</p>
                        <p className={textito}>{article.direccion_ceremonia}</p>
                    </div>
                    <a href={link_maps} target='_blank'>
                        <button className={`${openSans.className} flex flex-row py-4 px-8 mt-6 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                            <PiMapPin className=' text-lg mr-1' />{article.es_civil ? "LLEGAR AL CIVIL" :  "Cómo Llegar "}
                        </button>
                    </a>
                </div>
            }

            <div className='md:mt-4 flex flex-col items-center justify-center text-center'>
                <div className='h-16 w-16 relative mb-6'>
                    <Image
                        src={fiestaIcon}
                        fill
                    />
                </div>
                <h3 className={`${comfortaa.className} text-slate-700 sm:text-2xl xs:text-xl  mb-10 font-[700] text-center`}>La Fiesta</h3>
                <Image
                    src={salon.foto_salon}
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

                    <p className={textito}><strong>Fecha: </strong> {formattedDate[0].toUpperCase()+formattedDate.slice(1,54)} </p>
                    {article.hora_fiesta_string !== 'sin' && <p className={textito}><strong>Hora: </strong>{hora}</p>}
                    <p className={textito}><strong>Salón: </strong> {article.salon}</p>
                    <p className={textito}>{salon.direccion}</p>

                </div>

                <div className='flex flex-col items-center mt-6'>
                    <h3 className={`${openSans.className} text-xl text-center w-68 text-slate-600`}> Dress Code </h3>
                    <h4 className={`${openSans.className} text-md text-center w-68 font-bold text-slate-800`}> {article.dress_code ? article.dress_code : "Elegante"} </h4>
                    <div className='h-12 w-12 relative m-6'>
                        {
                            article.otro_iconito ?
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


                <a href={salon.link_maps} target='_blank'>
                    <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                        <PiMapPin className=' text-lg mr-1' />
                        Cómo Llegar
                        </button>
                </a>
            </div>
        </div>
    )
}

export default InfoCeremonia
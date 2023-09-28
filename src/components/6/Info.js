import React from 'react'
import { PiMapPin } from 'react-icons/pi'
import { comfortaa, openSans } from '../../utils/fonts';
import Image from 'next/image';
import ceremoniaIcon from '../../../public/fiestas-11.png'
import fiestaIcon from '../../../public/fiestas-12.png'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'


const Info = ({ article }) => {

    const fechaCeremonia = new Date(article.fecha_evento)
    fechaCeremonia.setDate(fechaCeremonia.getDate() + 1);
    const formattedDate = format(fechaCeremonia, "EEEE d 'de' MMMM", { locale: es });
    console.log(formattedDate);



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
                <h3 className={`${comfortaa.className} text-slate-700 text-2xl mb-10 font-[700] text-center`}>La Ceremonia</h3>

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

                <div className={`${openSans.className}my-4 text-center leading-7`}>

                    <p className={textito}><strong>Fecha: </strong> {formattedDate} </p>
                    <p className={textito}><strong>Hora: </strong> {article.hora_string}</p>
                    <p className={textito}><strong>Lugar: </strong> {article.nombre_lugar_civil}</p>
                    <p className={textito}>{article.direccion_civil}</p>
                </div>

                <Image
                    src='https://res.cloudinary.com/fedexx/image/upload/v1694287632/suit_vrr9ez.png'
                    width={28}
                    height={28}
                    style={{
                        objectFit: 'cover',
                        position: 'relative',
                        opacity: 0.8,
                        marginBottom: 24,
                        marginTop: 12,
                    }}
                />

                <a href={article.ubicacion_civil} target='_blank'>
                    <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>

                        <PiMapPin className=' text-lg mr-1' /> LLEGAR A LA CEREMONIA

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
                <h3 className={`${comfortaa.className} text-slate-700 text-2xl mb-10 font-[700] text-center`}>La Fiesta</h3>

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

                    <p className={textito}><strong>Fecha: </strong> {formattedDate} </p>
                    <p className={textito}><strong>Hora: </strong>{article.hora_fiesta_string}</p>
                    <p className={textito}><strong>Salón: </strong> {article.salon}</p>
                    <p className={textito}>{article.direccion_salon}</p>
                </div>

                <Image
                    src='https://res.cloudinary.com/fedexx/image/upload/v1694287632/suit_vrr9ez.png'
                    width={28}
                    height={28}
                    style={{
                        objectFit: 'cover',
                        position: 'relative',
                        opacity: 0.8,
                        marginBottom: 24,
                        marginTop: 16,
                    }}
                />
                <a href={article.ubicacion} target='_blank'>

                <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                    <PiMapPin className=' text-lg mr-1' /> LLEGAR A LA FIESTA</button>
                </a>
            </div>
        </div>
    )
}

export default Info
import React from 'react'
import { FaChurch } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { PiMapPin } from 'react-icons/pi'
import { comfortaa, openSans } from '../../utils/fonts';
import Image from 'next/image';
import ceremoniaIcon from '../../../public/fiestas-11.png'
import fiestaIcon from '../../../public/fiestas-12.png'

const Info = () => {

    const textito = `${openSans.className} text-gray-600 tracking-wider font-[500]`
    return (
        <div className='flex md:flex-row md:justify-evenly md:items-start flex-col'>
            <div className='md:mt-4 flex flex-col items-center justify-center'>
                <div className='h-16 w-16 relative mb-6'>
                <Image
                    src={ceremoniaIcon}
                    fill
                />

                </div>
                <h3 className={`${comfortaa.className} text-slate-700 text-2xl mb-10 font-[700]`}>La Ceremonia</h3>

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

                    <p className={textito}><strong>Fecha: </strong> Domingo 16 de Julio</p>
                    <p className={textito}><strong>Hora: </strong> 15:00 hs</p>
                    <p className={textito}><strong>Lugar: </strong> Nuestra señora del Caramelo</p>
                    <p className={textito}>Marcelo T. de Alvear 2465, CABA</p>
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
                            marginTop:12,
                        }}
                    />
                
                <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                    <PiMapPin className=' text-lg mr-1' /> LLEGAR A LA CEREMONIA</button>
            </div>













            <div className='md:mt-4 flex flex-col items-center justify-center'>
            <div className='h-16 w-16 relative mb-6'>
                <Image
                    src={fiestaIcon}
                    fill
                />

                </div>
                <h3 className={`${comfortaa.className} text-slate-700 text-2xl mb-10 font-[700]`}>La Fiesta</h3>

                <Image
                    src='https://res.cloudinary.com/fedexx/image/upload/v1694290457/03-fiesta-1_mqpuab.jpg'
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

                    <p className={textito}><strong>Fecha: </strong> Domingo 16 de Julio</p>
                    <p className={textito}><strong>Hora: </strong>18:00 hs</p>
                    <p className={textito}><strong>Lugar: </strong> Jano's Vicente Lopez</p>
                    <p className={textito}>Hipoloto Yirigoyen, 803, Vicente Lopez, Bs As.</p>
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
                            marginTop:16,
                        }}
                    />
                
                <button className={`${openSans.className} flex flex-row py-4 px-8 bg-black tracking-wide text-sm rounded-full text-gray-50 text-center mb-24 max-w-[280px] font-[500]`}>
                    <PiMapPin className=' text-lg mr-1' /> LLEGAR A LA FIESTA</button>
            </div>
        </div>
    )
}

export default Info
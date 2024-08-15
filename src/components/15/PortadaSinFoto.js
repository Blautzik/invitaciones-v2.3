import React from 'react'
import { openSans, Amsterdam, ClickerScript } from '../../utils/fonts';
import Image from 'next/image';
import Countdown from './Countdown';
import Link from 'next/link';

const PortadaSinFoto = ({ title, date ,article}) => {
    return (
        <div className='relative'>
            <div className="top-0 w-full h-screen">
                <div className='h-full flex flex-col items-center justify-center' style={{ backgroundImage: "url('https://res.cloudinary.com/fedexx/image/upload/v1720026301/P_1_v2bdzc.png')", backgroundSize: 'cover' }}>
                    <div className='text-center'>
                        <h1 className={`${article.qwe ==="brunella" ?  Amsterdam.className : ClickerScript.className } z-10 text-gray-50 text-7xl mb-12 -translate-x-1 font-[100] -rotate-6`}>{title}</h1>
                        {   article.frase_portada ?
                            <h1 className={`${openSans.className} z-10 mt-0 mb-28 text-gray-50 text-3xl font-[100]`}>{title === "Dionisio" ? "": article.frase_portada}</h1>
                            :
                        <h1 className={`${article.qwe ==="brunella" ?  openSans.className : ClickerScript.className} z-10 mt-0 mb-28 text-gray-50 text-3xl font-[100]`}>{title === "Dionisio" ? "": "Mis Quince"}</h1>
                        }
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} text-gray-50 text-center text-xl tracking-widest font-[100]`}> Faltan</h2>
                        <Countdown date={date} />
                        <Link href='#info' scroll={false}>
                            <button className={`${openSans.className} py-3 px-9 bg-white rounded-full text-gray-900 font-[900] text-center mb-16 `}>MÁS INFO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortadaSinFoto
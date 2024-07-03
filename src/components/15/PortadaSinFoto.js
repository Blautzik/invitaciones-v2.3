import React from 'react'
import {ClickerScript, openSans} from '../../utils/fonts';
import Image from 'next/image';
import Countdown from './Countdown';
import Link from 'next/link';

const PortadaSinFoto = ({ title, date }) => {



    return (
        <div className='relative -top-16'>

            <div className="top-0 w-full h-screen">
                <div className='h-full' style={{backgroundImage: "url('https://res.cloudinary.com/fedexx/image/upload/v1720026301/P_1_v2bdzc.png')", backgroundSize:'cover'}}>

                <h1 className={`${ClickerScript.className} z-10 text-gray-50 max-w-sm text-center pt-72 text-8xl font-[200]`}>{title}</h1>
                <h1 className={`${ClickerScript.className} z-10 mt-0 mb-28 text-gray-50 max-w-sm text-center text-3xl font-[200]`}>Mis Quince</h1>
                <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} text-gray-50 max-w-xs text-center text-xl tracking-widest font-[100]`}> Faltan</h2>
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
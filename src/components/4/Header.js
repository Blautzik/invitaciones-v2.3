
import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from '../4/Countdown';
import Link from 'next/link';



const Header = ({ coverImage, title, date, coverImagePc, letra_oscura }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: 0.7,
        backgroundColor: '#555',
    }

    const titulo = title.toUpperCase()


    return (
        <div className=" h-[100dvh] ">
            <div className="top-0 w-full h-full ">
                
                <div className='md:hidden h-full'>

                    <Image
                        src={coverImage}
                        fill
                        quality={100}
                        style={imageStyle}
                        alt='portada'
                    />
                </div>
                <div className='hidden md:block'>
                    <Image
                        src={coverImagePc}
                        fill
                        quality={100}
                        style={imageStyle}
                        alt='portada'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className=' pt-56'>
                        <h1 className={`${minion.className}  text-gray-50 max-w-sm text-center text-5xl font-[200]`}> </h1>
                        <h3 className={`${minion.className}  text-gray-50 max-w-sm text-center text-2xl font-[200]`}> </h3>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} ${letra_oscura? 'text-slate-900' : 'text-gray-50'} max-w-xs text-center text-xl tracking-widest font-[100]`}> Faltan </h2>
                        <Countdown date={date} letra_oscura={letra_oscura} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from '../6/Countdown';
import Link from 'next/link';
import NewCountdown from './NewCountdown';



const Header = ({ coverImage, title, date, coverImagePc }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        opacity: 1,
    }
    console.log(date)

    const titulo = title.toUpperCase()


    return (
        <div className=" h-[90vh]  ">
            <div className="w-full ">
                
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
                <div className='absolute left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className=' pt-56'>
                        <h1 className={`${minion.className}  text-gray-50 max-w-sm text-center text-5xl font-[200]`}> </h1>
                        <h3 className={`${minion.className}  text-gray-50 max-w-sm text-center text-2xl font-[200]`}> </h3>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} text-gray-50 max-w-xs text-center text-xl tracking-widest font-[100]`}> Faltan </h2>
                        <NewCountdown date={date} />
                        <Link href='#info' scroll={false}>
                            <button className={`${openSans.className} py-3 px-9 bg-transparent rounded-full text-gray-900 font-[900] text-center mb-16 `}></button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
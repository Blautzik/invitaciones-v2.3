
import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';



const Header = ({ coverImage, title, date, coverImagePc }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: 0.7,
        backgroundColor: '#555',
    }

    const titulo = title.toUpperCase()


    return (
        <div className=" h-[100dvh] bg-slate-800 ">
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

                    <div className=' pt-8'>
                        <h1 className={`${minion.className}  text-gray-50 max-w-sm text-center text-5xl font-[200]`}>{titulo}</h1>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} text-gray-50 max-w-xs text-center text-xl tracking-widest font-[100]`}> Nos casamos en</h2>
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

export default Header
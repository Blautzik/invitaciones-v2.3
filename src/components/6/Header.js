
import Image from 'next/image';

import { comfortaa, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';



const Header = ({ coverImage, title, date }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: 0.7,
        backgroundColor: '#555',
    }


    return (
        <div className=" h-screen ">
            <div className=" top-0 w-full h-full">
                <div className="top-0 w-full h-full bg-slate-800"></div>
                <Image
                    src={coverImage}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className=' pt-12'>
                        <h1 className={`${comfortaa.className}  text-gray-50 max-w-xs text-center text-6xl`}>{title}</h1>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} text-gray-50 max-w-xs text-center text-lg tracking-widest`}> NOS CASAMOS EN</h2>
                        <Countdown date={date} />
                        <Link href='#info' scroll={false}>
                            <button className={`${openSans.className} py-4 px-4 bg-[#772c87] rounded-md text-gray-50 tracking-[6px] text-center mb-24 max-w-[200px]`}>!MÁS INFO!</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
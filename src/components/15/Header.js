
import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';
import PortadaSinFoto from './PortadaSinFoto';



const Header = ({ coverImage, title, date, coverImagePc, h1_centrado, portada_custom, article }) => {

    let texto = "text-slate-50"

    if (title === "July" && portada_custom) {
        texto = "text-black"
    }


    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: 0.99,
        backgroundColor: '#555',
    }
    const imageStylePC = {
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
        opacity: 0.99,
        backgroundColor: '#555',
    }


    const color = article.mail === "marinec" ? "black" : "text-slate-50"

    const mas_alto = article.mail === "arielgov@gmail.com" ? "-translate-y-10 text-black" : " text-slate-50"

    const titulo = title.toUpperCase()

    if (!coverImage) {
        return (
            <PortadaSinFoto title={title} date={date} article={article} />
        )
    }

    return (
        <div className=" h-[100vh] ">
            <div className={`top-0 w-full h-full ${color}`}>

                <div className='md:hidden h-full'>

                    <img
                        src={coverImage}
                        style={{ ...imageStyle, width: '100%', height: '100%' }}
                        alt='portada'
                    />
                </div>
                <div className='hidden md:block'>
                    <img
                        src={coverImage}
                        style={{ ...imageStylePC, width: '100%', height: '100%' }}
                        alt='portada'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className=' pt-8'>
                        {
                            h1_centrado ?
                                <h1 className={`${minion.className}  max-w-sm text-center pt-96 text-5xl font-[200]`}>{!portada_custom && titulo}</h1>
                                :
                                <h1 className={`${minion.className}  ${color} ${mas_alto}  max-w-sm text-center text-5xl font-[200]`}>{!portada_custom && titulo}</h1>
                        }
                    </div>

                    <div className='flex flex-col items-center'>
                        <h2 className={`${openSans.className} ${texto} max-w-xs text-center text-xl tracking-widest font-[100]`}> Faltan</h2>
                        <Countdown date={date} texto={texto} />
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
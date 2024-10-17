
import Image from 'next/image';

import { alegreya, bride, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';



const Header = ({ coverImage, title, date, coverImagePc, h1_centrado, form_id }) => {

    let opacity = 0.7
    let sin_nombre = false
    let texto = "text-slate-50"
    let palabras = [];
    let frase_extra = ""
    let side = ""
    let countdownPortada = true

    if (title === "Emi y Robert") {
        sin_nombre = true
        opacity = 1
        texto = "text-black"
    }


    if (title === "Mayra Y Hernán "){
        sin_nombre = true
        opacity = 1
        texto = "text-black"
    }

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: opacity,
        backgroundColor: '#555',
    }
    const imageStylePC = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: opacity,
        backgroundColor: '#555',
    }

    let titulo = title.toUpperCase()
    palabras = [titulo]


    let fuente = minion.className

    if (form_id === "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
        fuente = bride.className
        titulo = title
        palabras = title.split(" ");
        opacity = 1

        side = "relative right-24 -top-14 md:right-0"
    }


    if (form_id === "1fxKU_AxCcsXCC9i-OXHvMeHP9HXhQFSRvHm_txKCe_4") {
        frase_extra = "¡El mismo día, Pedri cumple 1 año!"
        imageStylePC.objectPosition = "50% 40%"
    }


    if (form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
        countdownPortada = false
    }





    return (
        <div className=" h-[100dvh] bg-slate-800 ">
            <div className="top-0 w-full h-full ">

                <div className='md:hidden h-full'>

                    <img
                        src={coverImage}
                        style={{ ...imageStyle, width: '100%', height: '100%' }}
                        alt='portada'
                    />
                </div>
                <div className='hidden md:block'>
                    <Image
                        src={coverImagePc}
                        fill
                        quality={100}
                        alt='portada'
                        style={imageStylePC}
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className={`pt-8 ${side}`}>
                        {
                            !sin_nombre && <>
                                {h1_centrado ? (
                                    <h1 className={`${minion.className} text-gray-50 max-w-sm text-center pt-96 text-5xl font-[200]`}>
                                        {palabras.map((palabra, index) => (
                                            <div key={index}>{palabra}</div>
                                        ))}
                                    </h1>
                                ) : (
                                    <h1 className={`${fuente} text-gray-50 max-w-sm text-center text-5xl font-[200]`}>
                                        {palabras.map((palabra, index) => (
                                            <div key={index} className={`${index == 1 ? "relative -top-3" : ""}`}>{palabra}</div>
                                        ))}
                                    </h1>
                                )}
                            </>
                        }
                    </div>

                    {
                        countdownPortada &&
                        <div className='flex flex-col items-center'>
                            <h2 className={`${openSans.className} ${texto} max-w-xs  text-center text-xl tracking-widest ]`}> Nos casamos en</h2>
                            <Countdown date={date} texto={texto} />
                            <h2 className={`${openSans.className} ${texto} max-w-xs text-center text-xl tracking-widest`}>{frase_extra}</h2>
                            <Link href='#info' scroll={false}>
                                <button className={`${openSans.className} py-3 px-9 bg-white rounded-full text-gray-900 font-[900] text-center ${!frase_extra && "mt-10"} mb-16 `}>MÁS INFO</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
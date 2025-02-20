
import Image from 'next/image';

import {alegreya, bride, Gabriola, comfortaa, minion, openSans, roboto, great_vives} from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';
import { GiTrumpet } from 'react-icons/gi';



const Header = ({ coverImage, title, date, coverImagePc, h1_centrado, form_id }) => {

    let opacity = 0.7
    let sin_nombre = false
    let texto = "text-slate-50"
    let palabras = [];
    let frase_extra = ""
    let side = ""
    let countdownPortada = true
    let sombra = ""
    let fuente = minion.className
    let nos_casamos = true
    let colores_boton = "bg-white text-gray-900"

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


    if (title === "Emi y Robert") {
        sin_nombre = true
        opacity = 1
        texto = "text-black"
    }
    
    if( title === "ÁNGEL & LILIANA "){
        sin_nombre = true
        opacity = 1
        texto = "text-black"
    }

    if (title === "Mayra Y Hernán "){
        sin_nombre = true
        opacity = 1
        texto = "text-black"
    }

    if(title == "Cris & Tefi"){
        opacity = 0.95
        sombra = "drop-shadow-[0_5px_4px_rgba(0,0,0,0.99)] text-5xl"
        fuente = Gabriola.className
        titulo = title
    }

    if(title == "Gise & Maxi"){
        imageStyle.objectPosition = "70% 50%"
    }




    if (form_id === "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
        fuente = bride.className
        titulo = title
        palabras = title.split(" ");    
        opacity = 1
        side = "relative right-24 md:right-0"
    }


    if (form_id === "1fxKU_AxCcsXCC9i-OXHvMeHP9HXhQFSRvHm_txKCe_4") {
        frase_extra = "¡El mismo día, Pedri cumple 1 año!"
        imageStylePC.objectPosition = "50% 40%"
    }


    if (form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
        countdownPortada = false
    }

    if ( form_id == "1WZ9lVSd3hiRHIeiAVgX2YM8_KQ0OP4GPIJgHWls3RvQ"){
        imageStyle.objectPosition = "65% 10%"
    }



    palabras = [titulo]


    if (form_id == "1kKF8B-1gNtql6y8_1N2Q-i308_HjCgZddMOEVvUmmvY"){
       sin_nombre = true    
       imageStyle.opacity = 1
       imageStylePC.opacity = 1
       texto = "text-secondary-900 font-extrabold "
       nos_casamos = false
       colores_boton = "text-secondary-100 bg-[#5f8575] "
    }

    if(form_id == "1gU6UL4IAi_uIIAs1Jn1X3DIkF7zcnbLfLZetoZOuoAk"){
        sin_nombre = true
        imageStyle.opacity = 1
        imageStylePC.opacity = 1
        texto = "text-blue-900"
        colores_boton = "bg-gray-100 text-blue-900 font-[400]"
    }


    if (form_id == "1trFNkU-_EGblyx3Z44wXHg_6ajmphpvmfjGRfgkgAJI"){
        sin_nombre = true
        imageStyle.opacity = 1
        imageStylePC.opacity = 1
        texto = "text-[#2f4538]"
        countdownPortada= false
    }


    if (title == "Barby & Leo"){
        imageStyle.objectPosition = "61% 50%" 
    }
    if (title == "Adri & Ro"){
        imageStylePC.objectPosition = "50% 55%" 
    }

    if(title == "Vane & Pato"){
        frase_extra = "Hay momentos en la vida que son especiales por sí solos. Compartirlos con las personas que quieres los convierte en momentos inolvidables."
    }


    return (
        <div className=" h-[100dvh] bg-slate-800 ">
            <div className="top-0 w-full h-full">

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
                                    <h1 className={`${minion.className} ${texto ? texto : "text-gray-50"} text-gray-50 max-w-sm text-center pt-96 text-5xl font-[200]`}>
                                        {palabras.map((palabra, index) => (
                                            <div key={index}>{palabra}</div>
                                        ))}
                                    </h1>
                                ) : (
                                    <h1 className={`${fuente} text-5xl   ${ sombra ? sombra : ""} text-gray-50 max-w-sm text-center font-[200]`}>
                                        {palabras.map((palabra, index) => (
                                            <div key={index} className={`${index == 1 ? "relative -top-3" : ""} `}>{palabra}</div>
                                        ))}
                                    </h1>
                                )}
                            </>
                        }
                    </div>

                    {
                        countdownPortada &&
                        <div className={`flex flex-col items-center ${!nos_casamos && "relative top-10"}`}>
                            {nos_casamos && <h2 className={`${openSans.className} ${texto} max-w-xs  text-center text-xl tracking-widest ]`}> Nos casamos en</h2>}
                            <Countdown date={date} texto={texto} />
                            <h2 className={`${great_vives.className} ${texto} max-w-xs text-center text-sm tracking-widest my-4`}>{frase_extra}</h2>
                            <Link href='#info' scroll={false}>
                                <button className={`${openSans.className} py-3 px-9  rounded-full ${colores_boton} font-[900] text-center ${!frase_extra && "mt-10"} mb-16 `}>MÁS INFO</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
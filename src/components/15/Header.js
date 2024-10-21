
import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';
import PortadaSinFoto from './PortadaSinFoto';



const Header = ({ coverImage, title, date, coverImagePc, h1_centrado, portada_custom, article }) => {

    let texto = "text-slate-50"
    let sombra = false

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



    if(article.form_id == "1aLSubnXmSUuyCEA9_1XPPkjIK5bECXyKsHDl60kWxJs"){
        imageStylePC.objectPosition = " 50% 35%"
    }   

    if (!coverImage) {
        return (
            <PortadaSinFoto title={title} date={date} article={article} />
        )
    }

    if(article.form_id == "1AS4Jq8T14Qmcyaa630HJyd3uDuXDZaTM3mQ3WgWJwlQ"){
        sombra=true
    }

    if (article.url =='Sofi-13-12'){
        texto = 'text-secondary-600'
    }


    

    return (
        <div className=" h-[100vh] ">
            <div className={`top-0 w-full h-full ${color}`}>

                <div className='md:hidden h-full '>

                    <img
                        src={coverImage}
                        style={{ ...imageStyle, width: '100%', height: '100%' }}
                        alt='portada'
                    />
                </div>
                <div className='hidden md:block max-h-screen'>
                    <img
                        src={coverImage}
                        style={{ ...imageStylePC, width: '100%', height: '100%', maxHeight: '100vh' }}
                        alt='portada'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                    <div className=' pt-8'>
                        {
                            h1_centrado ?
                                <h1 className={`${minion.className}  max-w-sm text-center pt-96 text-5xl font-[200]`}>{!portada_custom && titulo}</h1>
                                :
                                <h1 className={`${minion.className}  ${color} ${mas_alto}  max-w-sm text-center text-5xl font-[200]`} style={sombra ? { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }: {textShadow:"none"}}>{!portada_custom && titulo}</h1>
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

import { getGoogleDriveImageUrl } from "@/helpers";
import { great_vives, inter, roboto, playFair, twcen, minion, openSans } from "../../utils/fonts";
import moment from "moment/moment";
import Countdown from '../15/Countdown';
import Link from 'next/link';


const Header = ({ coverImage, title, date, content, foto_pc, frase_portada, sin_ondas, mail, article }) => {
    console.log(mail)
    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 5%',
        zIndex: 0,
        opacity: 0.95,
        backgroundColor: '#555',
    }
    const imageStylepc = {
        objectFit: 'cover',
        objectPosition: 'center%',
        zIndex: 0,
        opacity: 0.95,
        backgroundColor: '#555',
    }

    if (mail == "bzerrizuela@gmail.com") {
        foto_pc = getGoogleDriveImageUrl("https://drive.google.com/file/d/1CKjeQGTl3-PGxTsYjPJ45sf8R2GfpcOG/view?usp=sharing")
    }

    if(mail == "karina_1607@yahoo.com.ar"){
        foto_pc = "https://res.cloudinary.com/fedexx/image/upload/c_fill_pad,w_1500,h_1080,g_auto,b_gen_fill/v1727981418/Ornella-173_-_karina_celentano_h1fwhb.jpg"
    }

    const dateFormated = moment(date).format('DD-MM-YYYY')


    if (article.url == "Elsa-y-Flor"){
        imageStyle.objectPosition = "50% 50%" 
    }

    if(article.url =="Lore-16-02"){
        frase_portada = "Te espero para compartir la alegría de esta día inolvidable y único"
    }


    return (
        <>
            <div className=" block md:hidden ">
                <div className="md:hidden relative top-0 w-full h-[60vh] md:h-[70vh] bg-center bg-cover ">
                    <div className=" top-0 bg-slate-800"></div>
                    <img
                        src={coverImage}
                        style={{ ...imageStyle, width: '100%', height: '100%' }}
                        alt='portada'
                    />
                    {
                        !sin_ondas &&
                        <div className='absolute bottom-0 left-0 md:bg-none bg-cover bg-footer-texture translate-y-1 h-24 w-full z-50'></div>
                    }
                </div>

                <div className='w-full  md:hidden bg-[#fff]'>
                    <div className='w-full  md:hidden flex justify-center  pt-14'>
                        <div className='flex md:hidden w-full justify-center '>
                            <span className='border-b md:hidden flex-grow-0 w-1/12 border-b-[#3b1b55] h-5 mx-3'></span>
                            <h3 className={`${playFair.className} md:hidden flex-grow-1 text-slate-600 text-2xl mb-6`}>{dateFormated}</h3>
                            <span className='border-b w-1/12 flex-grow-0 md:hidden border-b-[#3b1b55] h-5 mx-3'></span>
                        </div>
                    </div>

                    <div className='bg-[#fff] md:hidden text-center '>
                        <h1 className={`${minion.className} text-slate-900 ${title.length >= 6 ? 'text-5xl' : 'text-8xl'} font-[100] text-center leading-[0.7]`}>
                            {title.toUpperCase()}
                        </h1>
                        <h3 className={`${minion.className} text-slate-900 text-center text-3xl mb-6`}>{frase_portada || 'MIS 15 AÑOS'}</h3>
                        {!(mail == "bzerrizuela@gmail.com") &&
                            <>
                                {content && <p className={`${openSans.className} text-slate-600 text-center text-xl mb-6 mx-7`}>{content}</p>}
                            </>
                        }
                    </div>
                </div>

            </div>
            <div className=" h-[100vh] hidden md:block">
                <div className="top-0 w-full h-full ">
                    <div className='hidden md:block h-screen'>
                        <img
                            src={foto_pc}
                            style={{ ...imageStylepc, width: '100%', height: '100%' }}
                            alt='portada'
                        />
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center '>

                        <div className=' pt-8'>
                            <h1 className={`${minion.className} text-gray-50 ${title.length >= 6 ? 'text-5xl' : 'text-8xl'} font-[100] text-center leading-[0.7]`}>
                                {title.toUpperCase()}
                            </h1>

                            <h1 className={`${minion.className}  text-gray-50 max-w-sm text-center text-5xl font-[200]`}>{frase_portada}</h1>

                        </div>

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
        </>
    )
}

export default Header




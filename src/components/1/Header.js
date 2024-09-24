
import { getGoogleDriveImageUrl } from "@/helpers";
import { great_vives, inter, roboto, playFair, twcen, minion, openSans } from "../../utils/fonts";
import moment from "moment/moment";
import Countdown from '../15/Countdown';
import Link from 'next/link';


const Header = ({ coverImage, title, date, content, foto_pc, frase_portada, sin_ondas, mail }) => {
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

    const dateFormated = moment(date).format('DD-MM-YYYY')


    console.log("date: ", dateFormated)

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
                    <div className='hidden md:block'>
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




{/* <div className="w-full flex container relative mx-auto z-10">
<div className=" w-full items-center justify-center flex flex-wrap z-30">
    <div className="w-full lg:w-7/12 lg:max-w-7/12 px-4 ml-auto mr-auto text-center">
        <div className="w-full">
            <motion.div initial='hidden' animate='visible' variants={{
                hidden: {
                    scale: .95,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .5,
                        duration: .9
                    }
                },
            }} >

                
                <div className='flex flex-col items-center'>
                    <h1 className={`${great_vives.className} text-gray-50 text-7xl `} >
                        {title}
                    </h1>
                    <h2 className={`${roboto.className} text-amber-300 text-4xl mb-6`}>Mis 15 años</h2>
                    <div className='border-b border-b-white w-9/12'></div>
                    <h2 className={`${roboto.className} text-gray-50 text-2xl w-7/12 mt-10 pt-8`}>{content}</h2>
                </div>

            </motion.div>
            <div className="flex w-full justify-center globals-40">
                <IoChevronDown className='animate-bounce text-4xl text-gray-50 z-50' />
            </div>
        </div>
    </div>
</div> */}
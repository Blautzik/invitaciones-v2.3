
import { great_vives, inter, roboto, playFair, twcen, minion, openSans } from "../../utils/fonts";
import moment from "moment/moment";
import Image from 'next/image';


const Header = ({ coverImage, title, date, content, foto_pc, frase_portada, sin_ondas }) => {
    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 5%',
        zIndex: 0,
        opacity: 0.95,
        backgroundColor: '#555',
    }

    const dateFormated = moment(date).format('DD-MM-YYYY')

    return (
        <div className=" ">

            <div className="md:hidden relative top-0 w-full h-[60vh] md:h-[70vh] bg-center bg-cover ">
                <div className=" top-0 bg-slate-800"></div>
                <Image
                    src={coverImage}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'

                />
                {
                    !sin_ondas &&
                    <div className='absolute bottom-0 left-0 md:bg-none bg-cover bg-footer-texture translate-y-1 h-24 w-full z-50'></div>  
                }
            </div>
            <div className='hidden md:block h-[90vh] bg-center bg-cover relative top-0 w-full'>
                <div className=" top-0 bg-slate-800"></div>
                <Image
                    src={foto_pc}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />

            </div>
            <div className='w-full bg-[#fff]'>
                <div className='w-full flex justify-center  pt-14'>
                    <div className='flex w-full justify-center '>
                        <span className='border-b flex-grow-0 w-1/12 border-b-[#3b1b55] h-5 mx-3'></span>
                        <h3 className={`${playFair.className} flex-grow-1 text-slate-600 text-2xl mb-6`}>{dateFormated}</h3>
                        <span className='border-b w-1/12 flex-grow-0 border-b-[#3b1b55] h-5 mx-3'></span>
                    </div>
                </div>

                <div className='bg-[#fff] text-center '>
                    <h1 className={`${minion.className} text-slate-900 ${title.length >= 6 ? 'text-5xl' : 'text-8xl'  } font-[100] text-center leading-[0.7]`}>
                        {title.toUpperCase()}
                    </h1>
                    <h3 className={`${minion.className} text-slate-900 text-center text-3xl mb-6`}>{frase_portada || 'MIS 15 AÑOS'}</h3>
                    {content && <p className={`${openSans.className} text-slate-600 text-center text-xl mb-6 mx-7`}>{content}</p>}
                </div>
            </div>

        </div>
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
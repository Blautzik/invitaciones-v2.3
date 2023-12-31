
import { comfortaa, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";


const Agendar = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-between mb-8'>
            <div className="flex flex-col items-center h-60 justify-between">

            <BiCalendar className="h-20 w-20 text-black mt-6 " />

            <h3 className={`${comfortaa.className} text-4xl `}>Agendar</h3>
            <a className={`${openSans.className} bg-black text-white flex justify-evenly items-center w-72 text-[14px] font-[600] px-6 py-4 rounded-full `}
                href='https://calendar.google.com/calendar'
                target="_blank"
                >
                <BiCalendarCheck className="text-[20px]" />
                AGREGAR AL CALENDARIO
            </a>
                </div>
            <div className="shadow-2xl">

                <Image
                    src={'https://res.cloudinary.com/fedexx/image/upload/v1692365686/15%20mia/0119_MIA_fpxjct.jpg'}
                    width={300}
                    height={80}
                    style={{
                        borderRadius: 5,
                    }}
                />
            </div>
            <div className="md:w-96 w-10/12 flex items-center justify-evenly pb-24">
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">
                    <RiFacebookLine className="text-xl m-auto" />
                </div>
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">

                    <RiTwitterLine className="text-xl m-auto"/>
                </div>
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16 ">
                    <RiInstagramLine className="text-xl m-auto"/>

                </div>
            </div>
            
        </div>
    )
}

export default Agendar
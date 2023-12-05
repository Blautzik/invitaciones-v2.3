
import { comfortaa, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";


const Agendar = ({ foto_agendar, fb_link, tw_link, ig_link }) => {
    return (
        <div className=' flex flex-col items-center justify-between pb-8'>
            <div className="flex flex-col items-center justify-between mb-4">

                <BiCalendar className="h-20 w-20 text-black mt-6 " />

                <h3 className={`${comfortaa.className} text-4xl mb-4`}>Agendar</h3>
                <a className={`${openSans.className} bg-black text-white flex justify-evenly items-center w-72 max-w-[78vw] text-[14px] font-[600] px-4 py-2 rounded-full `}
                    href='https://calendar.google.com/calendar'
                    target="_blank"
                >
                    <BiCalendarCheck className=" text-[20px] " />
                    AGREGAR AL CALENDARIO
                </a>
            </div>
            <div className="shadow-2xl mb-4">
                {
                    foto_agendar &&
                    <Image
                    src={foto_agendar}
                    width={300}
                    height={80}
                    style={{
                        borderRadius: 5,
                    }}
                    />
                }
            </div>
            {ig_link && <div className="md:w-96 w-10/12 flex items-center justify-evenly pb-24 mt-10">
                {
                    fb_link &&
                    <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">
                        <RiFacebookLine className="text-xl m-auto" />
                    </div>
                }


                {
                    tw_link &&
                    <a href={tw_link} target="_blank" >
                    <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">

                        <RiTwitterLine className="text-xl m-auto" />
                    </div>
                    </a>
                }

                {
                    ig_link &&
                        <a href={ig_link} target="_blank" >
                    <div className=" border-black text-black flex items-center border rounded-full h-16 w-16 ">

                            <RiInstagramLine className="text-xl m-auto" />

                    </div>
                        </a>
                }
            </div>}

        </div>
    )
}

export default Agendar
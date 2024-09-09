import { comfortaa, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";
import { format, parse, isValid } from "date-fns";
import { es } from "date-fns/locale";

const Agendar = ({ foto, links, fecha, bg }) => {
    const parseDateString = (dateString) => {
        let parsedDate = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
        

        if (!isValid(parsedDate)) {
            parsedDate = parse(dateString, 'yyyy/MM/dd', new Date());
        }
        
        if (!isValid(parsedDate)) {
            parsedDate = parse(dateString, 'dd/MM/yyyy', new Date());
        }
        
        return parsedDate;
    };

    const fechaCeremonia = parseDateString(fecha);
    
    const formattedDate = isValid(fechaCeremonia) 
        ? format(fechaCeremonia, 'yyyy/MM/dd', { locale: es })
        : 'Fecha inválida';

    return (
        <div className='max-h-screen flex flex-col items-center justify-between'>
            <div className="flex flex-col items-center h-60 justify-between">
                <BiCalendar className="h-20 w-20 text-black mt-6 " />
                <h3 className={`${comfortaa.className} text-4xl text-center pb-4`}>Agrégalo a tu calendario</h3>
                {isValid(fechaCeremonia) ? (
                    <a className={`${openSans.className} bg-black text-white flex justify-evenly items-center mb-8 md:w-72 w-68 text-[14px] font-[600] px-6 py-4 rounded-full `}
                        href={`https://calendar.google.com/calendar/u/0/r/week/${formattedDate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BiCalendarCheck className="text-[20px]" />
                        AGENDAR
                    </a>
                ) : (
                    <p className="text-red-500">Fecha no disponible</p>
                )}
            </div>
            <div className="shadow-2xl">
                {foto && (
                    <Image
                        src={foto}
                        width={300}
                        height={80}
                        alt="Evento"
                        style={{
                            borderRadius: 5,
                        }}
                    />
                )}
            </div>
            {links && (
                <div className="md:w-96 w-10/12 flex items-center justify-evenly mb-8">
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16">
                        <RiFacebookLine className="text-xl m-auto" />
                    </div>
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16">
                        <RiTwitterLine className="text-xl m-auto"/>
                    </div>
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16 ">
                        <RiInstagramLine className="text-xl m-auto"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Agendar;
import { comfortaa, great_vives, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck, BiGame } from "react-icons/bi";
import { format, parse, parseISO, isValid } from "date-fns";
import { es } from "date-fns/locale";

const Agendar = ({ foto, links, fecha, form_id, bg = "bg-white", mail, mfmf, frase_cierre, sin_janos }) => {

    let whitespace_pre = false
    let bgcolor = "bg-violeta"


    if(form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU"){
        bg="bg-black"
        text="text-[#eac759]"
    }

    if(frase_cierre == "La vida no se mide en minutos \n se mide en momentos \n ❤ \n Gracias por acompañarme!!"){
        whitespace_pre = "cierre"
    }

    if(mail == "cynthiamarielpena@hotmail.com"){
        bg = "bg-amber-50 -mt-24 text-secondary-800"
        sin_janos = true
        text = "text-secondary-800"
    }
    let text = "text-slate-700"

    const parseDateString = (dateString) => {
        let parsedDate;

        parsedDate = parseISO(dateString);
        if (isValid(parsedDate)) {
            return parsedDate;
        }

        parsedDate = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
        if (isValid(parsedDate)) {
            return parsedDate;
        }

        console.error(`Failed to parse date: ${dateString}`);
        return null;
    };

    const fechaCeremonia = parseDateString(fecha);

    const formattedDate = fechaCeremonia
        ? format(fechaCeremonia, 'yyyy/MM/dd', { locale: es })
        : 'Fecha inválida';



    if (form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
        bg = "bg-black"
        text = "text-white"
    }


    if ( form_id = "1n6kdiyXQmHzj4IrY1-PY3g1wsXXZOkwuCjpZnj29juM"){
        text = "text-black"
        bg = "bg-[url('https://res.cloudinary.com/fedexx/image/upload/v1738349672/WhatsApp_Image_2025-01-31_at_9.58.36_AM_kcmoyg.jpg')]"
        bgcolor = "bg-black"
    }

    return (
        <div className={`max-h-screen flex flex-col items-center justify-between ${bg} ${text} `}>
            <div className={`flex flex-col items-center h-60 justify-between  ${bg} ${text}`}>
                <BiCalendar className="h-20 w-20 text-black mt-6 " />
                <h3 className={`${comfortaa.className} text-4xl text-center pb-4`}>Agrégalo a tu calendario</h3>
                {isValid(fechaCeremonia) ? (
                    <a className={`${openSans.className} ${text == "text-white" && "invert"}  bg-black text-white flex justify-evenly items-center mb-8 md:w-72 w-68 text-[14px] font-[600] px-6 py-4 rounded-full `}
                        href={`https://calendar.google.com/calendar/u/0/r/week/${formattedDate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BiCalendarCheck className="text-[20px]" />
                        AGENDAR
                    </a>
                ) : (
                    <a className={`${openSans.className} bg-black text-white flex justify-evenly items-center mb-8 md:w-72 w-68 text-[14px] font-[600] px-6 py-4 rounded-full `}
                        href={`https://calendar.google.com/calendar/u/0/r/week/`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BiCalendarCheck className="text-[20px]" />
                        AGENDAR
                    </a>
                )}
            </div>
            <div className="shadow-2xl">
                {foto && (
                    <img
                        src={foto}
                        width="300"
                        height="80"
                        alt="Evento"
                        style={{ borderRadius: '5px' }}
                    />
                )}
            </div>
            {links && (
                <div className="md:w-96 w-10/12 flex items-center justify-evenly mb-8">
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16">
                        <RiFacebookLine className="text-xl m-auto" />
                    </div>
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16">
                        <RiTwitterLine className="text-xl m-auto" />
                    </div>
                    <div className="border-black text-black flex items-center border rounded-full h-16 w-16 ">
                        <RiInstagramLine className="text-xl m-auto" />
                    </div>
                </div>
            )}

    <div className={` flex flex-col items-center justify-center text-center pb-8 pt-8 ${bg}`}>
            
            {
                mail != 'bzerrizuela@gmail.com' &&
                <h2 className={`${mfmf == "formulario_simple" ? comfortaa.className : great_vives.className} ${mfmf == "formulario_simple" ? "hidden" :` ${text}  md:text-5xl text-4xl mx-10` } ${whitespace_pre && whitespace_pre} `}>
               { frase_cierre || "¡Gracias por acompañarme en este momento tan importante!"}
            </h2>
            }
            { !sin_janos &&
            <a href='https://janoseventos.com' target='_blank'>
                <div className={`object-contain mt-8 mb-8 bg`}>
                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1692357541/invi/LOGO_PNG_HORIZONTAL_VIOLETA_iwuny5.png'}
                        width={250}
                        height={100}
                        quality={25}
                        alt='logo'
                    />

                </div>
            </a>}
        </div>
        <div className={`w-screen ${bgcolor} h-8 text-center pt-2 text-white`}>Invitaciones Jano's </div>
        </div>

    );
};

export default Agendar;
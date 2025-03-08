import { comfortaa, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";
import { format, parse, parseISO, isValid, addDays } from "date-fns";
import { es } from "date-fns/locale";

const Agendar = ({
  foto_agendar,
  fb_link,
  tw_link,
  ig_link,
  fecha,
  agendar,
  bg = "bg-black",
}) => {
  console.log(fecha);

  const parseDateString = (dateString) => {
    let parsedDate;

    parsedDate = parseISO(dateString);
    if (isValid(parsedDate)) {
      return parsedDate;
    }

    parsedDate = parse(dateString, "dd/MM/yyyy HH:mm:ss", new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }

    console.error(`Failed to parse date: ${dateString}`);
    return null;
  };

  const fechaCeremonia = parseDateString(fecha);

  let formattedDate = fechaCeremonia
    ? format(addDays(fechaCeremonia, 0), "yyyy/MM/dd", { locale: es })
    : "Fecha inválida";

  const fecha2 = new Date(fecha);

  let txt = "text-black";

  if (bg === "bg-[#e8e4db]") {
    txt = "text-secondary-600";
  }

  if (agendar) {
    formattedDate = agendar;
  }

  if (fecha == "2025-03-15T23:00:00.000Z") {
    formattedDate = "2025/3/15";
  }

  if (ig_link == "https://www.instagram.com/malvcob/") {
    txt = "text-secondary-800";
  }

  if (ig_link == "https://www.instagram.com/nuestrabodadaiyleo") {
    txt = "text-white";
    bg = "bg-[#5f8575]";
  }

  if (fecha == "2025-03-29T21:00:00.000Z") {
    txt = "text-sky-900";
    bg = "bg-sky-900";
  }

  if (fecha == "2025-02-15T00:30:00.000Z") {
    formattedDate = "2025/2/14";
  }

  if (
    ig_link ==
    "https://www.instagram.com/sofi.odwa?igsh=MmVnZmt2Z29yb2c5&utm_source=qr"
  ) {
    txt = "text-white";
  }

  return (
    <div className=" flex flex-col items-center justify-between pb-8">
      <div className="mb-4 flex flex-col items-center justify-between">
        <BiCalendar className={`h-20 w-20 ${txt}  mt-6 `} />

        <h3 className={`${openSans.className} ${txt} mb-4 text-4xl`}>
          Agendar
        </h3>
        <a
          className={`${openSans.className} ${
            bg !== "bg-black" ? `${bg + " text-white"} ` : "bg-black text-white"
          }  flex w-72 max-w-[78vw] items-center justify-evenly rounded-full px-4 py-2 text-[14px] font-[600] `}
          href={`https://calendar.google.com/calendar/u/0/r/day/${formattedDate}`}
          target="_blank"
        >
          <BiCalendarCheck className=" text-[20px] " />
          AGREGAR AL CALENDARIO
        </a>
      </div>
      <div className="mb-4 shadow-2xl">
        {foto_agendar && (
          <img
            src={foto_agendar}
            width={300}
            height={80}
            style={{
              borderRadius: 5,
            }}
          />
        )}
      </div>
      {ig_link && (
        <div
          className={`mt-10 flex w-10/12 items-center justify-evenly pb-24 md:w-96 ${txt}`}
        >
          {fb_link && (
            <div className=" flex h-16 w-16 items-center rounded-full border border-black text-black">
              <RiFacebookLine className="m-auto text-xl" />
            </div>
          )}

          {tw_link && (
            <a href={tw_link} target="_blank">
              <div className=" flex h-16 w-16 items-center rounded-full border border-black text-black">
                <RiTwitterLine className="m-auto text-xl" />
              </div>
            </a>
          )}

          {ig_link && (
            <a href={ig_link} target="_blank">
              <div
                className={` border-black ${txt} flex h-16 w-16 items-center rounded-full border `}
              >
                <RiInstagramLine className="m-auto text-xl" />
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Agendar;

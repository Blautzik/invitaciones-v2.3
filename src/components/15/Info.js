import {
  comfortaa,
  inter,
  minion,
  openSans,
  roboto,
  Vogue,
} from "../../utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import fiestaIcon from "../../../public/fiestas-12.png";
import suitIcon from "../../../public/suit (1).png";
import trajeVestidoIcon from "../../../public/ropa.png";
import ceremoniaIcon from "../../../public/heartseparator1.png";
import salones, { encontrarSalon } from "../../data/salones";
import { getGoogleDriveImageUrl, obtenerHoraArgentina } from "@/helpers";

const Info = ({ article }) => {
  const fechaCeremonia = new Date(article.fecha);
  const formattedDate = fechaCeremonia
    .toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      timeZone: "America/Argentina/Buenos_Aires",
    })
    .replace(",", "");

  const hora = fechaCeremonia.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });

  const salon = encontrarSalon(article.salon);

  let hora_fin = false;
  let bg = "";
  let text = "text-slate-700";
  let bgbtn = "bg-black";
  let txtbtn = "text-slate-50";
  let foto_ceremonia = false;
  let ceremonia = false;
  let horario_distinto = "";
  let sin_foto_salon = false;
  let estacionamiento = false;
  let iconoDC = suitIcon;
  let font = comfortaa.className;
  let opacity = 1;
  let filter = "";
  let bgimg = false;

  let iconOpacity = "opacity-50";

  const imgstyle = {
    objectFit: "cover",
    objectPosition: "50% 50%",
    zIndex: 0,
    borderRadius: "5px",
    maxHeight: "400px"
  };

  if (article.form_id == "1l3h9980DQhgjmjxUbqJJzYJsKB5KpuQ0GeQFMbWJ36A") {
    hora_fin = "20:00";
  }
  if (
    article.form_id == "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0" ||
    article.form_id == "1WBw_6hjgbraJrNv_d_mNhsiQPQtIyEMCwYQz2AU9EiI"
  ) {
    hora_fin = "05:00";
  }
  if (article.form_id == "1QLYZgzByxTw1jyFIJY_u4gFlgF_CLHIM39vD3HDE1mI") {
    hora_fin = "21:00";
  }

  if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
    article.mfmf = "sin_janos";
  }

  if (article.form_id == "1xEz5o-7DzhgQaxoMWHJ_np5PwKr3FO5Z7LIyTuYwyKg") {
    article.mfmf = "sin_janos";
  }

  if (article.form_id == "1gxvaHJl7vw6q-k-b4IKTlFAXINgHub3Gc3-3EwOtesc") {
    salon.foto_salon =
      "https://res.cloudinary.com/fedexx/image/upload/v1725450558/fotos%20salones/Imagen_de_WhatsApp_2024-09-02_a_las_12.20.25_c5dc6810_cxbybf.jpg";
  }

  if (article.form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
    bg = "bg-black";
    text = "text-white";
  }

  if (article.mail == "karina_1607@yahoo.com.ar") {
    horario_distinto = " 21 a 05 ";
  }

  if (article.form_id == "1fxKU_AxCcsXCC9i-OXHvMeHP9HXhQFSRvHm_txKCe_4") {
    foto_ceremonia =
      "https://res.cloudinary.com/fedexx/image/upload/v1701302507/jesi%20y%20maxi/descarga_mjuczu.jpg";
  }

  if (article.form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
    text = "text-secondary-600";
    bgbtn = "bg-[#e8e4db]";
    txtbtn = "text-secondary-600";
  }

  if (article.form_id == "1BVNjGdXGL4DgYyY0qOy0OfSzXWWCG9WusnvfNaSaRyA") {
    ceremonia = "Ceremonia en el Salón 20:00 hs";
  }

  if (article.url == "Karen-y-Diego-02-11") {
    sin_foto_salon = true;
  }

  if (article.url === "ASTJ-07-11") {
    estacionamiento = true;
  }

  if (article.url == "Angel-y-Liliana-30-11") {
    article.mfmf = "sin_janos";
  }

  function capitalize(string) {
    return string.replace(/^\w/, (match) => match.toUpperCase());
  }

  if (article.url == "Valen-09-11") {
    hora_fin = "05:00";
  }

  if (article.url == "Isabella-22-11") {
    hora_fin = "5:30";
  }
  if (article.url == "Agus-28-12") {
    hora_fin = "5:30";
  }

  if (article.url === "Vicky-06-12") {
    hora_fin = "5:00";
  }

  if (article.url === "Lisandro-04-01") {
    hora_fin = "5:00";
  }

  if (article.url == "Carla-y-Andres") {
    hora_fin = "21:00hs";
  }

  if (article.url == "Gise-y-Maxi") {
    iconoDC = trajeVestidoIcon;
  }

  if (article.url == "Malvi-28-02") {
    text = "text-secondary-600 xs:text-4xl";
    bgbtn = "bg-[#e8e4db]";
    txtbtn = "text-secondary-600";
    bg = "bg-amber-50";
    font = Vogue.className;
  }

  if (article.url == "Ambar-22-02") {
    iconoDC = trajeVestidoIcon;
  }

  let textito = `${openSans.className} text-gray-600 tracking-wider font-[500]`;

  if (article.url == "Vane-y-Fawaz") {
    text = "text-blue-900 text-3xl";
    bgbtn = "bg-secondary-500";
    txtbtn = "text-blue-900";
    iconoDC = trajeVestidoIcon;
    filter =
      "invert(50%) sepia(100%) saturate(905%) hue-rotate(180deg) brightness(30%)  ";
    bgimg =
      "https://drive.google.com/uc?export=view&id=1Y_IMd_i3rWy928Ff-qoMsSo2hyUF7gR7";
  }

  if (article.url == "Mia-22-02") {
    bgimg =
      "https://res.cloudinary.com/fedexx/image/upload/v1738349672/WhatsApp_Image_2025-01-31_at_9.58.36_AM_kcmoyg.jpg";
    bg = "bg-transparent";
    text = "text-black";
    opacity = "opacity-100";
  }

  if (article.url == "Delfi-14-03") {
    article.mfmf = "sin_janos";
  }
  if (article.url == "Renata-05-04") {
    article.mfmf = "sin_janos";
  }

  if (article.url == "Helena-01-03") {
    hora_fin == "05:30";
  }

  if (article.url == "Martina-01-03") {
    article.mfmf = "sin_janos";
  }

  if (article.url === "Cande-30-03") {
    bg = "bg-[#D4E7F8]";
  }

  if (salon == "Jano's Haedo") {
    sin_foto_salon = true;
  }

  if (article.url == "Sofi-12-04") {
    text = "text-white";
  }

  return (
    <div
      className={`-globals-36 relative  w-full overflow-x-hidden ${bg} mt-0`}
    >
      {bgimg && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('${bgimg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        ></div>
      )}

      {foto_ceremonia && (
        <div className="mb-12 flex flex-col items-center justify-center text-center md:mt-4">
          <div className="relative mb-6 h-16 w-40">
            <img src="/heartseparator1.png" />
          </div>
          <h3
            className={`${comfortaa.className} mb-10 text-center font-[700] text-slate-700 xs:text-xl sm:text-2xl`}
          >
            {article.es_civil ? "El Civil" : "La Ceremonia"}
          </h3>

          {foto_ceremonia && (
            <img
              src={foto_ceremonia}
              style={{
                objectFit: "cover",
                position: "relative",
                marginBottom: 48,
                borderRadius: 5,
                height: 150,
                width: 300,
              }}
              alt="Ceremonia"
            />
          )}

          <div className={`${openSans.className}my-4 text-center leading-7`}>
            <p className={textito}>
              <strong>Fecha: </strong> Domingo 1 de Diciembre
            </p>
            <p className={textito}>
              <strong>Hora: </strong> 12:00 hs
            </p>
            <p className={textito}>
              <strong>Lugar: </strong> Jano's Palermo Hollywood
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex-col items-center">
        <div className="m-auto flex w-full flex-col items-center justify-between md:w-10/12 md:flex-row md:items-center md:justify-center lg:items-start">
          <div className="flex w-5/12 flex-col items-center justify-center">
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              className="flex flex-col items-center justify-center"
            >
              {!foto_ceremonia ? (
                <div className={`relative mb-6 h-24 w-24 ${opacity}`}>
                  <Image src={fiestaIcon} fill />
                </div>
              ) : (
                <div className="relative mt-2 h-16 w-40">
                  <img src="/heartseparator1.png" />
                </div>
              )}
              <h3
                className={`${font} xs:text-xl sm:text-2xl ${text} ${
                  foto_ceremonia ? "mb-0" : "mb-10"
                } text-center`}
              >
                Fiesta
              </h3>
            </motion.div>
            <div className="flex flex-col items-center justify-center">
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                className="flex flex-col items-center justify-center"
              >
                {article.form_id ==
                "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA" ? (
                  <>
                    <h4
                      className={`${openSans.className} w-80 text-center text-xl font-semibold text-slate-600`}
                    >
                      Día
                    </h4>
                    <p
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      {capitalize(formattedDate)}
                    </p>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Ceremonia civil 20 hs
                    </h4>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Fiesta a continuación{" "}
                    </h4>
                  </>
                ) : article.form_id ==
                  "1BVNjGdXGL4DgYyY0qOy0OfSzXWWCG9WusnvfNaSaRyA" ? (
                  <>
                    <h4
                      className={`${openSans.className} w-80 text-center text-xl font-semibold text-slate-600`}
                    >
                      Día
                    </h4>
                    <p
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Sábado 26 de Octubre
                    </p>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Ceremonia en el salón 20hs
                    </h4>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Recepción 21hs{" "}
                    </h4>
                  </>
                ) : article.url == "Carla-y-Andres" ? (
                  <>
                    <h4
                      className={`${openSans.className} w-80 text-center text-xl font-semibold text-slate-600`}
                    >
                      Día
                    </h4>
                    <p
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Domingo 19 de enero
                    </p>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Ceremonia en el salón 12:00hs
                    </h4>
                    <h4
                      className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                    >
                      Recepción 13:00hs{" "}
                    </h4>
                  </>
                ) : (
                  <>
                    <h4
                      className={`${openSans.className} mt-3 w-80 text-center text-xl font-semibold ${text}`}
                    >
                      Día
                    </h4>
                    <p
                      className={`${openSans.className} mb-2 w-80 text-center text-base ${text}`}
                    >
                      {capitalize(formattedDate) + " - "}{" "}
                      {horario_distinto ? horario_distinto : hora} hs
                    </p>
                    {ceremonia && (
                      <h4
                        className={`${openSans.className} mb-2 w-80 text-center text-base text-slate-600`}
                      >
                        {ceremonia}
                      </h4>
                    )}
                  </>
                )}
                {hora_fin && (
                  <p
                    className={`${openSans.className} mb-2 w-80 text-center text-base ${text}`}
                  >
                    Hasta Las: {hora_fin}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                className="flex flex-col items-center justify-center"
              >
                <h4
                  className={`${openSans.className} w-80 text-center text-xl font-semibold ${text}`}
                >
                  Salón
                </h4>
                <p
                  className={`${openSans.className} mb-3 w-80 text-center text-base ${text}`}
                >
                  {article.salon}
                </p>
              </motion.div>
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                className="flex flex-col items-center justify-center"
              >
                <h4
                  className={`${openSans.className} w-80 text-center text-xl font-semibold ${text}`}
                >
                  Dirección
                </h4>
                <p
                  className={`${openSans.className} w-80 text-center text-base ${text}`}
                >
                  {" "}
                  {salon?.direccion}
                </p>
              </motion.div>
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
              >
                {!sin_foto_salon ? (
                  <div className="relative mt-4 h-60 w-[90vw] rounded-sm md:h-[400px] md:w-[45vw]">
                    {salon?.foto_salon && (
                      <img
                        src={salon.foto_salon}
                        style={imgstyle}
                        alt="Salon"
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </motion.div>
              {estacionamiento && (
                <p
                  className={`${openSans.className} w-80 text-center text-base ${text}`}
                >
                  Contamos con estacionamiento sin cargo
                </p>
              )}
              {salon?.link_maps && (
                <div className="mt-5 flex w-full flex-col items-center justify-evenly sm:flex-row ">
                  {article.mfmf != "sin_janos" && (
                    <a href={salon?.link} target="_blank">
                      <button
                        className={`${openSans.className} ${
                          text == "text-white" && "invert"
                        } mb-3 mt-2 w-44 text-center sm:text-sm lg:w-64 ${bgbtn} mx-1 rounded-full px-6 py-2 ${txtbtn} transform shadow-lg outline-none transition-transform active:scale-90`}
                      >
                        Conocelo
                      </button>
                    </a>
                  )}
                  <a href={salon.link_maps} target="_blank">
                    <button
                      className={`${openSans.className} ${
                        text == "text-white" && "invert"
                      } mb-3 mt-2 w-44 text-center sm:text-sm lg:w-64 ${bgbtn} mx-1 rounded-full px-6 py-2 ${txtbtn} transform shadow-lg outline-none transition-transform active:scale-90`}
                    >
                      ¿Cómo llegar?



                      
                    </button>
                  </a>
                </div>
              )}

              <div className="flex flex-col items-center justify-center">
                {article.nombre != "Noe" && (
                  <div className="mt-6 flex flex-col items-center">
                    <h3
                      className={`${openSans.className} w-80 text-center text-xl ${text}`}
                    >
                      {" "}
                      Dress Code{" "}
                    </h3>
                    <h4
                      className={`${openSans.className} dresscode w-80 text-center text-base ${text}`}
                    >
                      {" "}
                      {article.dress_code
                        ? article.dress_code
                        : "Elegante"}{" "}
                    </h4>
                    <div
                      className={`relative m-6 h-16 w-16 ${
                        text == "text-secondary-600" && "opacity-60"
                      }  ${text == "text-white" && "invert"}`}
                    >
                      <Image
                        src={iconoDC}
                        fill
                        style={{
                          opacity: opacity,
                          filter: filter,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

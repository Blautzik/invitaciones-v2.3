import Image from "next/image";
import React from "react";
import { openSans } from "../../utils/fonts";
import Accordion from "../6/Accordion";
import { FaBullseye } from "react-icons/fa6";

const RegalosCapri= ({ article, foto_regalos, bg }) => {
  let opacity = 0.65;
  let texto = "text-white";
  let iconStyle = {
    filter: "invert(1)",
  };
  let cbuCustom = false;
  let frase_abajo = false;
  let showAlias = true;
  let hide = false;
  let cta2 = false;
  let cbu2 = false;
  let alias3 = false;
  let texto2 = false;
  let otra_altura = false;
  let nombre_cta1 = false;
  let urna = false;
  let cvu = false;
  let caprichin = false;
  let otro_titular = false;

  if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
    opacity = 1;
  }

  if (article.url == "Mayra-y-Hernan-17-01") {
    opacity = 1;
    otra_altura = "h-[600px] md:h-screen";
  }

  if (bg == "bg-[#f8f5ee]") {
    texto = "text-gray-900";
    iconStyle = {
      filter: "invert(0.1",
    };
  }

  if (article.url == "Sofi-13-12") {
    texto = "text-secondary-600";
    opacity = 1;
    iconStyle = {
      filter: "invert(0.7)",
    };
    otra_altura = "h-[600px] md:h-screen";
  }

  if (article.form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
    bg = "bg-black";
    opacity = 1;
    texto = "text-white";
  }

  const imageStyle = {
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
    opacity: opacity,
    backgroundColor: "#fff",
  };

  if (article.form_id == "1BVNjGdXGL4DgYyY0qOy0OfSzXWWCG9WusnvfNaSaRyA") {
    cbuCustom = "$leo.dam95";
    imageStyle.objectPosition = "55% 50%";
  }

  if (article.form_id == "1xEz5o-7DzhgQaxoMWHJ_np5PwKr3FO5Z7LIyTuYwyKg") {
    frase_abajo = "El salón cuenta con sector de regalos y cofre";
  }
  if (article.form_id == "1S2MaJiqQEDy42gv8_E6L9OTW5B5piCAAjgjjIuSyaPQ") {
    texto = "text-gray-900";
    texto2 = "text-white";
    iconStyle = {
      filter: "invert(0.1",
    };
  }

  if (article.mail == "karina_1607@yahoo.com.ar") {
    iconStyle = {
      opacity: 0,
    };
    hide = true;
  }

  if (article.alias == "no") {
    showAlias = false;
  }

  if (article.form_id == "1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM") {
    cta2 = "cuenta en dólares";
    cbu2 = "00703916-31004008808033";
    alias3 = "ALDEA.RING.VACA";
    nombre_cta1 = "Cuenta en Pesos";
  }

  if (article.form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
    otra_altura = "h-[600px] md:h-screen";
  }

  if (article.form_id == "1S2MaJiqQEDy42gv8_E6L9OTW5B5piCAAjgjjIuSyaPQ") {
    otra_altura = "h-[600px] md:h-screen";
  }

  if (article.form_id == "1uG27558N8RX4coNRJrKF1qep_8l2xfJ1UeQvTZk26Rg") {
    imageStyle.objectPosition = "30% 50%";
  }

  if (article.url == "Carmela-01-12") {
    otra_altura = "h-[600px] md:h-screen";
  }

  if (article.url === "Sofia-07-12") {
    imageStyle.objectPosition = "28% 50%";
  }

  if (article.url == "Dana-29-11") {
    imageStyle.objectPosition = "top";
  }

  if (article.url == "Carly-y-Fer") {
    cta2 = "Banco Galicia";
    cbu2 = "0070999030004078679978";
    alias3 = "MURO.TELAR.CAMISA";
    article.frase_regalos =
      "Tu presencia es nuestro mejor regalo, pero si aún así deseas hacernos un obsequio .Aquí esta nuestros números de cuenta :";
    nombre_cta1 = "Mercado Pago";
    article.dni = false;
  }

  if (article.url == "Malvi-28-02") {
    bg = "bg-blue-600";
  }
  if (article.url == "Luisana-22-02") {
    bg = "bg-blue-600";
  }

  if (article.url == "Dai-y-Leo") {
    bg = "bg-[#5f8575]";
    frase_abajo = "Sino en la fiesta contaremos con un buzón";
  }

  if (article.url == "Cris-y-Tefi") {
    cta2 = "Cuenta en Pesos";
    cbu2 = "0170006040000005239960";
    alias3 = "ESTEFI.BBVA";
    nombre_cta1 = "Cuenta en Dólares";
  }

  if (article.url == "Antonella-03-03") {
    imageStyle.objectPosition = "30% 50%";
  }

  if (article.url == "Mia-22-02") {
    urna = true;
  }

  if (article.url == "Adri-y-Ro") {
    imageStyle.objectPosition = "60% 50%";
    imageStyle.opacity = 0.6;
  }

  if (article.url == "Ela-y-Mari") {
    imageStyle.objectPosition = "37% 50%";
  }

  if (article.url == "Vane-y-Pato") {
    cta2 = "Caja de ahorro en pesos Banco Galicia";
    cbu2 = "0070999030004155979663";
    alias3 = "casamiento.vaneypato";
    nombre_cta1 = "Caja de ahorro en dólares, Banco Nación";
    article.dni = false;
  }
  if (article.url == "Victoria-15-03") {
    cvu = true;
    cta2 = "Opción 2";
    cbu2 = "0000003100023047684051";
    alias3 = "v.giltripicchio";
    nombre_cta1 = "Opción 1";
    article.dni = false;
    otro_titular = "Maria Soledad Tripicchio";
  }

  if (article.url === "Luisana-05-04") {
    caprichin = true;
    hide = true;
  }

  if (article.url == "Juani-28-03") {
    bg = "bg-black";
  }

  if (article.url == "Cande-30-03") {
    texto = "text-secondary-600";
  }

  if (article.url == "Sofi-12-04") {
    bg = "bg-black";
  }

  return (
    <div className={` ${otra_altura ? otra_altura : "h-screen"} w-full `}>
      <div className="relative flex h-full w-full flex-col items-center justify-between bg-gray-700">
        <img
          src={foto_regalos}
          style={{
            ...imageStyle,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0
          }}
          alt="portada"
        />
        <div
          className={`${
            article.mfmf === "regalo_sin_datos" ? "pt-[72vh] " : "mt-6"
          } z-30 mx-10 flex flex-col items-center text-center text-white opacity-100 `}
        >
          {!caprichin && (
            <Image
              src={
                "https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png"
              }
              height={50}
              width={50}
              style={iconStyle}
            />
          )}
          <h3
            className={`${openSans.className} text-wihte mb-2 mt-4 text-3xl font-[400]`}
          >
            {" "}
            {!hide && "Regalos"}
          </h3>
          {article.mail === "marine" ? (
            <div
              className={`${openSans.className} font-[500] leading-5  text-slate-800`}
            >
              {article.frase_regalos}
            </div>
          ) : (
            <div className={`${openSans.className} font-[500] leading-5`}>
              {article.frase_regalos}
            </div>
          )}
        </div>
        <div
          className={`${openSans.className} z-30 mb-24 w-10/12  lg:w-1/2 ${
            bg ? "opacity-100" : "opacity-90"
          } `}
        >
          {article.alias && (
            <Accordion
              open
              header="Datos Bancarios"
              bg={bg}
              texto={texto2 ? texto2 : texto}
            >
              <div
                className={`${openSans.className} regalos  text-sm opacity-100`}
              >
                {cta2 && (
                  <p className="pb-2">
                    <strong>{nombre_cta1} </strong>{" "}
                  </p>
                )}
                {article.titular && (
                  <p className="pb-2">
                    <strong>Titular: </strong> {otro_titular || article.titular}
                  </p>
                )}
                {article.cbu && (
                  <p className="pb-2">
                    <strong>CBU: </strong> {article.cbu}{" "}
                  </p>
                )}
                {showAlias && (
                  <p className="pb-2">
                    <strong>Alias: </strong> {article.alias}
                  </p>
                )}
                {article.dni && (
                  <p className="pb-2">
                    <strong>DNI: </strong> {article.dni}
                  </p>
                )}
                {cbuCustom && (
                  <>
                    {" "}
                    <br />{" "}
                    <p className="pb-2">
                      <strong>LEMON TAG</strong> $leo.dam95{" "}
                    </p>{" "}
                  </>
                )}
                {cta2 && (
                  <>
                    {cta2 && (
                      <p className="pb-2">
                        <strong>{cta2} </strong>{" "}
                      </p>
                    )}
                    {article.titular && (
                      <p className="pb-2">
                        <strong>Titular: </strong> {article.titular}
                      </p>
                    )}
                    {cbu2 && (
                      <p className="pb-2">
                        <strong>{cvu ? "CVU" : "CBU:"} </strong> {cbu2}{" "}
                      </p>
                    )}
                    {alias3 && (
                      <p className="pb-2">
                        <strong>Alias: </strong> {alias3}
                      </p>
                    )}
                  </>
                )}
              </div>
            </Accordion>
          )}

          {urna && (
            <Accordion
              open
              header="Urna en recepción"
              bg={bg}
              texto={texto2 ? texto2 : texto}
            >
              <div
                className={`${openSans.className} regalos  text-sm opacity-100`}
              >
                <p className="pb-2">
                  Habrá una urna y un espacio en el salón para que me regales lo
                  que desees.{" "}
                </p>
              </div>
            </Accordion>
          )}
          {frase_abajo && (
            <p className="text-center text-white ">{frase_abajo}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegalosCapri;

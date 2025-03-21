"use client";
import React, { useState } from "react";
import { GoCheckCircle } from "react-icons/go";
import { openSans } from "../../utils/fonts";

const Formulario = ({
  form_id,
  frase_extra,
  color_fondo,
  menu_antinino,
  sin_ninos,
  article,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chicos, setchicos] = useState("");
  const [message, setMessage] = useState("");
  const [menu, setMenu] = useState("Menú Principal");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = form_id;
  let con_menu = true;
  let menu_especial = false;
  let texto = "text-white";
  let frase_form = false;
  let sin_menu_infantil = true;
  let placeholder_nombre = "Nombre y Apellido";
  let placeholder_email = "Email";
  let caprichin = true;
  let sin_mail = false;

  const [color, setColor] = useState(
    `bg-[${color_fondo && color_fondo.toLowerCase()}]`
  );

  const inputCN =
    "shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm";

  const isFormValid = name && menu;

  sin_ninos = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || !isFormValid) {
      return;
    }

    setIsSubmitting(true);

    let form = {
      id,
      name,
      email,
      chicos,
      message,
      menu,
    };

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const content = await response.json();

      if (response.ok) {
        // Submission was successful
        // Clear the form fields
        setMessage("");
        setchicos("");
        setName("");
        setEmail("");
        setMenu("Menú Principal");

        // Enable the submit button again
        setIsSubmitting(false);

        alert("Asistencia registrada correctamente! Muchas gracias!");
      } else {
        // Handle errors if the submission fails
        // Enable the submit button again
        setIsSubmitting(false);
        alert(
          "Error al registrar la asistencia. Por favor, intenta nuevamente."
        );
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Error al registrar la asistencia. Por favor, intenta nuevamente.");
    }
  };

  if (form_id == "1STzJd8lJeUtfWZTdNnc5q_3MXOjgQtcB0HXIfYACA4E") {
    menu_especial = true;
  }

  if (form_id == "1gc1GFxewlPrds-R6XlsZNAqu2kdPLKzNm5_LD6Kxm4M") {
    con_menu = false;
  }

  if (article.url == "Martu-01-12") {
    con_menu = false;
    frase_form = "El plazo máximo de confirmación de asistencia es el 10/11";
  }
  if (article.url == "Dana-29-11") {
    frase_form = "Trae una camiseta de fútbol para el final de la fiesta!";
  }

  if (form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk") {
    sin_menu_infantil = true;
  }

  if (form_id == "1kBqWMPyYGO5-nd2JvzyT1plUhqw0pAVtwuoIRsfk1rw") {
    sin_menu_infantil = true;
  }

  if (form_id == "11UkvfgFY2i4l32h-1jdxF6Xcg3BsCZBKHZJT-D_qri4") {
    con_menu = false;
  }

  if (article.url == "Bianca-21-12") {
    frase_extra =
      "El salón cuenta con estacionamiento, reservá tu lugar colocando nombre, apellido y patente en este espacio";
  }

  if (article.url == "Malvi-28-02") {
    color_fondo = "bg-blue-600 bg-opacity-100";
    frase_extra = "Qué canción no puede faltar en la playlist de la fiesta?";
  }

  if (article.url == "Luisana-22-02") {
    color_fondo = "bg-blue-600 bg-opacity-100";
  }

  if (article.url == "Renata-05-04") {
    frase_extra =
      "Comentarios. (En caso de tener hijos menores de 12 años por favor completar aquí sus datos pero si tiene alguna restricción alimentaria llenar una nueva tarjeta)";
  }

  if (article.url == "Juani-28-03") {
    color_fondo = "bg-black";
  }

  if (article.url == "Melina-12-04") {
    placeholder_nombre = "Apellido y Nombre";
    placeholder_email = "DNI";
  }

  if (article.url == "Sofi-12-04") {
    color_fondo = "bg-black";
    caprichin = false;
  }

  if (article.url == "Angela-12-04") {
    color_fondo = "bg-[#A1A187]";
    con_menu = false;
    sin_mail = true;
  }

  return (
    <div
      className={`${openSans.className}bg-[#f09797] bg-opacity-80 ${
        color_fondo ? color_fondo : "bg-violeta"
      } min-h-screen w-screen  `}
    >
      <div className="mx-auto py-10 ">
        <div className="mx-auto flex w-[270px] flex-col items-center text-center">
          {caprichin && (
            <GoCheckCircle className="text-[66px] font-thin text-white" />
          )}
          <h3 className="pt-6 text-2xl text-white">Confirmar Asistencia</h3>
          <p className="text-md max-w-2xl pt-20 font-[500] text-white">
            Por favor completá el formulario con tus datos y comentarios para
            organizar la mejor fiesta
          </p>
        </div>

        <form
          className="mx-auto w-10/12 space-y-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              className={inputCN}
              placeholder={placeholder_nombre}
            />
          </div>
          {!sin_mail && (
            <div className="flex items-center justify-center">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={placeholder_email === "Email" ? "email" : "text"}
                name="email"
                id="email"
                className={inputCN}
                placeholder={placeholder_email}
              />
            </div>
          )}
          {!sin_ninos && (
            <div className="flex items-center justify-center">
              <label htmlFor="chicos" className="sr-only">
                Chicos
              </label>
              <input
                value={chicos}
                onChange={(e) => setchicos(e.target.value)}
                type="text"
                name="chicos"
                id="chicos"
                className={inputCN}
                placeholder="Si venís con niños escribí sus nombres aqui"
              />
            </div>
          )}

          {con_menu && (
            <>
              {menu_especial ? (
                <>
                  <h3
                    className={`${openSans.className} ${texto} text-md max-w-2xl pl-2 font-[500]`}
                  >
                    Opciones de menú
                  </h3>
                  <div className="flex items-center justify-center">
                    <select
                      name="select"
                      className={`${inputCN} text-gray-500`}
                      onChange={(e) => setMenu(e.target.value)}
                      value={menu}
                    >
                      <option value="Menú Principal">
                        Menú Principal: Ribs, con papas fritas y ensalada de col{" "}
                      </option>
                      <option value="Menú Vegetariano">
                        Menú Vegetariano: Milanesa de soja a la Napo con papas
                        fritas{" "}
                      </option>
                      <option value="Menú Vegano">
                        Menú Vegano: Milanesa de soja con papas fritas{" "}
                      </option>
                      <option value="Menú Celíaco">
                        Menú Celíaco: Canelones de verdura{" "}
                      </option>
                      <option value="Menú Adolescente/Niño">
                        Menú Adolescente/Niño: Hamburguesa con papas fritas{" "}
                      </option>
                      <option value="Menú Kosher">
                        Menú Kosher: Ternera braseada con salsa de vino y
                        guarnición
                      </option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <h3
                    className={`${openSans.className} ${texto} text-md max-w-2xl pl-2 font-[500]`}
                  >
                    Opciones de menú
                  </h3>
                  <div className="flex items-center justify-center">
                    <select
                      name="select"
                      className={`${inputCN} text-gray-500`}
                      onChange={(e) => setMenu(e.target.value)}
                      value={menu}
                    >
                      <option value="Menú Principal">Menú Principal</option>
                      <option value="Menú Vegetariano">Menú Vegetariano</option>
                      <option value="Menú Vegano">Menú Vegano</option>
                      <option value="Menú Celíaco">Menú Celíaco</option>
                      {!sin_menu_infantil && (
                        <option value="Menú Adolescente/Niño">
                          Menú Adolescente/Niño
                        </option>
                      )}
                      <option value="Otro, Especificar en comentarios">
                        Otro, Especificar en comentarios
                      </option>
                    </select>
                  </div>
                </>
              )}
            </>
          )}

          {form_id === "1rANUHdn-B7bO1ZKLJi55azzLEQNIlpNztBYCuPE5_BM" ? (
            <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className={`${inputCN} !h-40 pt-4`}
                placeholder={
                  frase_extra ||
                  "La combi sale desde la calle Valencia casi Patagones desde las 19.30 hasta las 20.15. De regreso estará disponible para la vuelta al mismo lugar"
                }
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className={`${inputCN} !h-40 pt-4`}
                placeholder={frase_extra || "Comentarios y saludos"}
              />
            </div>
          )}

          <div className="flex items-end justify-end">
            <button
              type="submit"
              className={`${
                isSubmitting || !isFormValid
                  ? "cursor-not-allowed opacity-50"
                  : ""
              } flex w-36 items-center justify-evenly rounded-full bg-white px-6 py-3 text-[14px] font-[600] text-black`}
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? "Enviando..." : "CONFIRMAR"}
            </button>
          </div>
        </form>
        {frase_form && (
          <div className="px-10 text-center text-white">{frase_form}</div>
        )}
      </div>
    </div>
  );
};

export default Formulario;

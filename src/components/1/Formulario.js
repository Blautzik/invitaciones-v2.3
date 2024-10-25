'use client'
import React, { useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';
import { openSans } from '../../utils/fonts';

const Formulario = ({ form_id, frase_extra, color_fondo, menu_antinino, sin_ninos }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chicos, setchicos] = useState('');
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('Menú Principal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = form_id;
  let con_menu = true
  let menu_especial = false
  let texto = "text-white"

  const [color, setColor] = useState(`bg-[${color_fondo && color_fondo.toLowerCase()}]`)

  const inputCN =
    'shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm';

  const isFormValid = name && email && menu;

  sin_ninos = true

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
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const content = await response.json();

      if (response.ok) {
        // Submission was successful
        // Clear the form fields
        setMessage('');
        setchicos('');
        setName('');
        setEmail('');
        setMenu('Menú Principal');

        // Enable the submit button again
        setIsSubmitting(false);

        alert('Asistencia registrada correctamente! Muchas gracias!');
      } else {
        // Handle errors if the submission fails
        // Enable the submit button again
        setIsSubmitting(false);
        alert('Error al registrar la asistencia. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Error al registrar la asistencia. Por favor, intenta nuevamente.');
    }
  };


  
  if(form_id == "1STzJd8lJeUtfWZTdNnc5q_3MXOjgQtcB0HXIfYACA4E"){
    menu_especial = true
  }


  if(form_id == "1gc1GFxewlPrds-R6XlsZNAqu2kdPLKzNm5_LD6Kxm4M"){
    con_menu= false
  }

  return (
    <div className={`${openSans.className} ${color_fondo ? color : 'bg-violeta'} bg-[#f09797] w-screen min-h-screen bg-opacity-80`}>
      <div className="mx-auto py-10 ">
        <div className="mx-auto flex flex-col items-center text-center w-[270px]">
          <GoCheckCircle className="text-[66px] font-thin text-white" />
          <h3 className="text-white text-2xl pt-6">Confirmar Asistencia</h3>
          <p className="text-white text-md max-w-2xl font-[500] pt-20">
            Por favor completá el formulario con tus datos y comentarios para organizar la mejor fiesta
          </p>
        </div>

        <form className="py-4 space-y-4 mx-auto w-10/12" onSubmit={handleSubmit}>
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
              placeholder="Nombre y Apellido"
            />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className={inputCN}
              placeholder="Email"
            />
          </div>
          {
            !sin_ninos &&

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
          }

          {con_menu &&

            menu_especial ?
            <>
              <h3 className={`${openSans.className} ${texto} text-md max-w-2xl font-[500] pl-2`}>Opciones de menú</h3>
              <div className="flex items-center justify-center">
                <select
                  name="select"
                  className={`${inputCN} text-gray-500`}
                  onChange={(e) => setMenu(e.target.value)}
                  value={menu}
                >
                  <option value="Menú Principal">Menú Principal:  Ribs, con papas fritas y ensalada de col </option>
                  <option value="Menú Vegetariano">Menú Vegetariano: Milanesa de soja a la Napo con papas fritas </option>
                  <option value="Menú Vegano">Menú Vegano: Milanesa de soja con papas fritas </option>
                  <option value="Menú Celíaco">Menú Celíaco: Canelones de verdura </option>
                  <option value="Menú Adolescente/Niño">Menú Adolescente/Niño: Hamburguesa con papas fritas  </option>
                  <option value="Menú Kosher">Menú Kosher: Ternera braseada con salsa de vino y guarnición</option>
                </select>
              </div>
            </>
            :
            <>
              <h3 className={`${openSans.className} ${texto} text-md max-w-2xl font-[500] pl-2`}>Opciones de menú</h3>
              <div className="flex items-center justify-center">
                <select
                  name="select"
                  className={`${inputCN} text-gray-500`}
                  onChange={(e) => setMenu(e.target.value)}
                  value={menu}
                >
                  <option value="Menú Principal">Menú Principal: </option>
                  <option value="Menú Vegetariano">Menú Vegetariano</option>
                  <option value="Menú Vegano">Menú Vegano</option>
                  <option value="Menú Celíaco">Menú Celíaco</option>
                  {form_id !== "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk" && <option value="Menú Adolescente/Niño">Menú Adolescente/Niño</option>}
                  <option value="Otro, Especificar en comentarios">Otro, Especificar en comentarios</option>
                </select>
              </div>
            </>
          }


          {form_id === "1rANUHdn-B7bO1ZKLJi55azzLEQNIlpNztBYCuPE5_BM"
            ? <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className={`${inputCN} pt-4 !h-40`}
                placeholder={frase_extra || 'La combi sale desde la calle Valencia casi Patagones desde las 19.30 hasta las 20.15. De regreso estará disponible para la vuelta al mismo lugar'}
              />
            </div>
            :

            <div className="flex items-center justify-center">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                className={`${inputCN} pt-4 !h-40`}
                placeholder={frase_extra || 'Comentarios y saludos'}
              />
            </div>
          }

          <div className="flex items-end justify-end">
            <button
              type="submit"
              className={`${isSubmitting || !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                } bg-white text-black flex justify-evenly items-center w-36 text-[14px] font-[600] px-6 py-3 rounded-full`}
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? 'Enviando...' : 'CONFIRMAR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
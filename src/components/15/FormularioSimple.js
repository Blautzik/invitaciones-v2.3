'use client'
import React, { useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';
import { openSans } from '../../utils/fonts';

const FormularioSimple = ({ form_id, frase_extra, color_fondo, menu_antinino, sin_ninos }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chicos, setchicos] = useState('1');
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = form_id;

  const [color, setColor] = useState(`bg-[${color_fondo && color_fondo.toLowerCase()}]`)

  const inputCN =
    'shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm';

  const isFormValid = name && menu;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || !isFormValid) {
      return;
    }

    setIsSubmitting(true);

    let form = {
      id,
      name,
      chicos,
      message,
      menu,
    };

    try {
      const response = await fetch('/api/simpleform', {
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
        setName('');
        setMenu('Si');

        // Enable the submit button again
        setIsSubmitting(false);

        alert('Asistencia registrada correctamente! Muchas gracias!');
      } else {

        setIsSubmitting(false);
        alert('Error al registrar la asistencia. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Error al registrar la asistencia. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className={`${openSans.className} ${color_fondo ? color : 'bg-violeta'} bg-[#f09797] w-screen min-h-screen bg-opacity-80`}>
      <div className="mx-auto py-10 ">
        <div className="mx-auto flex flex-col items-center text-center w-[270px]">
          <GoCheckCircle className="text-[66px] font-thin text-white" />
          <h3 className="text-white text-2xl pt-6">Confirmar Asistencia</h3>
          <p className="text-white text-md max-w-2xl font-[500] pt-20">
            Por favor completá el formulario con tus datos
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

          <h3 className="text-white text-md max-w-2xl font-[500] pl-2">Asistiré</h3>
          <div className="flex items-center justify-center">
            <select
              name="select"
              className={`${inputCN} text-gray-500`}
              onChange={(e) => setMenu(e.target.value)}
              value={menu}
              required
            >
              <option value="">Si/No</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          { menu == "Si" &&
            <>
              <h3 className="text-white text-md max-w-2xl font-[500] pl-2">Cuántas personas</h3>
              <div className="flex items-center justify-center">
                <select
                  name="select"
                  className={`${inputCN} text-gray-500`}
                  onChange={(e) => setchicos(e.target.value)}
                  value={menu}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </>
          }
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

export default FormularioSimple;
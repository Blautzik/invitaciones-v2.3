'use client'
import React, { useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';
import { openSans } from '../../utils/fonts';
import { Open_Sans } from 'next/font/google';

const FormularioVIP = ({ form_id, frase_extra, color_fondo, article }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chicos, setChicos] = useState('No');
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('Menú Principal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = form_id;
  let frase_saludos = '';

  const [color, setColor] = useState(`bg-[${color_fondo && color_fondo.toLowerCase()}]`);

  const inputCN =
    'shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm';

  const isFormValid = name && email && menu;

  if (article.mail === 'bzerrizuela@gmail.com') {
    frase_saludos =
      'Tenemos servicio de transporte ida y vuelta al salon desde Country Abril Club de Campo. Asegurá y reservá tu lugar, ingresando tu nombre en este espacio';
  }

  console.log(frase_saludos);

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
        setChicos('No');
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
              Nombre
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

         

          <h3 className="text-white text-md max-w-2xl font-[500] pl-2">Opciones de menú</h3>
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
              <option value="Menú Adolescente/Niño">Menú Adolescente/Niño</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="message" className="sr-only">
              Mensaje
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              className={`${inputCN} pt-4 !h-32`}
              placeholder={frase_extra || frase_saludos || 'Saludos y comentarios'}
            />
          </div>
     <div className="flex items-center justify-center">
            <label htmlFor="chicos" className="sr-only">
             Necesitas autorización para ingresar al Country Abril 
            </label>
            <select
              name="chicos"
              className={`${inputCN} text-gray-500`}
              onChange={(e) => setChicos(e.target.value)}
              value={chicos}
            >
              <option value="No">No</option>
              <option value="Sí">Sí</option>
            </select>
          </div>
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className={`${
                isSubmitting || !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              } bg-white text-black flex justify-evenly items-center w-36 text-[14px] font-[600] px-6 py-3 rounded-full`}
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? 'Enviando...' : 'CONFIRMAR'}
            </button>
          </div>
          <p className='flex-end text-right text-sm leading-tight'>
          *Los residentes de Abril deberán enviar autorización de salida del country dirigida 
          a puesto1@abrilclub.com.ar
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormularioVIP;

'use client'
import { openSans } from '@/utils/fonts';
import React, { useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';

const Formulario = ({ form_id, frase_extra, bg, otra_frase, frase_formulario }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [chicos, setchicos] = useState('');
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('Menú Principal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id = form_id;
  let con_menu = true
  let con_mail = true

  const inputCN =
    'shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm';

  const isFormValid = name && email && menu;
  let texto = "text-white"


  if(form_id ==="16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0"){
    bg = "bg-black"
  }

  if(form_id == "1aLSubnXmSUuyCEA9_1XPPkjIK5bECXyKsHDl60kWxJs"){
    bg= "bg-[url('https://res.cloudinary.com/fedexx/image/upload/v1727300651/Imagen_de_WhatsApp_2024-09-19_a_las_10.54.59_d90a1b17_zf54it.jpg')] bg-no-repeat	bg-cover	"
  }

  if(bg == "bg-[#f8f5ee]"){
    texto = "text-gray-900"
  }

  if(form_id =="13fSzKs3csXqr3iIqCWrJnLRw1gUQ7x-jF2bwZbLBhic"){
    con_menu = false
  }

  if(form_id == "1ris5vIvuRruQq3JPPoudwh5YuctqofYQfS3LnHYcMlk"){
    con_mail = false
  }


  if (bg == "bg-[#e8e4db]"){
    texto = "text-secondary-600" 
  }

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

        setMessage('');
        setchicos('');
        setName('');
        setEmail('');
        setMenu('Menú Principal');

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
    <div className={`${bg ? bg : 'bg-violeta'} w-screen min-h-screen bg-opacity-80`}>
      <div className="mx-auto py-10 ">
        <div className="mx-auto flex flex-col  items-center text-center w-[270px]">
          <GoCheckCircle className={`${texto} text-[66px] font-thin`}/>
          <h3 className={`${openSans.className} ${texto} text-2xl my-4 text-center w-10/12 leading-7`}>Confirmar Asistencia</h3>
          <p className={`${openSans.className} ${texto} text-md max-w-2xl font-[500]`}>
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

          {
            con_mail &&
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
            }
          { con_menu &&
            <>
            

          <h3 className={`${openSans.className} ${texto} text-md max-w-2xl font-[500] pl-2`}>Opciones de menú</h3>
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
              <option value="Otro, Especificar en comentarios">Otro, Especificar en comentarios</option>
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
              placeholder={frase_formulario || 'Comentarios y saludos'}
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

export default Formulario;
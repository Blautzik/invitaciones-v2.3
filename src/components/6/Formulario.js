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
  let menu_especial = false
  let sin_menu_infantil = true
  let frase = undefined 

  const inputCN =
    'shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-sm';

  let isFormValid = name && email && menu;
  let texto = "text-white"


  if (form_id === "16tnTOMcRPSmLH1OwuOvOAikpyofJTK5Wz7eclwmIls0") {
    bg = "bg-black"
  }

  if (form_id == "1aLSubnXmSUuyCEA9_1XPPkjIK5bECXyKsHDl60kWxJs") {
    bg = "bg-[url('https://res.cloudinary.com/fedexx/image/upload/v1727300651/Imagen_de_WhatsApp_2024-09-19_a_las_10.54.59_d90a1b17_zf54it.jpg')] bg-no-repeat	bg-cover	"
  }

  if (bg == "bg-[#f8f5ee]") {
    texto = "text-gray-900"
  }

  if (form_id == "13fSzKs3csXqr3iIqCWrJnLRw1gUQ7x-jF2bwZbLBhic") {
    con_menu = false
  }

  if (form_id == "1ris5vIvuRruQq3JPPoudwh5YuctqofYQfS3LnHYcMlk") {
    con_mail = false
    isFormValid = name && menu
  }


  if (bg == "bg-[#e8e4db]") {
    texto = "text-secondary-600"
  }

  if (form_id == "17lEcMroKT-oV8RPnGbxEcbyrNJi0yZfgimFst8Y24_8") {
    frase_formulario = "Un micro saldrá desde la puerta del club Vélez Sarsfield a las 12:00 hs. Colocá tu nombre en este espacio para reservar tu lugar"
  }

  if(form_id == "1STzJd8lJeUtfWZTdNnc5q_3MXOjgQtcB0HXIfYACA4E"){
    menu_especial = true
  }

  if(form_id == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk" ){
    sin_menu_infantil = true
  }

  if(form_id == "1g_fTVmApIfCFX3US1H-epaagSksY4fs9kKvB5ZqFdiA"){
    sin_menu_infantil = true
  }

  if(form_id == "1Y-lsu6OkKXN063Cv2emLPgPW0kBkdUPKM3W5V3BbmAU"){
    isFormValid = name && menu
  }

  if(form_id == "10dz7LDlRYloyeBFoP2sJP5Lq5CwPzDmIEYGhbWTyMds"){
    frase_formulario = "¿Vas a necesitar combi? Si es así, ¿desde donde preferirías salir? \n  a)9 de Julio \n  b)Av. Santa Fe y Scalabrini Ortiz \n  c) Puente Saveedra"
  }



  if (form_id == "1kKF8B-1gNtql6y8_1N2Q-i308_HjCgZddMOEVvUmmvY"){
    bg= "bg-[#5f8575]"
  }


  if ( form_id == "1gU6UL4IAi_uIIAs1Jn1X3DIkF7zcnbLfLZetoZOuoAk"){
    bg = "bg-sky-900"
  }


  if (form_id == "1UBuuvIEVZUPa-L05AZOJOk_OXhWNBhhZlDnf9Mwxy5s"){
    frase= "Confirmar antes de las 48 hs. De recibida esta invitación. Gracias "
  }

  if (form_id == "1trFNkU-_EGblyx3Z44wXHg_6ajmphpvmfjGRfgkgAJI"){
    texto = "text-[#2f4538]"
  }


  if ( form_id == "1pnly9vkAU_g7slxCUBs5r01T0Xyd72f6_6ytoN5UbCA"){
    frase = "Para asegurarnos de que todos puedan disfrutar plenamente de nuestra boda, hemos decidido que el evento sea solo para adultos. ¡Esperamos contar con su compañía y compresión en este día tan especial!"
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
          <GoCheckCircle className={`${texto} text-[66px] font-thin`} />
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
                <option value="Menú Principal">Menú Principal </option>
                <option value="Menú Vegetariano">Menú Vegetariano</option>
                <option value="Menú Vegano">Menú Vegano</option>
                <option value="Menú Celíaco">Menú Celíaco</option>
                { !sin_menu_infantil && <option value="Menú Adolescente/Niño">Menú Adolescente/Niño</option>}
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
          {frase && <p className={`${openSans.className} ${texto} text-md max-w-2xl font-[700]`}>
            {frase}
          </p>}

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
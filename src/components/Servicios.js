
import { FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import { FaBridgeCircleCheck, FaFaucet, FaHammer, FaLightbulb, FaListCheck, FaPaintbrush, FaSunPlantWilt, FaWrench } from 'react-icons/fa6';
import {amatic, minion, roboto, roboto_serif} from '../utils/fonts';
import { Roboto_Serif } from 'next/font/google';
import { BsAlarm, BsCamera, BsGift, BsInstagram, BsPhone } from 'react-icons/bs';
import { IoMusicalNoteOutline } from 'react-icons/io5';


const Servicios = () => {

    const iconCN = 'h-16 w-16'

    const services = [
        { title: 'Ubicación e Indicaciones', description: 'Compartí con tus invitados la dirección exacta y la ubicación de tu ceremonia y fiesta, con las indicaciones de cómo llegar en Google Maps.', icon: <FaMapMarkerAlt className={iconCN}/> },
        { title: 'Lista de regalos', description: 'Agregá un link a tu lista de regalos o indicá los datos de tu cuenta bancaria.', icon: <BsGift className={iconCN}/> },
        { title: 'Instagram Wall', description: '¿Ya tenés el #hashtag de tu evento? No dejes que las fotos tuyas y de tus invitados se pierdan dentro de instagram. Con la Instagram Wall vas a poder ver todo en un solo lugar.', icon: <BsInstagram className={iconCN}/> },
        { title: 'Cuenta regresiva', description: 'Description for Instalación eléctrica', icon: <BsAlarm className={iconCN}/> },
        { title: 'Album de fotos', description: 'Compartí en la invitación todo el camino recorrido hasta el evento, con un álbum que muestra los momentos más emotivos.', icon: <BsCamera className={iconCN}/> },
        { title: 'Lista de invitados online', description: 'Tus invitados confirman online la asistencia. ¡Y vos recibís y manejás la lista de los asistentes en una planilla de Google Docs! Todo sincronizado en tiempo real.', icon: <FaListCheck className={iconCN}/> },
        { title: 'Lista de canciones', description: 'Una opción divertida para brindar la oportunidad a tus invitados de que envíen las canciones que quieren escuchar.', icon: <IoMusicalNoteOutline className={iconCN}/> },
        { title: 'Adaptables', description: 'Simples, elegantes y funcionales tanto en desktop como en mobile.', icon: <BsPhone className={iconCN}/> },
    ];

    return (
        <div className="flex flex-col justify-center items-center mx-auto p-8 w-11/12 md:w-10/12  space-y-6">
            <h1 className={`${amatic.className} text-slate-900  text-center text-5xl leading-[0.7]`}>Nuestros Servicios</h1>
            <div className='border-b-2 border-black w-1/2'></div>
            <h2 className={`${roboto.className} md:w-8/12 text-sm text-center`}>Reemplazá la tarjeta de papel tradicional para tu evento con nuestras invitaciones digitales. Creamos una página web personalizada que se adapta a todos los dispositivos, para que puedas compartir los detalles de tu evento con los que más querés de una manera simple, sustentable y elegante.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
        </div>
    )
};


export default Servicios
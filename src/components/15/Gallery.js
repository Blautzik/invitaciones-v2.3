'use client'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { Button, Modal } from 'flowbite-react';
import GallerySlider from '../1/GallerySlider';
import { openSans, Wedding } from "@/utils/fonts";


export default function Gallery({ imagenes, titulo, mail }) {
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState();
  const [showVideo, setShowVideo] = useState()

  const props = { openModal, setOpenModal };

  let nombres = false

  let byn = false

  const openClose = (index) => {
    setIndex(index)
    props.setOpenModal('default')

  }


  const images = imagenes.slice(0, 6);


  const customTheme = {
    content: {
      "base": "h-full w-full p-4 md:h-auto",
      "inner": "rounded-lg bg-transparent shadow flex flex-col "
    },
    header: {
      close: {
        base: " ",
        icon: "h-8 w-8"
      }
    },
  }

  if (images.length == 1) {

  }


  if (mail == "leomorea@gmail.com"){
    titulo = "Nuestra Historia"
    nombres = "Dai y Leo"
  }

  if(mail == "ambar.style2012@gmail.com"){
    byn = "grayscale(100%)"
  }

  return (
    <>  

      <div className="flex flex-col items-center bg-[#fff] z-10 w-screen md:max-w-4xl text-center">
        <h2 className={`${openSans.className} text-4xl mb-2 md:text-9xl md:mb-6 `}>{titulo}</h2>
        {nombres && <h2 className={`${Wedding.className} text-8xl mb-2 mt-4 md:text-9xl md:mb-6 `}>{nombres}</h2>}
        {
          mail === "mercedes.matta10@gmail.com" &&
          <p className={`${openSans.className} text-slate-700 text-sm mx-8 leading-2 mb-2 max-w-2xl font-[500]`}>
            Nuestra historia comienza sabiendo que somos el uno para el otro, el destino asi lo quiso. Todo sucedió tan naturalmente, como si nos conocieramos de toda la vida y acá estamos. Tres años, tres meses y dos días después diciendo sí a una vida llena de amor, compañía y proyectos.
          </p>
        }
        <div className={`grid ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-y-1 md:justify-center md:gap-1 w-full pl-1 mb-10`}>
          {images.map(e => <div
            key={e}
            className='rounded drop-shadow-2xl relative h-52 md:h-[350px] '
            style={{
              width: '98%', // Set a fixed width (adjust as needed)
              overflow: 'hidden', // Ensure consistent sizing
              objectFit: 'cover', // Ensure consistent image display
            }}
            onClick={() => openClose(images.indexOf(e))}>
            <Image
              src={e}
              alt='foto'
              quality={50}
              fill // Use 'layout="fill"' to fill the container
              style={{
                borderRadius: '5px',
                objectFit: "cover", // Ensure consistent image display
                objectPosition: 'top',
                filter: byn && byn,
              }}
            />
          </div>
          )}
        </div>
      </div>

      <>
        <Modal
          show={props.openModal === 'default'}
          onClose={() => props.setOpenModal(undefined)}
          className='pt-20'
          theme={customTheme}
        >
          <Modal.Body className='p-0 bg-transparent'>
            <div className='h-96 w-full'>
              <GallerySlider images={images} index={index} byn={byn} />
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-center '>
            <Button className='bg-[#772c87] text-white' onClick={() => props.setOpenModal(undefined)}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </>

    </>
  );
}

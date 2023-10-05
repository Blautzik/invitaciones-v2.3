import { AiOutlinePlayCircle } from "react-icons/ai";

import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { Button, Modal } from 'flowbite-react';
import GallerySlider from './GallerySlider';
import { openSans } from "@/utils/fonts";




export default function Gallery({ imagenes, titulo }) {
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState();
  const [showVideo, setShowVideo] = useState()

  const props = { openModal, setOpenModal };

  const openClose = (index) => {
    setIndex(index)
    props.setOpenModal('default')

  }

  const handleScroll = () => {
    setModalOpen(false)
  }



  const images = [
    imagenes[0].foto1,
    imagenes[0].foto2,
    imagenes[0].foto3,
    imagenes[0].foto4,
    imagenes[0].foto5,
    imagenes[0].foto6,

  ]

  const portadaVideo = imagenes[0].foto7


  const customTheme = {
    content: {
      "base": "relative h-full w-full p-4 md:h-auto",
      "inner": "relative rounded-lg bg-transparent shadow flex flex-col max-h-[90vh]"
    },
    header: {
      close: {
        base: " inline-flex items-center rounded-lg bg-transparent p-1.5 text-lg text-gray-900 ",
        icon: "h-8 w-8"
      }
    },
  }




  return (
    <>

      <motion.div
        className="flex flex-col items-center bg-[#fff] z-10 w-screen text center">
          <h2 className={`${openSans.className} text-4xl mb-2 md:text-9xl md:mb-6 `}>{titulo}</h2>




        <div className="md:flex md:flex-wrap grid grid-cols-2 gap-y-1 md:justify-center md:gap-1 w-full pl-1 mb-10">

          {images.map(e => <motion.div
            initial={{
              opacity: 0,

            }}
            transition={{
              duration: 0.9,

            }}
            whileInView={{
              opacity: 1,
              
            }}
            key={e}
            className='rounded drop-shadow-2xl hover:z-10 transition-all object-cover h-40 w-[98%] md:h-[24rem] md:w-[40%] md:gap-1'

            onClick={() => openClose(images.indexOf(e))}>
            <Image
              src={e}
              fill
              alt='foto'
              quality={50}
              style={{ objectFit: "cover", borderRadius: '5px', objectPosition:'top'}}
            />
          </motion.div>
          )}
        </div>
      </motion.div>

      <>
        <Modal
          show={props.openModal === 'default'}
          onClose={() => props.setOpenModal(undefined)}
          className='pt-20'
          theme={customTheme}
        >


          <Modal.Body className='p-0 bg-transparent'>
            <div className='h-96'>
              <GallerySlider images={images} index={index} />
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

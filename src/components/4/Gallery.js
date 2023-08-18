import { great_vives, roboto } from '@/utils/fonts'
import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { Button, Modal } from 'flowbite-react';
import GallerySlider from './GallerySlider';


export default function Gallery({ imagenes, titulo }) {
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState();

  const props = {  openModal,  setOpenModal };

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
    imagenes[0].foto6
  ]
  

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

        className="flex flex-col items-center bg-[#fff] z-10 w-12/12">
        <motion.h2
          initial={{
            scale: 0.9,
            opacity: 0,

          }}
          transition={{
            duration: 1.2,
            easeIn
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className={`${roboto.className} text-gray-600 text-4xl pt-10 mb-10`} >{titulo}</motion.h2>
        <div className="grid grid-cols-2 gap-1 center">

          {images.map(e => <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,

            }}
            transition={{
              duration: 0.8,
              easeInOut
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            key={e}
            className='rounded md:hover:scale-[1.02] drop-shadow-2xl hover:z-10 transition-all object-cover h-40 w-48'

            onClick={() => openClose(images.indexOf(e))}>
            <Image
              src={e}
              fill
              alt='foto'
              quality={10}
              style={{ objectFit: "cover", borderRadius: '2%' }}
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
              <GallerySlider images={images} index={index}/>
            </div>
          </Modal.Body>
          <Modal.Footer className='justify-center '>
            <Button className='bg-[#772c87] text-white' onClick={()=> props.setOpenModal(undefined)}>Cerrar</Button>
          </Modal.Footer>
            
          </Modal>
        </>

    </>
  );
}

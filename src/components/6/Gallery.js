import { AiOutlinePlayCircle } from "react-icons/ai";

import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { Button, Modal } from 'flowbite-react';
import GallerySlider from './GallerySlider';
import { comfortaa } from '../../utils/fonts';
import YouTubePlayer from '../YoutubePlayer';
import GalleryTitle from "./GalleryTitle";


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

    <GalleryTitle titulo={titulo}/>
      <div className='bg-gray-500 my-12'>
        {!showVideo ? <div >
          <div className='w-full bg-[url("https://res.cloudinary.com/fedexx/image/upload/v1694472872/muestra/A-31_k6qbox.jpg")] bg-cover opacity-70 flex flex-col items-center justify-center' onClick={() => setShowVideo(!showVideo)}>
          <AiOutlinePlayCircle className="text-gray-50 opacity-90 text-6xl my-[20%]" />
          </div>
        </div>
          : <YouTubePlayer videoId='hpbYfotJwfE' className='' />
        }
      </div>
      <motion.div
        className="flex flex-col items-center bg-[#fff] z-10 w-screen text center">




        <div className="md:flex md:flex-wrap grid grid-cols-2 gap-1 md:justify-center w-full pl-1 mb-10">

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
            className='rounded  drop-shadow-2xl hover:z-10 transition-all object-cover h-40 w-[98%] md:h-96 md:w-[45%]'

            onClick={() => openClose(images.indexOf(e))}>
            <Image
              src={e}
              fill
              alt='foto'
              quality={10}
              style={{ objectFit: "cover", borderRadius: '5px' }}
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

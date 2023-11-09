import { AiOutlinePlayCircle } from "react-icons/ai";

import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { Button, Modal } from 'flowbite-react';
import GallerySlider from './GallerySlider';
import {comfortaa, openSans} from '../../utils/fonts';
import YouTubePlayer from '../YoutubePlayer';
import GalleryTitle from "./GalleryTitle";


export default function Gallery({ imagenes, titulo, videoId }) {
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

  const images = [];
  const imagenesArr = imagenes[0];

  for (let i = 1; i <= 10; i++) {
    const foto = imagenesArr[`foto${i}`];
    if (foto) {
      images.push(foto);
    }
  }

  const portadaVideo = imagenes[0].foto7


  const customTheme = {
    content: {
      "base": "relative h-full w-full p-4 md:h-auto",
      "inner": "relative rounded-lg bg-transparent shadow flex flex-col "
    },
    header: {
      close: {
        base: " inline-flex items-center rounded-lg bg-transparent p-1.5 text-lg text-gray-900 ",
        icon: "h-8 w-8"
      }
    },
    "body": {
      "base": "p-6  h-[36rem]",
      "popup": "pt-0"
    },
  }




  return (
    <>

    <GalleryTitle titulo={titulo}/>
      {
        videoId &&
        <div className='bg-gray-500 my-12'>
        {!showVideo ? <div >
          <div className='w-full relative bg-cover opacity-70 flex flex-col items-center justify-center' onClick={() => setShowVideo(!showVideo)}>
            <Image 
              src={portadaVideo}
              fill
              style={{objectFit:'cover'}}
            />
          <AiOutlinePlayCircle className="text-gray-50 opacity-90 text-6xl my-[20%]" />
          </div>
        </div>
          : <YouTubePlayer videoId={videoId} className='' />
        }
      </div>
        }
      <motion.div
        className="flex flex-col items-center bg-[#fff] z-10 w-screen text center">




        <div className="grid grid-cols-2  gap-y-1 md:justify-center md:gap-1 md:max-w-3xl w-full pl-1 mb-10 relative">

        {images.map(e => <div
            key={e}
            className='rounded drop-shadow-2xl relative h-52 md:h-[350px]'
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
                objectFit:"cover", // Ensure consistent image display
                objectPosition:'top'
              }}
            />
          </div>
          )}
        </div>
      </motion.div>

      <>
        <Modal
          show={props.openModal === 'default'}
          onClose={() => props.setOpenModal(undefined)}
          className='pt-20 '
          theme={customTheme}
        >


          <Modal.Body className='p-0 bg-transparent '>
            
              <GallerySlider images={images} index={index} />

          </Modal.Body>

          
          <Modal.Footer className='justify-center border-transparent'>
            <button className={`${openSans.className} bg-black text-white flex justify-evenly items-center  text-[14px] font-[600] px-4 py-3 rounded-full `} onClick={() => props.setOpenModal(undefined)}>CERRAR X</button>
          </Modal.Footer>

        </Modal>

      </>

    </>
  );
}

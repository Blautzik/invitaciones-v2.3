import { great_vives, roboto } from '@/utils/fonts'
import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"


export default function Gallery({ imagenes, titulo }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openClose = (index) => {
    setModalOpen(!modalOpen)
    setIndex(index)
  }

  const handleScroll = () => {
    setModalOpen(false)
  }

  if (process.browser) {
    if (modalOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }



  const images = [
    imagenes[0].foto1,
    imagenes[0].foto2,
    imagenes[0].foto3,
    imagenes[0].foto4,
    imagenes[0].foto5,
    imagenes[0].foto6
  ]





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
            style={{
              backgroundImage: `url(${e})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            onClick={() => openClose(images.indexOf(e))}>

          </motion.div>
          )}
        </div>
      </motion.div>
      {modalOpen ? (
        <>
          <div className="fixed inset-0 z-10 ">
            <div
              className="fixed inset-0 w-full  bg-silver opacity-40"
              onClick={() => openClose(0)}
            ></div>

            <div className="flex items-center  px-4 py-8">
              <div className="flex relative w-full max-w-lg p-4 mx-auto  bg-white rounded-md shadow-lg">
                <img src={images[index]} onClick={() => openClose(0)} onScroll={handleScroll} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
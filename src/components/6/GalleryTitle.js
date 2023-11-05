import { comfortaa } from '@/utils/fonts'
import { motion } from 'framer-motion'
import React from 'react'

const GalleryTitle = ({titulo}) => {
    return (
        <div className='w-full flex flex-col items-center'> 
            <h2 className={`${comfortaa.className} text-5xl text-center mt-6 mb-2 font-[500]`}>Nuestra Historia</h2>
            <motion.div
                initial={{
                    scale: 0.9,
                    opacity: 0,

                }}
                transition={{
                    duration: 1.2,
                    
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                className={`${comfortaa.className} text-gray-500 leading-10 text-[1.5rem] w-10/12 text-center mt-6 mb-8 font-[400]`}>{titulo}
            </motion.div>
        </div>
    )
}

export default GalleryTitle
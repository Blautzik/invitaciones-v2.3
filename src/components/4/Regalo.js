import { inter, roboto } from '@/utils/fonts'
import React from 'react'
import { useState } from 'react'
import { IoClipboard, IoGift } from 'react-icons/io5'
import { easeInOut, easeIn, motion } from "framer-motion"
import RegaloIcon from './anims/RegaloIcon'

const Regalo = () => {

    const [modalCbuOpen, setModalCbuOpen] = useState(false)


    const openClose = () => {
        setModalCbuOpen(!modalCbuOpen)
    }

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="flex flex-col md:flex-row md:w-10/12 pb-24 w-full justify-between items-center md:items-stretch">

                    <div className="flex flex-col justify-center items-center w-full pt-12">
                        <motion.div
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
                        >

                            <RegaloIcon/>
                        </motion.div>
                        

                        <motion.div
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
                          className='flex flex-col justify-center items-center w-full pt-12' 
                        >

                        <h3 className={`${roboto.className} text-3xl text-center mt-1 mb-8 text-slate-600`}>Regalo</h3>
                        <p className={`${inter.className} text-base text-center lg:max-w-lg  text-slate-600`}>El regalo es opcional, me importa tu presencia, pero si deseas regalarme algo, prefiero una transferencia </p>

                        <button 
                            className={`${roboto.className} text-base text-center mt-5 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}
                            onClick={() => openClose()}
                            >Ver Datos</button>
                            </motion.div>
                    </div>

                </div>
            </div>

            {
                modalCbuOpen ? (
                    <>
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div
                                className="fixed inset-0 w-full h-full bg-black opacity-40"
                                onClick={() => openClose()}
                            ></div>

                            <div className="flex items-center px-4 py-8">
                                <div className="flex flex-col items-start relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                    <h3 className='text-center mb-3'>Datos Bancarios </h3>
                                    <hr />                                   
                                    <p>Cvu: 0000003100041054082398</p>
                                    <p>alias: mia.sola.giuliboni.</p>
                                    <div className="mt-3 w-full flex justify-evenly">
                                        <button className="mt-5 px-5  py-2 rounded-full" onClick={() => { navigator.clipboard.writeText('0000003100041054082398') }}>Copiar CBU</button>
                                        <button className="mt-5 px-5  py-2 rounded-full" onClick={() => openClose()}>Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}

        </>
    )
}

export default Regalo
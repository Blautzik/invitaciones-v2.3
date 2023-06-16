import { inter, roboto } from '@/utils/fonts'
import React from 'react'
import { useState } from 'react'
import { IoClipboard, IoGift } from 'react-icons/io5'

const Regalo = () => {

    const [modalCbuOpen, setModalCbuOpen] = useState(false)


    const openClose = () => {
        setModalCbuOpen(!modalCbuOpen)
    }

    return (
        <>
            <div className="w-full flex justify-center mt-20 mb-20">
                <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between items-center md:items-stretch">
                    <div className="flex flex-col justify-center items-center w-full">
                        <IoGift className="text-5xl text-gray-600" />
                        <h3 className={`${roboto.className} text-3xl text-center mt-1 mb-8 text-slate-600`}>Regalo</h3>
                        <p className={`${inter.className} text-base text-center lg:max-w-lg  text-slate-600`}>Lo que nos importa es que en este día tan especial contemos con tu presencia, pero si queres podes hacernos un regalo. </p>
                        <button 
                            className={`${roboto.className} text-base text-center mt-5 mb-3 w-80 lg:w-64 bg-slate-600 hover:bg-white hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}
                            onClick={() => openClose()}
                        >Ver Datos</button>
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

                            <div className="flex items-center min-h-screen px-4 py-8">
                                <div className="flex flex-col items-start relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                    <h3 className='text-center mb-3'>Datos Bancarios </h3>
                                    <hr />
                                    <p>Banco ICBC </p>
                                    <p>Caja de ahorro $ 0851/01121263/25</p>
                                    <p>CBU: 0150851001000121263259</p>
                                    <p>CUIL/CUIT: 27-31914402-7</p>
                                    <p>Alias: ALGA.GIRO.CUERDA</p>
                                    <div className="mt-3 w-full flex justify-evenly">
                                        <button className="mt-5 px-5  py-2 rounded-full bg-verde text-white" onClick={() => { navigator.clipboard.writeText('0150851001000121263259') }}>Copiar CBU</button>
                                        <button className="mt-5 px-5  py-2 rounded-full bg-verde text-white" onClick={() => openClose()}>Cerrar</button>
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
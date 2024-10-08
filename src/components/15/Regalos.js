import Image from 'next/image'
import React from 'react'
import { comfortaa, openSans } from '../../utils/fonts';
import Accordion from '../6/Accordion'
import { FaBullseye } from 'react-icons/fa6';

const Regalos = ({ article, foto_regalos, bg }) => {

    let opacity = 0.65
    let texto = "text-white"
    let iconStyle = {
        filter: 'invert(1)',
    }
    let cbuCustom = false
    let frase_abajo = false
    let showAlias = true
    let hide = false
    let cta2 = false
    let cbu2 = false
    let alias3 = false

    if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
        opacity = 1
    }

    if (bg == "bg-[#f8f5ee]") {
        texto = "text-gray-900"
        iconStyle = {
            filter: "invert(0.1"
        }
    }

    if (article.form_id == "1vmYcfn6F_vk4Ry9spJ4DWShJ_uC8i9b7PdSEB73LIOU") {
        bg = "bg-black"
        opacity = 1
        texto = "text-white"
    }


    const imageStyle = {
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
        opacity: opacity,
        backgroundColor: '#fff',
    }

    if (article.form_id == "1BVNjGdXGL4DgYyY0qOy0OfSzXWWCG9WusnvfNaSaRyA") {
        cbuCustom = "$leo.dam95"
        imageStyle.objectPosition = "55% 50%"
    }


    if (article.form_id == "1xEz5o-7DzhgQaxoMWHJ_np5PwKr3FO5Z7LIyTuYwyKg") {
        frase_abajo = "El salón cuenta con sector de regalos y cofre"
    }
    if (article.form_id == "1S2MaJiqQEDy42gv8_E6L9OTW5B5piCAAjgjjIuSyaPQ") {
        texto = "text-gray-600"
    }


    if (article.mail == "karina_1607@yahoo.com.ar") {
        iconStyle = {
            opacity: 0,

        }
        hide = true
    }

    if (article.alias == "no") {
        showAlias = false
    }


    if (article.form_id == "1ivEc4h8GKPPqzetPxNvi800X8i8gh4BEMau6D8RaqbM") {
        cta2 = "cuenta en dólares"
        cbu2 = "00703916-31004008808033"
        alias3 = "ALDEA.RING.VACA"
    }





    return (
        <div className='h-screen w-full'>
            <div className="h-full w-full flex flex-col relative items-center justify-between bg-gray-600">
                <Image
                    src={foto_regalos}
                    fill
                    quality={100}
                    style={imageStyle}
                    alt='portada'
                />
                <div className={`${article.mfmf === "regalo_sin_datos" ? 'pt-[72vh] ' : 'mt-6'} text-center mx-10 flex flex-col items-center ${texto} opacity-100 z-30 `}>
                    <Image
                        src={'https://res.cloudinary.com/fedexx/image/upload/v1694439372/gift_kchoah.png'}
                        height={65}
                        width={65}
                        style={iconStyle}
                    />
                    <h3 className={`${comfortaa.className} text-2xl mt-4 mb-2 font-[700]`}> {!hide && "Regalos"}</h3>
                    {
                        article.mail === "marine" ?

                            <div className={`${openSans.className} font-[500] text-slate-800 leading-5`}>
                                {article.frase_regalos}
                            </div> :
                            <div className={`${openSans.className} font-[500] leading-5`}>
                                {article.frase_regalos}
                            </div>

                    }
                </div>
                <div className={`${comfortaa.className} z-30 w-10/12 lg:w-1/2 mb-24 ${bg ? "opacity-100" : "opacity-70"} `}>
                    {article.alias && <Accordion open header="Datos Bancarios" bg={bg} texto={texto}>
                        <div className={`${openSans.className} text-sm  opacity-100`}>
                            {cta2 && <p className='pb-2'><strong>Cuenta en pesos </strong> </p>}
                            {article.titular && <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>}
                            {article.cbu && <p className='pb-2'><strong>CBU: </strong> {article.cbu} </p>}
                            {showAlias && <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>}
                            {article.dni && <p className='pb-2'><strong>DNI: </strong> {article.dni}</p>}
                            {cbuCustom && <> <br /> <p className='pb-2'><strong>LEMON TAG</strong> $leo.dam95 </p>   </>}
                            {
                                cta2 && <>
                                    {cta2 && <p className='pb-2'><strong>Cuenta en dólares </strong> </p>}
                                    {article.titular && <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>}
                                    {cbu2 && <p className='pb-2'><strong>CBU: </strong> {cbu2} </p>}
                                    {showAlias && <p className='pb-2'><strong>Alias: </strong> {alias3}</p>}
                                    {article.dni && <p className='pb-2'><strong>DNI: </strong> {article.dni}</p>}
                                </>
                            }
                        </div>
                        {frase_abajo &&
                            <p>{frase_abajo}</p>
                        }
                    </Accordion>
                    }
                </div>
            </div>
        </div>
    )
}

export default Regalos
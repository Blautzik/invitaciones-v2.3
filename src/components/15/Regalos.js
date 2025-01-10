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
    let texto2 = false
    let otra_altura = false
    let nombre_cta1 = false

    if (article.form_id == "1kIqtxht_QLBF2TVgY6pw1EsLFILvVrj6fiy4fM25nRA") {
        opacity = 1
    }

    if (article.url == "Mayra-y-Hernan-17-01"){
        opacity = 1
        otra_altura = "h-[600px] md:h-screen"
    }

    if (bg == "bg-[#f8f5ee]") {
        texto = "text-gray-900"
        iconStyle = {
            filter: "invert(0.1"
        }
    }


    if(article.url == "Sofi-13-12"){
        texto = "text-secondary-600"
        opacity =1
        iconStyle = {
            filter: "invert(0.7)"
        }
        otra_altura = "h-[600px] md:h-screen"
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
        texto = "text-gray-900"
        texto2 = "text-white"
        iconStyle = {
            filter: "invert(0.1"
        }
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
        nombre_cta1 = "Cuenta en Pesos"
    }

    if(article.form_id  == "1cNOZlSr_GZ8vRbmakuB30r8l7JIBFHrtGE3JM7PPMwk"){
        otra_altura = "h-[600px] md:h-screen"
    }

    if (article.form_id == "1S2MaJiqQEDy42gv8_E6L9OTW5B5piCAAjgjjIuSyaPQ"){
        otra_altura = "h-[600px] md:h-screen"
    }


    if (article.form_id == "1uG27558N8RX4coNRJrKF1qep_8l2xfJ1UeQvTZk26Rg") {
        imageStyle.objectPosition = "30% 50%"
    }


    if(article.url == "Carmela-01-12"){
        otra_altura = "h-[600px] md:h-screen"
    }

    if (article.url === "Sofia-07-12" ){
        imageStyle.objectPosition = "28% 50%"
    }


    if (article.url == "Dana-29-11"){
        imageStyle.objectPosition = "top"
        
    }

    if (article.url == "Carly-y-Fer"){
        cta2 = "Banco Galicia"
        cbu2 = "0070999030004078679978"
        alias3 = "MURO.TELAR.CAMISA"
        article.frase_regalos = "Tu presencia es nuestro mejor regalo, pero si aún así deseas hacernos un obsequio .Aquí esta nuestros números de cuenta :"
        nombre_cta1 = "Mercado Pago"
        article.dni = false
    }


    if (article.url == "Malvi-28-02"){
        bg= "bg-blue-600"
    }


    if(article.url =="Dai-y-Leo"){
        bg = "bg-[#5f8575]"
    }


    return (
        <div className={` ${otra_altura ? otra_altura : "h-screen"} w-full `}>
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
                <div className={`${comfortaa.className} z-30 w-10/12 lg:w-1/2 mb-24 ${bg ? "opacity-100" : "opacity-90"} `}>
                    {article.alias && <Accordion open header="Datos Bancarios" bg={bg} texto={texto2 ? texto2 : texto}>
                        <div className={`${openSans.className} text-sm  opacity-100 regalos`}>
                            {cta2 && <p className='pb-2'><strong>{nombre_cta1} </strong> </p>}
                            {article.titular && <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>}
                            {article.cbu && <p className='pb-2'><strong>CBU: </strong> {article.cbu} </p>}
                            {showAlias && <p className='pb-2'><strong>Alias: </strong> {article.alias}</p>}
                            {article.dni && <p className='pb-2'><strong>DNI: </strong> {article.dni}</p>}
                            {cbuCustom && <> <br /> <p className='pb-2'><strong>LEMON TAG</strong> $leo.dam95 </p>   </>}
                            {
                                cta2 && <>
                                    {cta2 && <p className='pb-2'><strong>{cta2} </strong> </p>}
                                    {article.titular && <p className='pb-2'><strong>Titular: </strong> {article.titular}</p>}
                                    {cbu2 && <p className='pb-2'><strong>CBU: </strong> {cbu2} </p>}
                                    {alias3 && <p className='pb-2'><strong>Alias: </strong> {alias3}</p>}
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
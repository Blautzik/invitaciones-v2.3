import {  GiPartyPopper } from "react-icons/gi";
import { inter, roboto } from '../../utils/fonts';
import Image from "next/image";
import ropa from '../../../public/ropa.png'


const Info = ({ dia, lugar, direccion }) => {
    return (
        <div className=" relative w-full bg-[#f6f2e3] md:flex md:flex-col md:justify-center -globals-36 ">
            <div className="flex-col items-center  w-full ">
                <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between md:items-center md:justify-center items-center lg:items-start m-auto">
                    <div className="flex flex-col justify-center items-center w-5/12">
                        <div className="flex flex-col justify-center items-center">
                            <div className='bg-white h-40 w-40 rounded-full flex justify-center items-center drop-shadow mb-8'>
                                <GiPartyPopper className=" text-8xl text-slate-400 mb-5" />
                            </div>
                            <div className="bg-slate-600 h-14 w-72 mt-3 flex items-center justify-between">
                                <div className="relative bg-[#f6f2e3] w-40 h-20 rotate-45 -left-5"></div>
                                <h3 className={`${roboto.className} text-2xl text-center w-80 my-3 text-slate-50`}>Fiesta</h3>
                                <div className="relative bg-[#f6f2e3] w-40 h-20 rotate-45 -right-5"></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h4 className={`${roboto.className} text-xl text-center w-80 mt-3 text-slate-600`}>Día</h4>
                            <p className={`${inter.className} text-base mb-2 text-center w-80 text-slate-600`}>Viernes 1 de septiembre - 21:30 a 05:30</p>

                            <a href="https://forms.gle/YjWev9czayxjnDXB9" target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 lg:hover:bg-white lg:hover:text-slate-600 rounded-full py-2 px-8 text-slate-50 shadow-md`}>Confirmar Asistencia</button>
                            </a>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Lugar</h4>
                            <p className={`${inter.className} text-base text-center w-80 mb-3 text-slate-600`}>Janos San Isidro</p>
                            <a href='https://www.janoseventos.com/salones.php?q=janos-San%20Isidro' target="_blank">
                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 rounded-full py-2 px-8 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>Conocé el salón</button>
                            </a>
                            <h4 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}>Dirección</h4>
                            <p className={`${inter.className} text-base text-center w-80 text-slate-600`}> Av. Bernabé Márquez 504</p>
                            <a href='https://www.google.com/maps/place/Janos+San+Isidro/@-34.478008,-58.519432,15z/data=!4m6!3m5!1s0x95bcb168e2679ab5:0xc1e8dbff0dd17415!8m2!3d-34.478008!4d-58.519432!16s%2Fg%2F11s4cqq26c?entry=ttu'>

                                <button className={`${roboto.className} text-base text-center mt-2 mb-3 w-80 lg:w-64 bg-slate-600 rounded-full py-2 px-8 text-slate-50 outline-none  shadow-lg transform active:scale-90 transition-transform`}>¿Cómo llegar?</button>
                            </a>

                            <div className="opacity-60 mt-5">
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className={`${roboto.className} text-xl text-center w-80 text-slate-600`}> Dress Code </h3>
                                <h4 className={`${inter.className} text-base text-center w-80 text-slate-600`}> Elegante </h4>
                                <div className="bg-white h-40 w-40 rounded-full flex justify-center items-center drop-shadow mb-8">
                                    <Image
                                        src={ropa}
                                        alt="dresscode"
                                        width={90}
                                        height={90}
                                        className="opacity-40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Info
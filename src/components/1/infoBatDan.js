
import { inter, minion, openSans, roboto } from '../../utils/fonts';
import { motion } from "framer-motion"
import Image from 'next/image';



const InfoBatDan = ({ article }) => {
    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 0%',
        zIndex: 0,
        borderRadius: '5px',
    }

    return (
        <div className=" relative w-full mt-4 -globals-36 overflow-x-hidden">
            <div className="flex-col items-center  w-full ">
                <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between md:items-center md:justify-center items-center lg:items-start m-auto">
                    <div className="flex flex-col justify-center items-center w-5/12">
                        <motion.div
                            initial={{
                                scale: 0.8,
                                opacity: 0,

                            }}
                            transition={{
                                duration: 0.6,

                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            className="flex flex-col justify-center items-center">

                            <h3 className={`${openSans.className} text-slate-700 sm:text-2xl xs:text-xl mb-4 font-[700] text-center`}>Ceremonia Bar Mitzva</h3>
                        </motion.div>

                        <div className="flex flex-col justify-center items-center">
                            <motion.div
                                initial={{
                                    scale: 0.8,
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
                                className="flex flex-col justify-center items-center"
                            >

    
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}> Jueves 10/10/2024 7:15-9:30 tefilin </p>
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}> Comunidad El Jai - Av. Mosconi 3845 </p>

                            </motion.div>

                                <p className={`${openSans.className} text-base text-center w-80 text-slate-600`}>Viernes 18/10/2024 kabalat Shabat 19:15-21:00 </p>
                                <p className={`${openSans.className} text-base text-center w-80 text-slate-600`}>Sábado 19/10/2024 Shajarit 9:30-11:45</p>
                                <p className={`${openSans.className} text-base mb-2 text-center w-80 text-slate-600`}> Comunidad El Jai - Av. Mosconi 3845</p>
                         


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default InfoBatDan
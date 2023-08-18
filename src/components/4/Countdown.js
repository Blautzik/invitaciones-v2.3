import moment from 'moment'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import circulo from '../../assets/contador.webp'
import { roboto } from '../../utils/fonts';
import { BsFillHeartFill } from 'react-icons/bs'

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css'



const Countdown = ({ date }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const target = moment(date)
    const now = moment()


    useEffect(() => {


        const interval = setInterval(() => {

            const difference = target - now
            console.log(difference)

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <div className='relative  flex items-center justify-center '>
            <div className='absolute object-contain '>
                <DotLottiePlayer
                    src='/circulo.lottie'
                    autoplay
                    loop
                >
                    
                </DotLottiePlayer>
                
            </div>
            <div className="flex flex-col justify-center items-center z-40">
                <div className='w-full  '>
                    <div className='max-w-screen w-full h-[25rem] flex justify-center'>

                        <div
                            className='w-full z-50 '
                        >
                            <div className='flex flex-col w-[14rem] h-[19rem] items-center justify-center  -z-20 m-auto mt-auto  '>
                                <h2 className={`${roboto.className} text-2xl lg:text-4xl text-slate-600 mt-20 z-50`}>Faltan</h2>
                                <div className="flex h-[4rem] w-[13.5rem] justify-between items-center">
                                    <div className="flex flex-col items-center  pl-4  border-r">
                                        <span className={`${roboto.className} text-slate-600 text-2xl rounded-full w-10 h-6 text-center flex items-center justify-center`}>{days}</span>
                                        <span className="md:text-lg text-base text-slate-600">Dias</span>
                                    </div>
                                    <div className="flex flex-col items-center  border-r ">
                                        <span className={`${roboto.className} text-slate-600 text-2xl rounded-full w-10 h-6 text-center flex items-center justify-center`}>{hours}</span>
                                        <span className="md:text-lg text-base text-slate-600">Hs</span>
                                    </div>
                                    <div className="flex flex-col items-center  border-r">
                                        <span className={`${roboto.className} text-slate-600 text-2xl rounded-full w-10 h-6 text-center flex items-center justify-center`}>{minutes}</span>
                                        <span className="md:text-lg text-base text-slate-600">Min</span>
                                    </div>
                                    <div className="flex flex-col items-center  pr-4">
                                        <span className={`${roboto.className} text-slate-600 text-2xl rounded-full w-10 h-6 text-center flex items-center justify-center`}>{seconds}</span>
                                        <span className="md:text-lg text-base text-slate-600">Seg</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Countdown
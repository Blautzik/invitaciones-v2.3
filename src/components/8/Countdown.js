import moment from 'moment'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import circulo from '../../assets/contador.webp'
import { openSans, roboto } from '../../utils/fonts';
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

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays( d < 10 ? "0" + d : d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h < 10 ? "0" + h : h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m < 10 ? "0" + m : m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s < 10 ? "0" + s : s);
        }, 1000);

        return () => clearInterval(interval);
    }, [target]);



    const cuentaStyle = `${openSans.className} text-slate-800 font-[600] text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`
    const textitoStyle = "text-slate-900 text-[14px] text-center"
    const dospu = "text-slate-900 font-[600]  text-3xl mb-5"

    return (
        <div className='flex items-center justify-center h-60 mt-10'>
            <div className='w-60 text-center'>
                <h3 className={`${openSans.className} font-thin text-2xl`}>Faltan</h3>
                <div className={`${openSans.className} flex font-[100] justify-between items-center opacity-80 mb-10 mt-2 `}>

                    <div className="flex flex-col items center">
                        <span className={cuentaStyle}>{days} </span>
                        <span className={textitoStyle}>días</span>
                    </div>
                    <span className={dospu}> : </span>
                    <div className="flex flex-col items-center ">
                        <span className={cuentaStyle}>{hours}</span>
                        <span className={textitoStyle}>horas</span>
                    </div>
                    <span className={dospu}> : </span>
                    <div className="flex flex-col items-center ">
                        <span className={cuentaStyle}>{minutes}</span>
                        <span className={textitoStyle}>minutos</span>
                    </div>
                    <span className={dospu}> : </span>
                    <div className="flex flex-col items-center ">
                        <span className={cuentaStyle}>{seconds}</span>
                        <span className={textitoStyle}>segundos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown
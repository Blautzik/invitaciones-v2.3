import React from 'react'
import { comfortaa, openSans, roboto } from '../../utils/fonts';
import moment from 'moment';
import {useEffect, useState} from 'react';

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


    const cuentaStyle = `${openSans.className} text-slate-50 font-[500] text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`
    const textitoStyle = "text-slate-50 text-[10px] text-center"
    const dospu = "text-slate-50 text-3xl mb-5"

    return (
        <div className='w-60'>

        <div className = {`${openSans.className} flex font-[100] justify-between items-center opacity-80 mb-10 mt-2 `}>
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
    )
}

export default Countdown
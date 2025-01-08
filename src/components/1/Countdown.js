import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { openSans, roboto } from '../../utils/fonts';




const Countdown = ({ date, texto }) => {
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



    const cuentaStyle = `${openSans.className} font-[500] text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center ${texto} `;
    const textitoStyle = `${texto} text-[12px] text-center`;
    const dospu = ` text-3xl mb-5 ${texto}`;

    return (
        <div className='flex items-center justify-center h-60 mt-10'>
            <div className='w-60 text-center'>
                {days >= 0 ? 
                <>
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
                </>
        : <>
            <h2 className={`${openSans.className}  font-thin text-2xl`}>Llegó el día!!</h2>
        </>}
        </div>
        </div>
    );
};

export default Countdown
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { openSans } from '../../utils/fonts';

const Countdown = ({ date }) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {

        const target = moment(date);


        const updateCountdown = () => {
            const now = moment();
            const difference = target.diff(now);

            if (difference <= 0) {
                setTimeRemaining({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                return;
            }

            const duration = moment.duration(difference);

            const d = Math.floor(duration.asDays());
            const h = duration.hours();
            const m = duration.minutes();
            const s = duration.seconds();

            setTimeRemaining({
                days: d < 10 ? "0" + d : String(d),
                hours: h < 10 ? "0" + h : String(h),
                minutes: m < 10 ? "0" + m : String(m),
                seconds: s < 10 ? "0" + s : String(s)
            });
        };

        updateCountdown(); // Update immediately on mount
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [date]);

    const { days, hours, minutes, seconds } = timeRemaining;
    const cuentaStyle = `${openSans.className} text-slate-50 font-[500] text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`;
    const textitoStyle = "text-slate-50 text-[10px] text-center";
    const dospu = "text-slate-50 text-3xl mb-5";

    return (
        <div className='w-60'>
            <div className={`${openSans.className} flex font-[100] justify-between items-center opacity-100 mb-10 mt-2`}>
                <div className="flex flex-col items-center">
                    <span className={cuentaStyle}>{days}</span>
                    <span className={textitoStyle}>días</span>
                </div>
                <span className={dospu}>:</span>
                <div className="flex flex-col items-center">
                    <span className={cuentaStyle}>{hours}</span>
                    <span className={textitoStyle}>horas</span>
                </div>
                <span className={dospu}>:</span>
                <div className="flex flex-col items-center">
                    <span className={cuentaStyle}>{minutes}</span>
                    <span className={textitoStyle}>minutos</span>
                </div>
                <span className={dospu}>:</span>
                <div className="flex flex-col items-center">
                    <span className={cuentaStyle}>{seconds}</span>
                    <span className={textitoStyle}>segundos</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;

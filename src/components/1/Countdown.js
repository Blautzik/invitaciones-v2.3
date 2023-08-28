import moment from 'moment'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import circulo from '../../assets/img_circuloContador01.svg'
import { roboto } from '../../utils/fonts';
import {BsFillHeartFill} from 'react-icons/bs'



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
        
            <div className='flex h-[24rem] w-[24rem] items-center justify-center'>
                <div style={{
                    backgroundImage: `url(${circulo.src})`,
                    height: '100%',
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    bacopacity:0.6
                }}
                    className='flex items-center justify-center z-50'
                >
                    <div className='flex flex-col w-[16rem] h-[16rem] lg:h-[21rem] lg:w-[21rem] bg-slate-50 rounded-full items-center -z-20 drop-shadow-2xl'>
                        <h2 className={`${roboto.className} text-2xl lg:text-4xl text-slate-600 mt-12 z-50`}>Faltan:</h2>
                    <div className="flex h-[10rem] w-[14rem] justify-between items-center ">
                        <div className="flex flex-col items-center md:w-1/12 pl-4 lg:pr-8 border-r">
                            <span className={`${roboto.className} text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{days}</span>
                            <span className="md:text-xl text-base text-slate-600">Dias</span>
                        </div>
                        <div className="flex flex-col items-center md:w-1/12 lg:pr-8 border-r ">
                            <span className={`${roboto.className } text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{hours}</span>
                            <span className="md:text-xl text-base text-slate-600">Hs</span>
                        </div>
                        <div className="flex flex-col items-center md:w-1/12 lg:pr-8 border-r">
                            <span className={`${roboto.className} text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{minutes}</span>
                            <span className="md:text-xl text-base text-slate-600">Min</span>
                        </div>
                        <div className="flex flex-col items-center md:w-1/12 pr-4">
                            <span className={`${roboto.className} text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{seconds}</span>
                            <span className="md:text-xl text-base text-slate-600">Seg</span>
                        </div>
                    </div>
                    <div>
                        <BsFillHeartFill className='text-4xl mb-4 text-slate-600 animate-pulse-grow-slow'/>
                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Countdown
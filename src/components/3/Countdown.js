import moment from 'moment'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import circulo from '../../assets/contador.webp'
import { roboto } from '../../utils/fonts';
import { BsFillHeartFill } from 'react-icons/bs'



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
        <>
            <div className="flex flex-col  justify-center bg-rose-200 z-40">
                <div className='flex h-[24rem] w-full absolute mt-36 md:mt-0  items-center md:items-start md:-asdasd-20 justify-center'>
                  <div className='w-full h-86  flex items-center mx-auto justify-center  p-0 m-0'>

                    <div style={{
                        backgroundImage: `url(${circulo.src})`,
                        backgroundSize: 'contain',
                        backgroundPositionX:'center',
                        height: '400px',
                        backgroundRepeat: 'no-repeat'
                    }}
                        className='w-full flex flex-row items-center justify-center z-50 md:flex-col'
                        
                    >
                        <div className='flex flex-col w-[16rem] h-[16rem] bg-slate-50 rounded-full items-center -z-20 '>
                            <h2 className={`${roboto.className} text-2xl lg:text-4xl text-slate-600 mt-16 z-50`}>Faltan:</h2>
                            <div className="flex h-[4rem] w-[14rem] justify-between items-center ">
                                <div className="flex flex-col items-center md:w-1/12 pl-4 lg:pr-8 border-r">
                                    <span className={`${roboto.className} text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{days}</span>
                                    <span className="md:text-xl text-base text-slate-600">Dias</span>
                                </div>
                                <div className="flex flex-col items-center md:w-1/12 lg:pr-8 border-r ">
                                    <span className={`${roboto.className} text-slate-600 text-3xl rounded-full w-10 h-10 text-center flex items-center justify-center`}>{hours}</span>
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

                        </div>
                    </div>
                    </div>
                </div>
              
            </div>

        </>
    );
};

export default Countdown
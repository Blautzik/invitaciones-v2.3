import React from 'react'
import { openSans } from '../../utils/fonts';
import { getGoogleDriveImageUrl } from '@/helpers';

const Seccion = ({ article }) => {

    const foto1 = getGoogleDriveImageUrl("https://drive.google.com/file/d/1eeQaHSxW9hkUP4VC48qyX7gcfODb8uuL/view?usp=sharing")
    const imgstyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        zIndex: 0,
        borderRadius: '5px',
    }
    const foto2 = getGoogleDriveImageUrl("https://drive.google.com/file/d/1T3te0IBpuAB_2_evs5IiepxRHd85iZVp/view?usp=sharing")


    return (
        <div className="relative w-full mt-4 overflow-x-hidden">
            <div className="flex flex-col items-center w-full">


                <div className="flex flex-col justify-between items-center m-auto w-full md:w-10/12 lg:w-8/12">
                    {/* Imagen 1 */}
                    <div className="w-full flex justify-center">

                        <img
                            src={foto1}
                            alt="Imagen 1"
                            className="w-full h-auto max-w-[90vw] mt-4 md:w-[45vw] md:h-96 rounded-sm object-cover"
                            style={imgstyle}
                        />
                    </div>



                    {/* Frase */}
                    <p className={`${openSans.className}  text-center w-[90vw] text-slate-600 mt-8 mb-8`}>
                        Como ya saben, somos amantes de los niños 😍 pero para esta noche decidimos que si pueden las bendis se queden en casa para que ustedes puedan disfrutar al 100 con nosotros. De no ser posible, obvio avísanos 
                    </p>

                    <div className='h-16 w-40 relative mb-6'>
                        <img
                            src="/heartseparator1.png"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Seccion;
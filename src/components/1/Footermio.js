import React from 'react'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'


const Footermio = () => {
    return (
        <div>
            <footer className="text-center text-purple-800 flex flex-col items-center">
                <div className="container px-6 pt-6 ">
                    <div className="mb-6 flex justify-center ">
                        <a href="#!"type="button">
                            <BsInstagram className='text-2xl mr-3'/>  
                        </a>
                        <a href="#!"type="button">
                            <BsFacebook className='text-2xl mr-3'/>  
                        </a>
                        <a href="#!"type="button">
                            <BsYoutube className='text-2xl ' />  
                        </a>

                        
                    </div>
                </div>


            </footer>
        </div>
    )
}

export default Footermio
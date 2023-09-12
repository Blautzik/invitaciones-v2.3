'use client'
import { comfortaa, openSans } from "@/utils/fonts";
import {useState} from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import {GoCheckCircle} from 'react-icons/go'

const Formulario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const id = '16HiAHj5IkJplCGhIHJVduGfH2-8UUhoppn25nfCah4U'

    const inputCN = "shadow-md focus:ring-indigo-500 focus:border-indigo-500 w-full h-14 px-5 block text-[14px] placeholder-gray-500 border-gray-300 rounded-xs"

    const handleSubmit = async (e) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message,
            id
        }

        const rawResponse = await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert(content.data.tableRange)

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')
    }

    return (
        <div className="bg-violeta w-screen min-h-screen bg-opacity-80">
            <div className="mx-auto py-10 ">
                <div className="mx-auto flex flex-col items-center text-center w-[270px]">
                    <GoCheckCircle className="text-[66px] font-thin text-white" />
                    <h3 className={`${comfortaa.className} text-white text-2xl pt-6`}>Confirmar Asistencia</h3>
                    <p className={`${openSans.className} text-white text-md max-w-2xl font-[500] pt-20`}>Por favor completá el fomulario con tus datos y comentarios para organizar la mejor fiesta</p>
                </div>

                <form className="py-4 space-y-4 mx-auto w-10/12" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className={inputCN} placeholder="Nombre y Apellido" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className={inputCN} placeholder="Email" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className={inputCN} placeholder="Si venís con Chicos escribi aquí sus nombres" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className={`${inputCN} pt-4 !h-40`}  placeholder="Comentarios y saludos" />
                    </div>
                    
                    <div className="flex items-end  justify-end mr-">
                        <button type="submit" className={`${openSans.className} bg-black text-white flex justify-evenly items-center w-36 text-[14px] font-[600] px-6 py-4 rounded-lg `}>CONFIRMAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario
import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {comfortaa, openSans} from '../../utils/fonts';

const testigos = [
    {
        nombre: "Gonza",
        foto: "https://res.cloudinary.com/fedexx/image/upload/v1724369932/testigos/WhatsApp_Image_2024-08-20_at_1.10.48_PM_zcj49d.jpg"
    },
    {
        nombre: "Isma",
        foto: "https://res.cloudinary.com/fedexx/image/upload/v1724369932/testigos/WhatsApp_Image_2024-08-20_at_1.10.35_PM_adczdo.jpg"
    },
    {
        nombre: "Ani",
        foto: "https://res.cloudinary.com/fedexx/image/upload/v1724369932/testigos/WhatsApp_Image_2024-08-20_at_1.10.17_PM_nidm7m.jpg"
    },
    {
        nombre: "Noe",
        foto: "https://res.cloudinary.com/fedexx/image/upload/v1724369932/testigos/WhatsApp_Image_2024-08-20_at_1.22.00_PM_sfodqe.jpg"
    },
]

export function SliderTestigos() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <h3 className={`${comfortaa.className} text-4xl mb-4 text-center` } >Testigos</h3>
            <p>Ellos son los testigos de nuestra historia de amor </p>
            <div className="hidden lg:flex justify-center items-center space-x-8">
                {testigos.map((testigo, index) => (
                    <TestigoCard key={index} testigo={testigo} />
                ))}
            </div>
            <Carousel className="lg:hidden"
                          opts={{
                            loop: true,
                          }}>
                <CarouselContent>
                    {[0, 2].map((startIndex) => (
                        <CarouselItem key={startIndex}>
                            <div className="flex justify-center  items-center space-x-4">
                                {testigos.slice(startIndex, startIndex + 2).map((testigo, index) => (
                                    <TestigoCard key={index} testigo={testigo} />
                                ))}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
            </Carousel>
        </div>
    )
}

function TestigoCard({ testigo }) {
    return (
        <div className="flex flex-col items-center space-y-2">
            <Avatar className=" border-purple-500 shadow-lg my-8">
                <AvatarImage src={testigo.foto} alt={`Foto de ${testigo.nombre}`} className="object-cover" />
                <AvatarFallback>{testigo.nombre.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h4 className={`${openSans.className} text-2xl mb-4 text-center` }>{testigo.nombre}</h4>
        </div>
    )
}
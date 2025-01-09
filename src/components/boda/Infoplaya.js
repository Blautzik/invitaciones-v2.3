import { Button } from "@/components/ui/button"
import { getGoogleDriveImageUrl } from "@/helpers"
import { PartyPopper } from "lucide-react"

export default function Infoplaya() {




    let foto = getGoogleDriveImageUrl("https://drive.google.com/open?id=11VUBwC3ex30ZXSVYeDgB4eg6mpbz6nRp")
    return (

        <>
            <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
                {/* Logo */}
                <div className="relative w-16 h-16 bg-[#617A68] rounded-full -top-10 flex items-center justify-center">
                    <PartyPopper className="text-white" size={24} />
                </div>
                <h1 className=" text-3xl text-[#617A68] mb-2">
                    Celebración
                </h1>

                {/* Main Text */}
                <p className="max-w-md text-gray-800 leading-relaxed -mb-10">
                    En este nuevo capítulo de nuestras vidas
                    te invitamos a escribir juntos una nueva página
                </p>
            </div>
            <div className="min-h-screen flex flex-col">
                {/* Top section with image and gradients */}
                <div className="relative flex-grow ">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 top-16 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${foto})`,
                            filter: 'brightness(0.9)'
                        }}
                    />

                    {/* Top Gradient Overlay */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white via-white to-transparent"
                    />

                    {/* Content Overlay */}

                    {/* Bottom Gradient Overlay */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white via-white to-transparent"
                    />
                </div>

                {/* Bottom section with information and button */}
                <div className="bg-white relative -top-14 px-6">
                    <div className="max-w-md mx-auto space-y-8 flex flex-col items-center">
                        {/* Details Section */}
                        <div className="space-y-2">
                            <div>
                                <h2 className="uppercase text-sm font-medium text-gray-600 text-center mb-1">LUGAR</h2>
                                <p className="text-gray-800 text-center">Condesa de los Naranjos</p>
                                <p className="text-gray-700 text-sm text-center" >Ruta 88 K, 3.300 Mar del Plata</p>
                            </div>

                            <div>
                                <h2 className="uppercase text-sm font-medium text-gray-600 text-center mb-1">HORA</h2>
                                <p className="text-gray-800 text-center">19:00 hs</p>
                                <p className="text-gray-700 text-sm italic">Comenzará con nuestra ceremonia civil</p>
                            </div>

                            <div>
                                <h2 className="uppercase text-sm font-medium text-gray-600 text-center mb-1">DRESS CODE</h2>
                                <p className="text-gray-800 text-center">Elegante</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a className="text-center" href="https://maps.app.goo.gl/WpE69NQQ5RPuGEF37" target="_blank">
                            <Button
                                className="bg-[#617A68] hover:bg-[#4E6254] text-white px-8 py-2 rounded"
                            >
                                LLEGAR A LA FIESTA
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

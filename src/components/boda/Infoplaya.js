import { Button } from "@/components/ui/button";
import { getGoogleDriveImageUrl } from "@/helpers";
import { PartyPopper } from "lucide-react";
import Image from "next/image";
import iconoDC from '../../../public/suit (1).png'


export default function Infoplaya() {
  let foto = getGoogleDriveImageUrl(
    "https://drive.google.com/open?id=11VUBwC3ex30ZXSVYeDgB4eg6mpbz6nRp"
  );
  return (
    <>
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="relative -top-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#617A68]">
          <PartyPopper className="text-white" size={24} />
        </div>
        <h1 className=" mb-2 text-3xl text-[#617A68]">Celebración</h1>

        {/* Main Text */}
        <p className="-mb-10 max-w-md leading-relaxed text-gray-800">
          En este nuevo capítulo de nuestras vidas te invitamos a escribir
          juntos una nueva página
        </p>
      </div>
      <div className="flex min-h-[1350px] flex-col">
        {/* Top section with image and gradients */}
        <div className="relative flex-grow ">
          {/* Background Image */}
          <div
            className="absolute inset-0 h-screen top-16 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${foto})`,
              filter: "brightness(0.9)",
            }}
          />

          {/* Top Gradient Overlay */}
          <div className="absolute left-0 right-0 top-0 h-1/4 bg-gradient-to-b from-white via-white to-transparent" />

          {/* Content Overlay */}

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white via-white to-transparent" />
        </div>

        {/* Bottom section with information and button */}
        <div className="relative -top-14 bg-white px-6">
          <div className="mx-auto flex max-w-md flex-col items-center space-y-8">
            {/* Details Section */}
            <div className="space-y-2">
              <div>
                <h2 className="mb-1 text-center text-sm font-medium uppercase text-gray-600">
                  LUGAR
                </h2>
                <p className="text-center text-gray-800">
                  Condesa de los Naranjos
                </p>
                <p className="text-center text-sm text-gray-700">
                  Ruta 88 K, 3.300 Mar del Plata
                </p>
              </div>

              <div>
                <h2 className="mb-1 text-center text-sm font-medium uppercase text-gray-600">
                  HORA
                </h2>
                <p className="text-center text-gray-800">19:00 hs</p>
                <p className="text-sm italic text-gray-700">
                  Comenzará con nuestra ceremonia civil
                </p>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="mb-1 text-center text-sm font-medium uppercase text-gray-600">
                  DRESS CODE
                </h2>
                <p className="text-center text-gray-800">Elegante</p>
                <div
                  className={`relative m-6 h-16 w-16 `}
                >
                  <Image src={iconoDC} fill />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              className="text-center"
              href="https://maps.app.goo.gl/WpE69NQQ5RPuGEF37"
              target="_blank"
            >
              <Button className="rounded bg-[#617A68] px-8 py-2 text-white hover:bg-[#4E6254]">
                LLEGAR A LA FIESTA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

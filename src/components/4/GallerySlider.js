'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import { Spinner } from 'flowbite-react';



export default function GallerySlider({ images, index }) {

    const reorderedImg = images.slice(index).concat(images.slice(0, index))

    const final = [...reorderedImg, 'https://res.cloudinary.com/fedexx/image/upload/v1692365675/15%20mia/0065_MIA_lqyifq.jpg',
        'https://res.cloudinary.com/fedexx/image/upload/v1692365697/15%20mia/0085_MIA_z3s3km.jpg',
        'https://res.cloudinary.com/fedexx/image/upload/v1692365686/15%20mia/0119_MIA_fpxjct.jpg',
        'https://res.cloudinary.com/fedexx/image/upload/v1692365698/15%20mia/Imagen_de_WhatsApp_2023-08-08_a_las_15.48.24_usofha.jpg'
    
    ]


        const imageLoader = ({ src, width, quality }) => {
            return 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
          }


    return (



        <Carousel leftControl
            rightControl
            slide={false}
        >
            {final &&
                final.map(e =>
                    <div key={e} className='h-96 w-full object-contain'>
                        <Image
                            placeholder="blur"
                            blurDataURL={e}
                            alt="..."
                            src={e}
                            fill
                            quality={25}
                            style={{ objectFit: "cover", borderRadius: '2%', objectPosition:'top'}}
                        />
                    </div>
                )
            }

        </Carousel>
    )
}



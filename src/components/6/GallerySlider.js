'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import { Spinner } from 'flowbite-react';



export default function GallerySlider({ images, index }) {

    const reorderedImg = images.slice(index).concat(images.slice(0, index))

    const final = [...reorderedImg]


    return (


        
        <Carousel 
            leftControl
            rightControl
            slide={false}
            className='h-[36rem]'
        >
            {final &&
                final.map(e =>
                    <div key={e} className='h-96 w-full '>
                        <Image
                            placeholder="blur"
                            blurDataURL={e}
                            alt="..."
                            src={e}
                            fill
                            quality={75}
                            style={{ objectFit: "contain", borderRadius: '2%', objectPosition:'center'}}
                        />
                    </div>
                )
            }

        </Carousel>
    )
}



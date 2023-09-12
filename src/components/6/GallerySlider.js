'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import { Spinner } from 'flowbite-react';



export default function GallerySlider({ images, index }) {

    const reorderedImg = images.slice(index).concat(images.slice(0, index))

    const final = [...reorderedImg]


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



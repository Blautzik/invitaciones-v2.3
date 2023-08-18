'use client';

import { Carousel } from 'flowbite-react';

export default function GallerySlider({ images, index }) {
 
    const reorderedImg = images.slice(index).concat(images.slice(0, index)).concat(images.slice(3))

    return (



        <Carousel leftControl
            rightControl
            slide={false}

            >
            {reorderedImg &&
                reorderedImg.map(e =>
                    <div key={e} className='h-full w-full'>
                        <img
                            alt="..."
                            src={e}
                            className='w-full h-full object-cover'
                        />
                    </div>
                )
            }

        </Carousel>
    )
}



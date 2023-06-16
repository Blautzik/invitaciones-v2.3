import React from 'react'
import Image from 'next/image';

const Separator = () => {
    return (
        <div>
            <div className="w-screen block">
                <Image src="/wave.png" alt="Image description" fill />
            </div>
        </div>
    )
}

export default Separator
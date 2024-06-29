'use client'

import Image from "next/image"

export default function photo({src, alt, width, height, className, photoName, isFavorited = false}) {
    return (
        <div
        style={{width, height}}
        className="relative rounded-md overflow-hidden w-auto h-auto shadow-2xl transition ease-in-out duration-150 hover:shadow-lg hover:scale-105 hover:cursor-pointer border-2 border-gray-200"
        >
            <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            style={{ objectPosition: 'center'}}
            />
        </div>
    )
}
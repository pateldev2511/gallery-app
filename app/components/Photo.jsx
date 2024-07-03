'use client'

import Image from "next/image"
import PhotoModal from "./PhotoModal"
import { useState } from "react"
import { Trash, Heart, HeartOff } from 'lucide-react';
import { deletePhoto } from "../actions/deletePhoto";
import { addOrRemoveFromFavorites } from "../actions/addOrRemoveFromFavorites";

export default function photo({src, alt, width, height, photoName, isFavorited}) {
    const [showModal, setShowModal] = useState(false)

    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <>
                <div
                style={{width, height}}
                className="relative rounded-md overflow-hidden w-auto h-auto shadow-2xl transition ease-in-out duration-150 hover:shadow-lg hover:scale-105 hover:cursor-pointer border-2 border-gray-200"
                >
                    {/* deleteing Photo Button */}
                <form 
                    action={deletePhoto}
                    className="absolute bottom-2 right-12 z-10"
                    >
                    <input type="hidden" name="photoPath" value={src} />
                        <button 
                            type="submit"
                            className="border-2 border-opacity-50 border-red-800 bg-black bg-opacity-70 text-white py-2 px-2 rounded-full transition-all ease-in-out duration-100 hover:bg-red-800 hover:shadow-lg hover:scale-105 hover:cursor-pointer min-w-fit flex items-center justify-center"
                        >
                            <Trash size={18} strokeWidth={2} />
                        </button>
                </form>

                {/* Adding photo to favorites Button */}
                <form 
                    action={addOrRemoveFromFavorites}
                    className="absolute bottom-2 right-1 z-10 "
                    >
                    <input type="hidden" name="photoName" value={photoName} />
                    <input type="hidden" name="isFavorited" value={isFavorited} />
                        <button 
                            type="submit"
                            className="border-2 border-opacity-50 border-fuchsia-600 bg-black bg-opacity-70 text-white py-2 px-2 rounded-full transition-all ease-in-out duration-100 hover:bg-fuchsia-600 hover:shadow-lg hover:scale-105 hover:cursor-pointer min-w-fit flex items-center justify-center"
                        >
                            {
                                isFavorited ? <Heart size={18} strokeWidth={2} /> : <HeartOff size={18} strokeWidth={2} />
                            }
                        </button>
                </form>

                    <Image
                    src={src}
                    alt={alt}
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    onClick={() => setShowModal(true)}
                    />
                </div>
                {
                    showModal && <PhotoModal src={src} alt={alt} width={width} height={height} onClose={toggleModal}/>
                }
            </>
    )
}
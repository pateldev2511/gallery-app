'use client'
import Image from "next/image";
import { X } from 'lucide-react';

export default function PhotoModal({src, alt, onClose}){
    if(!src) return null;

    return(
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 ">
      <div className="relative bg-gray-900 bg-opacity-50  p-4 rounded-lg shadow-lg max-w-5xl min-w-fit w-[90%] mx-auto border-2 border-gray-600">
        <button
          className="mb-2 text-gray-300 hover:text-blue-500 bg-transparent p-2"
          onClick={onClose}
        >
          <X size={24} strokeWidth={4} />
        </button>
        <div className="relative w-auto h-[50vh] bg-transparent ">
          <Image
            src={src}
            alt={alt}
            fill={true}
            objectFit='cover'
            objectPosition='center'
            style={{ borderRadius: '0.3rem', objectPosition: 'center', border: '0.5px solid gray'}}
          />
        </div>
      </div>
    </div>
    )
}
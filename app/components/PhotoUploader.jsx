'use client'

import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

export default function PhotoUploader() {

    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    async function handleFileUpload(event){
        
        try{
            setUploading(true);

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const randomNumber = Math.floor(Math.random() * 10000);
            const currentDate = new Date().toISOString().replace(/[-:.]/g, '');
            const fileName = `${currentDate}${randomNumber}.${fileExt}`;
            const {data: {user}} = await supabase.auth.getUser();
            if (!user) {
                throw new Error('🔴 Not authenticated! Please LogIn🔴');
            }

            const filePath = `user_uploads/${user.id}/${fileName}`;
            const {error} = await supabase.storage.from('photos')
            .upload(filePath, file)

            if (error){
                throw error;
            }

            await fetch('/api/revalidate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({path : '/photos'})
            })

            router.refresh();

        } catch (error){
            console.error("Something went wrong with uploading!!",error);
        } finally {
            setUploading(false);
        }
    }

  return (
    <label 
    className="cursor-pointer flex items-center justify-center w-auto h-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-normal py-2 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-purple-700 hover:text-gray-100 transition ease-in-out duration-150 mt-3"
    htmlFor="photo-upload">
        {uploading ? 'Uploading...' : 'Upload Photo'}
        <input
        type="file"
        id="photo-upload"
        onChange={handleFileUpload}
        disabled={uploading}
        className="hidden"
        />
        
    </label>
  );
}
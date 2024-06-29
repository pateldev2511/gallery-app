import { supabaseServer } from "../utils/supabaseServerClient";
import Photo from "./Photo";

async function fetchUserPhotos(user){
    if (!user) return;

    const folderPath = `user_uploads/${user.id}/`
    console.log({user})
    const {data,error} = await supabaseServer.storage
        .from('photos')
        .list(folderPath)

    if (error){
        console.error('Error fetching photos', error)
        return
    }
    return data;
}

async function getPhotoUrls(photos, user){
    return Promise.all(photos.map(async (photo) => {
        const {data, error} = await supabaseServer.storage
            .from('photos')
            .createSignedUrl(`user_uploads/${user.id}/${photo.name}`, 60 * 60)
        if (error){
            console.error('Error generating signed url', error)
            return null
        }
        return {url: data.signedUrl, photoName: photo.name}
    }))
}

export default async function PhotoGrid() {
    const {data: {user}} = await supabaseServer.auth.getUser()
    const photos = await fetchUserPhotos(user)
    console.log({photos})
    const photoObjects = await getPhotoUrls(photos, user);

    console.log({photoObjects})

    return (
        <div
        className="flex flex-wrap justify-center gap-4"
        >
            {
            photoObjects.map((photo) => (
                <Photo
                    key={photo.photoName}
                    src={photo.url}
                    alt={photo.name}
                    width={200}
                    height={200}
                    className="object-cover"
                    photoName={photo.photoName}
                />
            ))
            }

        </div>
    )

}
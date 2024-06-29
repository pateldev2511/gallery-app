import SignOutButton from "../components/SignOutButton";
import PhotoUploader from "../components/PhotoUploader";
import PhotoGrid from "../components/PhotoGrid";

export default function Photos () {
    return (
        <main
        className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 min-h-screen"
        >
            {/* <!-- Add a Navbar --> */}
            <div
            className="container mx-auto bg-white rounded-lg shadow-xl p-6 w-full max-w-lg"
            >
                <div
                className="flex flex-col items-center justify-center mb-6"
                >
                    <h1
                    className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-3xl font-bold"
                    >
                        Photos
                    </h1>
                    <PhotoUploader/>
                </div>
                <div>
                    <PhotoGrid />
                </div>
                <div
                className="absolute top-4 right-4"
                >
                    <SignOutButton />
                </div>
            </div>
        </main>
    )
}
import SignOutButton from "../components/SignOutButton";
import PhotoUploader from "../components/PhotoUploader";
import PhotoGrid from "../components/PhotoGrid";

export default function Photos () {
    return (
        <main
        className="flex items-center justify-center bg-grid-bg min-h-screen"
        >
            {/* <!-- Add a Navbar --> */}
            <div
            className="container mx-auto glass-effect rounded-lg shadow-xl p-6 w-full max-w-lg border-2 border-blue-500"
            >
                <div
                className="flex flex-col items-center justify-center mb-6"
                >
                    <h1
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-3xl font-bold"
                    >
                        Photos
                    </h1>
                    <span
                    className="text-gray-300 text-sm p-2"
                    >
                        Upload your photos here
                    </span>
                    <PhotoUploader/>
                </div>
                <div>
                    <PhotoGrid />
                </div>
                
            </div>
            <div
                className="absolute top-4 right-4"
                >
                    <SignOutButton />
                </div>
        </main>
    )
}
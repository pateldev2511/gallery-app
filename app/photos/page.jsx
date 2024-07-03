import SignOutButton from "../components/SignOutButton";
import PhotoUploader from "../components/PhotoUploader";
import PhotoGrid from "../components/PhotoGrid";

export default function Photos () {
    return (
        <main className="flex items-center justify-center min-h-screen min-w-fit bg-black relative overflow-hidden">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>

      {/* <!-- Add a Navbar --> */}
      <div className="container mx-auto glass-effect rounded-lg shadow-2xl p-6 w-full max-w-screen-3xl max-h-fit min-h-70 lg:max-w-6xl lg:min-h-fit">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent text-3xl lg:text-5xl font-bold p-3 mb-4">
            My Photo Gallery App
          </h1>
          <span className="text-gray-300 text-sm p-2">Upload your photos here</span>
          <PhotoUploader />
        </div>
        <div>
          <PhotoGrid />
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <SignOutButton />
      </div>
    </main>
    )
}
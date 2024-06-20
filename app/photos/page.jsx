import SignOutButton from "../components/SignOutButton";

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
                    className="text-black text-2xl font-bold mb-4 text-center"
                    >
                        Photos
                    </h1>
                    {/* <!-- Add a form to upload photos --> */}
                </div>
                <div>
                    {/* <!-- Display the photos --> */}
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
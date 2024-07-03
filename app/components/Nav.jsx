import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function Nav() {
    return(
        <nav className="fixed top-0 left-0 py-4 z-10 w-full flex items-center bg-black glass-effect shadow-md">
            <ul className="flex space-x-8 flex-grow justify-center items-center">
                <li>
                    <Link 
                    className="text-white text-lg font-semibold hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
                    href='/photos'>
                            Photos
                    </Link>
                </li>
                <li>
                    <Link 
                    className="text-white text-lg font-semibold hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
                    href='/favorites'>
                            Favorites
                    </Link>
                </li>
            </ul>
            <div className="ml-auto pr-4">
                <SignOutButton />
            </div>
        </nav>
    )
}
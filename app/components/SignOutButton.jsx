import { LogOut } from 'lucide-react';

export default function SignOutButton(){
    return (
        <form action="/auth/signout" method="post">
            <button 
            type="submit"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded transition-all ease-in-out duration-100 hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:scale-105 hover:cursor-pointer"
            >
                <span className='flex'>Sign Out <LogOut className='ml-2'/></span>
            </button>
        </form>
    )
}
import { LogOut } from 'lucide-react';

export default function SignOutButton(){
    return (
        <div className="absolute top-4 right-4 lg:top-4 lg:right-4">
      <form action="/auth/signout" method="post">
        <button 
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg hover:scale-105 hover:cursor-pointer text-white py-2 px-2 rounded transition-all ease-in-out duration-100  min-w-[120px]"
        >
          <span className='flex justify-center items-center'>Sign Out <LogOut size={20} className='ml-2'/></span>
        </button>
      </form>
    </div>
    )
}
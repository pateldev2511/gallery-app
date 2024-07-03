

export default function SignOutButton(){
    return (
      <form action="/auth/signout" method="post">
        <button 
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 hover:shadow-lg hover:cursor-pointer text-white py-2 px-4 rounded transition-all ease-in-out duration-100  min-w-auto"
        >
          <span className='flex justify-center items-center'>Sign Out </span>
        </button>
      </form>
    )
}
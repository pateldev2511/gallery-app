export default function SignOutButton(){
    return (
        <form action="/auth/signout" method="post">
            <button 
            type="submit"
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 rounded transition-all ease-in-out duration-300 hover:from-red-600 hover:to-orange-600"
            >
                Sign Out
            </button>
        </form>
    )
}
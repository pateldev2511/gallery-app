'use client'
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function AuthForm () {
    const [isNewUser, setIsNewUser] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [isSigningUp, setIsSigningUp] = useState(false)

    async function handleLogIn (event) {
        event.preventDefault()
        // handle login
    }

    async function handleSignUp (event) {
        event.preventDefault()
        // handle sign up
        const {data, err} = await supabase.auth.signUp({ 
            email,
            password })

            if(!err){
                setIsSigningUp(true)
            }
            console.log(data, err)

        }

        let signInMessage = 'Log In'

        if (isSigningIn){
            signInMessage = 'Logging In'
        }else if (isNewUser){
            signInMessage = 'Sign Up'
        }
    
    return (
        <form onSubmit={isNewUser ? handleSignUp : handleLogIn}>
            <div class="w-full relative flex flex-col gap-5">
            <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"/>
            <input 
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600 focus:outline-none"/>
            <button 
            type="submit" 
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
            >
                {signInMessage}
            </button>
        
            <p
            className="text-center"
            >
                {isNewUser ? (
                    <span
                    className='text-sm text-blue-500 mr-5'
                    >
                    Already have an account?{' '}
                    <button
                    type="button"
                    onClick={() => setIsNewUser(false)}
                    className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-50 hover:text-blue-600 text-blue-500 rounded-lg text-sm ">
                        Log In
                    </button>
                    </span>
                ) :
                (
                    <span
                    className='text-sm text-blue-500 mr-5'
                    >
                    Don't have an account?{' '}
                    <button
                    type="button"
                    onClick={() => setIsNewUser(true)}
                    className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm ">
                        Sign Up
                    </button>
                    </span>
                )
            
            }
            </p>
            {
                isSigningUp && (
                    <p className="text-center">
                        <span className="text-sm text-blue-500">Please wait...</span>
                    </p>
                )
            }
            </div>
        </form>
    )
}
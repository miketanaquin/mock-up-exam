import Logo from '@/components/Logo'
import { LogIn } from 'lucide-react'
import React from 'react'

const Top = () => {
    return (
        <section className='flex justify-center bg-black'>
            <div className="container flex flex-col justify-items-center items-center py-10">
                <h1 className='uppercase text-2xl text-[#bda626]'>Welcome to</h1>
                <Logo className="text-6xl" />
                <span className='text-xl my-7 text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </span>
            </div>
        </section>
    )
}

export default Top
import Logo from '@/components/Logo'
import React from 'react'

const Welcome = () => {
    return (
        <section className='flex justify-center bg-black'>
            <div className="container flex flex-col justify-items-center items-center py-10 px-3">
                <h1 className='uppercase md:text-xl xl:text-2xl text-[#bda626]'>Welcome to</h1>
                <Logo className=" md:text-3xl xl:text-6xl" />
                <span className='text-xs md:text-xl my-7 text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </span>
            </div>
        </section>
    )
}

export default Welcome
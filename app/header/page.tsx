"use client";
import Access from '@/components/AccessButton';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const Header = () => {



    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="relative w-screen h-auto overflow-hidden mt-14">
                <img src='/welcome.png' className='object-cover w-full h-full overflow-x-hidden' />
                <Access className='absolute bottom-5 lg:bottom-10 xl:bottom-20 left-1/2 transform -translate-x-1/2' />
            </div>
        </>
    )
}

export default Header
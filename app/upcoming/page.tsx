import Slider from '@/components/Slider'
import React from 'react'

const Upcoming = () => {
    const movies = [
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
        {
            title: "The Red Wedding",
            characters: `danaerys • jon snow • cersei`,
            url: "welcome.jpg"
        },
    ]
    return (
        <div className="w-screen h-auto px-10 bg-black">
            <div className="flex flex-row mb-10">
                <h1 className='text-sm md:text-2xl lg:text-4xl xl:text-5xl uppercase font-extrabold text-wrap md:w-3/5 lg:w-2/3'>
                    upcoming <span className='font-extralight'>videos</span>
                </h1>
                <div className='w-full bg-red-700 my-4 md:my-3 xl:my-5'></div>
            </div>
            <div className="w-full">
                <Slider items={movies} className="border-b-8 border-[#bda626]" />
            </div>
        </div>
    )
}

export default Upcoming
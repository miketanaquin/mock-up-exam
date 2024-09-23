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
        <div className="w-screen h-auto p-10 bg-black">
            <div className="flex flex-row mb-10">
                <h1 className='text-5xl uppercase font-extrabold text-wrap w-2/5'>
                    Upcoming <span className='font-extralight'>videos</span>
                </h1>
                <div className='w-3/5 bg-red-700 my-4'></div>
            </div>
            <div className="w-full">
                <Slider items={movies} className="border-b-8 border-[#bda626]" />
            </div>
        </div>
    )
}

export default Upcoming
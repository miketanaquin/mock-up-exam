import AccessButton from '@/components/AccessButton'
import Video from '@/components/Video'
import React from 'react'

const Top = () => {
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
        }
    ]
    return (
        <div className="w-screen h-auto p-10 bg-neutral-900">
            <div className="flex flex-row gap-1 mb-10">
                <h1 className='text-sm md:text-2xl lg:text-4xl xl:text-5xl uppercase font-extrabold text-wrap md:w-1/3'>
                    top <span className='font-extralight'>videos</span>
                </h1>
                <div className='w-full bg-[#bda626] my-4 md:my-3 xl:my-5'></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Video items={movies} className="border-b-8 border-red-700" />
            </div>
            <div className="flex flex-col items-center my-20">
                <AccessButton />
            </div>
        </div>
    )
}

export default Top
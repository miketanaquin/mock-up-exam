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
            <div className="flex flex-row mb-10">
                <h1 className='text-5xl uppercase font-extrabold text-wrap w-1/4'>
                    top <span className='font-extralight'>videos</span>
                </h1>
                <div className='w-3/4 bg-[#bda626] my-4'></div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <Video items={movies} className="border-b-8 border-red-700" />
            </div>
            <div className="flex flex-col items-center my-20">
                <AccessButton />
            </div>
        </div>
    )
}

export default Top
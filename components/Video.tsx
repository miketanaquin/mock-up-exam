import React from 'react'

interface VideoProps {
    items: {
        title: string;
        characters: any;
        url: string;
        className?: string; // Optional className for individual items
    }[];
    className?: string; // Optional prop for className for the whole component
}

const Video: React.FC<VideoProps> = ({ items, className }) => {
    return (
        <>
            {
                items.map((item, index) => (
                    <div className={`flex flex-col ${item.className || ''}`} key={index}>
                        <div className="relative w-full">
                            <img src={item.url} className={`object-cover ${className || ''} mb-3`} />
                            <svg className='absolute bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 opacity-50 size-10 lg:size-14' version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 128 128">
                                <g id="row1">
                                    <path id="_x31_" d="M0 127V1l128 63z" />
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <h1 className='text-md lg:text-3xl font-extrabold'>{item.title}</h1>
                                <span className='uppercase text-xs lg:text-xl text-[#bda626]'>{item.characters}</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="relative w-16 h-10 lg:w-20 lg:h-14 bg-gradient-to-b from-[#ebeab9] to-[#bda626] rounded-md flex justify-center items-center">
                                    <svg version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 128 128">
                                        <g id="row1">
                                            <path id="_x31_" d="M0 127V1l128 63z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Video;

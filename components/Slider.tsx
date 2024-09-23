'use client';

import React, { useState } from 'react';


interface VideoProps {
    items: {
        title: string;
        characters: any;
        url: string;
        className?: string;
    }[];
    className?: string;
}

const VideoSlider: React.FC<VideoProps> = ({ items, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 1;


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };


    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className="relative md:hidden w-full overflow-hidden">
                <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div className={`w-full flex-shrink-0 ${item.className || ''}`} key={index}>
                            <div className="relative w-full">
                                <img src={item.url} className={`object-cover ${className || ''} mb-3 w-full`} alt={item.title} />
                            </div>
                            <div className="flex flex-col justify-items-center">
                                <div className="flex flex-col items-center">
                                    <h1 className='text-md lg:text-3xl font-extrabold'>{item.title}</h1>
                                    <span className='uppercase text-xs lg:text-xl text-[#bda626]'>{item.characters}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            <div className="hidden md:block relative w-full px-5 overflow-hidden">
                <div
                    className="flex w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex / items.length) * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div className={`w-1/2 flex-shrink-0 px-5 ${item.className || ''}`} key={index}>

                            <div className="relative w-full">
                                <img src={item.url} className={`object-cover ${className || ''} mb-3 w-full`} alt={item.title} />
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className='text-md lg:text-3xl font-extrabold'>{item.title}</h1>
                                <span className='uppercase text-xs lg:text-xl text-[#bda626]'>{item.characters}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default VideoSlider;

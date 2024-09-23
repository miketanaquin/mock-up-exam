import React from 'react'

interface AccessBtnProps {
    className?: string; // Optional prop for className
}

const Access: React.FC<AccessBtnProps> = ({ className }) => {
    return (
        <div className={`${className} flex items-center md:pr-3 xl:px-7 xl:py-3 uppercase bg-gradient-to-b from-[#ebeab9] to-[#bda626] text-black font-extrabold rounded-md text-xs md:text-xl xl:text-4xl cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='size-6 md:size-12'>
                <path d="M12,22a7,7,0,0,0,5-11.894V7A5,5,0,0,0,7.67,4.5a1,1,0,1,0,1.73,1A3,3,0,0,1,15,7V8.683A7,7,0,1,0,12,22Zm0-10a1.994,1.994,0,0,1,1,3.723V18a1,1,0,0,1-2,0V15.723A1.994,1.994,0,0,1,12,12Z" />
            </svg>
            <h1 className='w-40 md:w-auto' >Get Instant Access</h1>
        </div>
    )
}

export default Access
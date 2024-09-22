import React from 'react'

const Latest = () => {
    return (
        <div className="w-screen h-auto p-10">
            <div className="flex flex-row mb-10">
                <h1 className='text-5xl uppercase font-extrabold text-wrap w-1/4'>
                    top <span className='font-extralight'>videos</span>
                </h1>
                <div className='w-3/4 bg-[#bda626] my-4'></div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col ">
                    <div className="relative w-full ">
                        <img src='welcome.jpg' className=' object-cover border-b-8 border-red-700 mb-3 ' />
                        <svg className='absolute bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 opacity-50' version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill='white' viewBox="0 0 128 128">
                            <g id="row1">
                                <path id="_x31_" d="M0 127V1l128 63z" />
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h1 className='text-3xl font-extrabold'>The Red Wedding</h1>
                            <span className='uppercase text-xl text-[#bda626]'>danaerys &#x2022; jon snow &#x2022; cersei</span>
                        </div>
                        <div className="relative w-20 h-14 bg-gradient-to-b from-[#ebeab9] to-[#bda626] rounded-md flex justify-center items-center">
                            <svg version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" width="55" height="40" viewBox="0 0 128 128">
                                <g id="row1">
                                    <path id="_x31_" d="M0 127V1l128 63z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="relative w-full ">
                        <img src='welcome.jpg' className=' object-cover border-b-8 border-red-700 mb-3 ' />
                        <svg className='absolute bottom-1/2 translate-y-1/2 left-1/2 transform -translate-x-1/2 opacity-50' version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill='white' viewBox="0 0 128 128">
                            <g id="row1">
                                <path id="_x31_" d="M0 127V1l128 63z" />
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h1 className='text-3xl font-extrabold'>The Red Wedding</h1>
                            <span className='uppercase text-xl text-[#bda626]'>danaerys &#x2022; jon snow &#x2022; cersei</span>
                        </div>
                        <div className="relative w-20 h-14 bg-gradient-to-b from-[#ebeab9] to-[#bda626] rounded-md flex justify-center items-center">
                            <svg version="1.1" id="Controls" xmlns="http://www.w3.org/2000/svg" width="55" height="40" viewBox="0 0 128 128">
                                <g id="row1">
                                    <path id="_x31_" d="M0 127V1l128 63z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latest
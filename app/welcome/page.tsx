import Access from '@/components/AccessButton'
import React from 'react'

const Welcome = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <img src='/welcome.png' className='object-cover w-full h-full overflow-x-hidden' />
            <Access className='absolute bottom-20 left-1/2 transform -translate-x-1/2' />
        </div>
    )
}

export default Welcome
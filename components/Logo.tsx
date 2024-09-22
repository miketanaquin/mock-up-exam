import React from 'react';

interface LogoProps {
    className?: string; // Optional prop for className
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <h1 className={` font-extrabold ${className}`}>
            <span className='text-red-700'>Kings</span>Landing
        </h1>
    );
}

export default Logo;

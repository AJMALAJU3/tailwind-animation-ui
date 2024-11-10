import React, { useState, useEffect } from 'react';

function Wings() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <div
                className={`absolute w-[20%] h-[80%] transition-all duration-500  left-[-10%] bg-gradient-to-t from-gray-300 to-gray-700 rounded-tr-[120%] rounded-tl-[30%] opacity-15 z-[0] 
                    ${isMounted ? 'animate-slideUp ' : ''}`}
            ></div>
            <div
                className={`absolute w-[20%] h-[80%] right-[-10%]  bg-gradient-to-t from-gray-300 to-gray-700 rounded-tl-[120%] rounded-tr-[30%] opacity-15 z-[0] 
                    ${isMounted ? 'animate-slideUp': ''}`}
            ></div>
        </>
    );
}

export default Wings;

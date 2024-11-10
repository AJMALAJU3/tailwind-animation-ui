import React, { useState, useEffect } from 'react';
import { FaHome, FaBox, FaPaintBrush, FaUser } from 'react-icons/fa';

function MenuBar() {
  const list = [
    { name: "Home", icon: <FaHome size={24} /> },
    { name: "Gallery", icon: <FaBox size={24} /> },
    { name: "Service", icon: <FaPaintBrush size={24} /> },
    { name: "About", icon: <FaUser size={24} /> },
  ];
  const [indexSelect, setIndexSelect] = useState(0);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setTimeout(()=>{
      setIsMounted(true);
    },2000)
  }, []);

  return (
    <div
      className={`z-50 fixed w-full max-w-4xl bg-neutral-900 lg:rounded-xl flex justify-between items-center mx-auto lg:bottom-2 bottom-0 left-0 right-0 transition-all duration-500 ${
        isMounted ? 'animate-slideUp' : 'opacity-0'
      }`}
    >
      <div className="relative flex-1 flex justify-between items-center z-10">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center text-white relative cursor-pointer"
            onClick={() => setIndexSelect(index)}
          >
            <div
              className={`flex flex-col items-center py-5 transition-all duration-500 ${
                indexSelect === index ? '' : 'text-white'
              }`}
            >
              <span
                className={`relative ${
                  indexSelect === index ? 'bottom-[1.8rem]' : 'bottom-0'
                } transition-all duration-500`}
              >
                {item.icon}
              </span>
              <span
                className={`absolute transition-all duration-500 ${
                  indexSelect === index ? 'opacity-100 bottom-2' : 'opacity-0 bottom-0'
                }`}
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute bottom-0 transform transition-all duration-300 ease-linear z-0 flex justify-center`}
        style={{
          left: `${indexSelect * 25}%`,
          width: '25%',
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-tr from-black to-pink-500 border-4 border-gray-300 rounded-full absolute bottom-8">
          <div className="left-[-1.101rem] bg-gray-300 pt-[1px] top-[1.7rem] absolute">
            <div className="w-full h-full bg-neutral-900 rounded-tr-full p-2"></div>
          </div>
          <div className="right-[-1.101rem] bg-gray-300 pt-[1px] top-[1.7rem] absolute">
            <div className="w-full h-full bg-neutral-900 rounded-tl-full p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;

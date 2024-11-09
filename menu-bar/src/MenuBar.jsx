import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBox, FaServicestack } from 'react-icons/fa';

function MenuBar() {
  const list = [
    { name: "Home", icon: <FaHome size={24}/> },
    { name: "About", icon: <FaInfoCircle size={24}/> },
    { name: "Product", icon: <FaBox size={24}/> },
    { name: "Service", icon: <FaServicestack size={24}/> },
  ];

  const [indexSelect, setIndexSelect] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col justify-end items-center bg-gray-500 md:p-1">
      <div className="fixed w-full max-w-4xl bg-neutral-900 md:rounded-xl  flex justify-between items-center mx-3">
        

        <div className="relative flex-1 flex justify-between items-center z-10">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex items-center justify-center text-white relative cursor-pointer"
              onClick={() => setIndexSelect(index)}
            >
              <div
                className={`flex flex-col items-center py-5 transition-all duration-300 ${
                  indexSelect === index ? '' : 'text-white'
                }`}
              >

                <span
                  className={`relative ${indexSelect === index ? 'bottom-[1.8rem]' : 'bottom-0'} transition-all duration-500`}
                >
                  {item.icon}
                </span>

                <span
                  className={`absolute  transition-all duration-500 ${
                    indexSelect === index ? 'opacity-100 bottom-2' : 'opacity-0 bottom-0 '
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
            left: `${(indexSelect ) * 25}%`,  
            width: '25%', 
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-tr from-black to-lime-500 border-4 border-gray-500 rounded-full absolute bottom-8">
          <div className='  left-[-1.101rem] bg-gray-500 pt-[1px]  top-[1.7rem] absolute'>
                <div className='w-full h-full bg-neutral-900 rounded-tr-full p-2'>
                </div>
            </div>
            <div className='  right-[-1.101rem] bg-gray-500 pt-[1px]  top-[1.7rem] absolute'>
                <div className='w-full h-full bg-neutral-900 rounded-tl-full p-2'>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;

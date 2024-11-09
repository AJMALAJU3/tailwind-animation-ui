import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBox, FaServicestack } from 'react-icons/fa';

function MenuBar() {
    const list = [
        { name: "Home", icon: <FaHome size={24}/> },
        { name: "About", icon: <FaInfoCircle size={20}/> },
        { name: "Product", icon: <FaBox size={20}/> },
        { name: "Service", icon: <FaServicestack size={24}/> },
      ];
  const [indexSelect, setIndexSelect] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center  bg-gray-500">
      <div className="flex text-white bg-black rounded-xl relative">
        {
          list.map((item, index) => (
            <div className='flex items-center flex-col '>
            <div
              key={index}
              className={`w-32 text-center py-5 relative items-center flex flex-col justify-center z-10 cursor-pointer`}
              onClick={() => setIndexSelect(index)}
            >
                <span className={`${indexSelect === index ? 'bottom-[1.8rem] ':'bottom-[0] '} duration-500 relative `}>{item.icon}</span>
              
              
            </div>
            <span className={`${indexSelect === index ? 'bottom-[6px] opacity-100':'bottom-[0px] opacity-0'} duration-500 absolute`}>{item.name}</span>
            </ div>
          ))
        }
        <div
          className={`absolute z-0 top-[-2rem] rounded-full border-4 border-gray-500 ${
            indexSelect === 1 ? "left-[10rem]"
            : indexSelect === 2 ? " left-[18rem]"
            : indexSelect === 3 ? "left-[26rem]"
            : "left-[2rem]"
          } text-center w-16 h-16 bg-gradient-to-tr from-black to-lime-500 duration-300 ease-linear text-transparent`}
        >
            <div className='  left-[-1.101rem] bg-gray-500 pt-[1px]  top-[1.7rem] absolute'>
                <div className='w-full h-full bg-black rounded-tr-full p-2'>
                </div>
            </div>
            <div className='  right-[-1.101rem] bg-gray-500 pt-[1px]  top-[1.7rem] absolute'>
                <div className='w-full h-full bg-black rounded-tl-full p-2'>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;

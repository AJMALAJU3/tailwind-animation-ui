import React from 'react'
import { FaStar,FaArtstation ,FaPaintBrush,FaPen,FaCircle} from 'react-icons/fa'

function AnimeButton() {
  return (
    <div className='flex justify-center  items-center md:m-4 w-full'>
      <div className='flex justify-around max-w-sm md:w-96 w-72'>

        {/* <div className='px-10 py-2 bg-red-400 rounded-full border-2 hover:border-t-4 shadow-custom-bottom-right hover:border-l-2 hover:border-r-0 hover:border-b-0 border-[#191919]  hover:shadow-black duration-500 transition-all'>about</div> */}
        <div className='px-10 py-2 bg-gradient-to-r from-black text-gray-300 to-pink-500 rounded-full cursor-pointer
        hover:border-t-4 shadow-custom-top-left  border-[#191919]  hover:shadow-black duration-500 transition-all relative group'>
            explore
        <FaPen className='absolute text-black bottom-8 group-hover:opacity-100
         opacity-0 duration-500 transition-all ease-in-out group-hover:bottom-16 group-hover:right-0 right-16'/>
         <FaPaintBrush className='absolute text-black bottom-4 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-8 group-hover:right-32 right-16' size={40}/>
          <FaArtstation className='absolute text-black bottom-8 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-16  right-16' /> 
         <FaStar className='absolute text-black bottom-8 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-14  right-24' /> 
          <FaStar className='absolute text-black bottom-8 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-20 right-10  group-hover:right-30' size={10}/> 
         <FaStar className='absolute text-black bottom-8 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-12  right-24 group-hover:right-7' /> 
         <div className='p-[1px] h-3 absolute bg-black right-4 top-8 opacity-0 group-hover:opacity-100 group-hover:h-9 transition-all duration-700 z-[0]'></div>
         <FaStar className='absolute text-black top-7 right-2 group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-12   group-hover:right-2 group-hover:top-16' size={20} /> 
            <FaCircle className='absolute text-black top-7 right-[14px] group-hover:opacity-100
         opacity-0 duration-700 transition-all ease-in-out group-hover:bottom-12 ' size={6} /> 

            </div>


        
        </div>
    </div>
  )
}

export default AnimeButton

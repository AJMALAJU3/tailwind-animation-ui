import React,{useState,useEffect} from 'react';
import cone from '../assets/cone.png';
import torus from '../assets/torus.png';
import sphere from '../assets/sphere.png';
import hedron from '../assets/hedron.png';


function Shapes() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setIsMounted(false)
            setIsMounted(true);
        })
    }, []);
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0">
      <img
        src={cone}
        alt="cone"
        className={`shape cone lg:w-52 w-28 delay-0  md:blur-sm ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in`}
      />
      <img
        src={torus}
        alt="torus"
        className={`shape torus lg:w-44 md:w-28 w-10 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in delay-0  md:blur-sm`}
      />
      <img
        src={sphere}
        alt="sphere"
        className={`shape sphere lg:w-44 md:w-28 w-10 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in md:blur-sm delay-0`}
      />
      <img
        src={hedron}
        alt="hedron"
        className={`shape hedron lg:w-44 md:w-28 w-10 ${isMounted?'opacity-60':'opacity-0'} duration-300 transition-opacity ease-in md:blur-sm delay-0`}
      />
    </div>
  );
}

export default Shapes;

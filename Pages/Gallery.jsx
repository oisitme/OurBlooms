import React from 'react'
import { assets } from "../src/assets/assets"
import { NavLink, useNavigate } from "react-router-dom";



const Gallery=()=>{
    const navigate = useNavigate();
    const buttonClass="mt-8  block mx-auto px-6 py-2 bg-amber-500 text-white font-semibold rounded-[20px] hover:bg-amber-600 transition-scale-150";

    return(
        <>
   <h1 className='text-4xl font-bold mt-24 p-8'>GALLERY</h1>
<div className='mt-10 flex flex-col justify-center items-center gap-6 p-4 flex-wrap md:flex md:flex-row'>
    <div className='hover:scale-105 transition-all duration-300'  >
     <p className='text-[20px] font-semibold text-center mb-2'>DAWN BLOOM <span className='text-gray-600 text-[15px]'> ₹100/Bunch </span> </p>
     <img src={assets.f6} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300' >
     <p className='text-[20px] font-semibold text-center mb-2'>SOLSTICE STEMS <span className='text-gray-600 text-[15px]'> ₹150/Bunch </span> </p>
     <img src={assets.f5} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300' >
     <p className='text-[20px] font-semibold text-center mb-2'>WHISPER GREENS <span className='text-gray-600 text-[15px]'> ₹60/Bunch </span> </p>
     <img src={assets.f4} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300' >
     <p className='text-[20px] font-semibold text-center mb-2'>SKYLINE BLOOM <span className='text-gray-600 text-[15px]'> ₹75/Bunch </span> </p>
     <img src={assets.f2} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300' >
     <p className='text-[20px] font-semibold text-center mb-2'>RIVER STONE <span className='text-gray-600 text-[15px]'> ₹50/Bunch </span> </p>
     <img src={assets.ob8} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300' >
     <p className='text-[20px] font-semibold text-center mb-2'>CLARITY PETALS <span className='text-gray-600 text-[15px]'> ₹120/Bunch </span> </p>
     <img src={assets.f7} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300 ' >
     <p className='text-[20px] font-semibold text-center mb-2'>STILL WATERS<span className='text-gray-600 text-[15px]'> ₹30/Bunch </span> </p>
     <img src={assets.ob1} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
    <div className='hover:scale-105 transition-all duration-300 ' >
     <p className='text-[20px] font-semibold text-center mb-2'>EMBER LEAF<span className='text-gray-600 text-[15px]'> ₹40/Bunch </span> </p>
     <img src={assets.f1} alt='flower' className='w-72 h-72 rounded-4xl'></img>
    </div>
</div>
<div className=' mt-16  '>
    <div className='flex flex-col gap-5 justify-center items-center md:flex-row '>
        <p>Services</p>
        <div className='w-1/2 h-px bg-black mt-6 md:w-[1100px] md:mt-0'></div>
    </div>
    <div className='flex flex-col justify-between items-center md:flex-row'>
    <div className='flex flex-col md:w-[500px]'>
        <p className='text-3xl font-bold text-center mt-4 md:text-left md:mt-[-70px] md:ml-44 md:text-5xl'>FLORAL INSTALLATION</p>
        <p className='mt-4 text-center md:text-left md:ml-40 p-8 md:p-4'>We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
    </div>
    <img src={assets.f3} alt='flower' className='w-72 h-72  md:mr-10 rounded-[50px]  md:w-[500px] md:h-[400px] md:mt-4'></img>
    </div>
    <div className='w-1/2 h-px bg-black mt-6 mx-auto md:w-[1100px] md:mt-11'></div>
    <div className='flex flex-col justify-between items-center md:flex-row'>
    <div className='flex flex-col md:w-[560px]'>
        <p className='text-3xl font-bold text-center p-8 mt-4 md:text-left md:p-0 md:mt-[-70px] md:ml-44 md:text-5xl'>NATIVE PLANT ARRANGEMENTS</p>
        <p className='mt-4 text-center md:text-left md:ml-40 p-4'>Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
    </div>
    <img src={assets.ob1} alt='flower' className='w-72 h-72 md:mr-10 rounded-[50px]  md:w-[500px] md:h-[400px] md:mt-4'></img>
</div>
<div className='w-1/2 h-px bg-black mt-6 mx-auto md:w-[1100px] md:mt-11'></div>
<div className='flex flex-col justify-between items-center md:flex-row'>
    <div className='flex flex-col md:w-[570px]'>
        <p className='text-3xl font-bold text-center mt-4 md:text-left md:mt-[-70px] md:ml-44 md:text-5xl'>CUSTOM FLORAL CONCEPTS</p>
        <p className='mt-4 text-center md:text-left md:ml-40 p-4'>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
    </div>
    <img src={assets.ob6} alt='flower' className='w-72 h-72 shadow-lg md:mr-10 rounded-[50px]  md:w-[500px] md:h-[400px] md:mt-4'></img>
</div>
<h1 className=" text-gray-600 mt-20 font-semibold text-center"> WORK WITH US</h1>
              <div className="mt-8 text-2xl p-8 font-bold text-center md:text-4xl md:p-2">
              <p>Discover how we can add a touch of </p>
              <p>natural beauty to your next event.</p>
              </div>
              <button
          onClick={() => navigate("/about")}
          className={buttonClass}
        >
          ABOUT US
        </button>
      
</div>
</>


    );
};

export default Gallery;
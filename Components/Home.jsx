import React from "react";
import { assets } from "../src/assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const buttonClass="mt-8 px-6 py-2 bg-amber-500 text-white font-semibold rounded-[20px] hover:bg-amber-600 transition-scale-150";
  return (
    <div>
      <div className="flex flex-col justify-center items-center  mt-28 md:mt-35 ">
        <img
          src={assets.blooms}
          alt="Our Blooms text"
          className="w-60 h-auto md:scale-260 md:w-100"
        ></img>
        <img
          src={assets.ob2}
          alt="flower image"
          className="mt-16 p-4  w-[280px] h-auto rounded-3xl md:w-[900px] md:h-[500px] md:mt-20"
        ></img>
        <p className="mt-4 text-silver-500 font-semibold ">WHO WE ARE</p>
        <p className="mt-4 font-bold text-4xl text-center">
          We're Our Blooms® and we're here to help{" "}
        </p>
        <p className="mt-1 font-bold text-4xl text-center">
          you find your floral story.
        </p>
        <button
          onClick={() => navigate("/about")}
          className={buttonClass}
        >
          ABOUT US
        </button>
      </div>
      <div className="overflow-x-auto whitespace-nowrap mt-10">
        <img
          src={assets.ob4}
          alt="flower1"
          className="inline-block w-64 h-64 mx-5 rounded-4xl shadow-lg hover:scale-105 transition-all duration-300"
        ></img>
        <img
          src={assets.ob6}
          alt="flower1"
          className="inline-block w-64 h-64 mx-5 rounded-4xl shadow-lg hover:scale-105 transition-all duration-300"
        ></img>
        <img
          src={assets.ob7}
          alt="flower1"
          className="inline-block w-64 h-64 mx-5 rounded-4xl shadow-lg hover:scale-105 transition-all duration-300"
        ></img>
        <img
          src={assets.ob8}
          alt="flower1"
          className="inline-block w-64 h-64 mx-5 rounded-4xl shadow-lg hover:scale-105 transition-all duration-300"
        ></img>
        <img
          src={assets.ob1}
          alt="flower1"
          className="inline-block w-64 h-64 mx-5 rounded-4xl shadow-lg hover:scale-105 transition-all duration-300"
        ></img>
      </div>
      <button onClick={()=>navigate('/consultation')} className="mt-10 block mx-auto bg-amber-600 px-4 py-2 rounded-3xl text-white font-semibold hover:bg-amber-400 cursor-pointer hover:scale-110 transition-all duration-200">Book A Consultation</button>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-5xl font-bold text-center"> WHAT WE DO</h1>
        <p className="mt-10 text-center p-5">We bring a touch of that simple magic into your world.</p>
        <div className="w-1/2 h-[2px] bg-black mt-4 md:w-[1100px]"></div>
        <p className="mt-10 text-5xl text-center">1</p>
        <img src={assets.ob3} alt="flower1" className="w-[200px] h-[150px] mt-10 rounded-2xl "></img>
        <p className="mt-14 text-2xl p-2 font-bold text-center md:text-5xl">FLORAL INSTALLATIONS</p>
        <p className="mt-4 text-center p-2">Living art for homes, businesses, and events.</p>
        <div className="w-1/2 h-[2px] bg-black mt-4 md:w-[1100px]"></div>
        <p className="mt-10 text-5xl text-center">2</p>
        <img src={assets.obb1} alt="flower1" className="w-[200px] h-[150px] mt-10 rounded-2xl "></img>
        <p className="mt-14 text-2xl p-2 font-bold text-center md:text-5xl">NATIVE PLANT ARRANGEMENTS</p>
        <p className="mt-4 text-center p-4">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
        <div className="w-1/2 h-[2px] bg-black mt-4 md:w-[1100px]"></div>
        <p className="mt-10 text-5xl text-center">3</p>
        <img src={assets.obb2} alt="flower1" className="w-[200px] h-[150px] mt-10 rounded-2xl "></img>
        <p className="mt-14 text-2xl p-2 font-bold text-center md:text-5xl">  CUSTOM FLORAL CONCEPTS   </p> 
      <p className="mt-8 text-center px-10 md:w-[600px]">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
      <div className="w-1/2 h-[2px] bg-black mt-24 md:w-[1100px]"></div>
      <img src={assets.obb3} alt="flower1" className="w-[300px] h-[300px] px-5 mt-10 rounded-[2rem] object-cover md:w-5xl md:h-auto"></img>
              <h1 className=" text-gray-600 mt-20 text-center"> WORK WITH US</h1>
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

    </div>
  );
};
export default Home;

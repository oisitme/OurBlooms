import React from "react";
import { assets } from "../src/assets/assets"


const About = () => {
    return (
      <>
      <h1 className="text-4xl font-bold p-4 mt-20 md:ml-[170px]">About</h1>
        <div className="flex flex-col justify-center items-center mt-8 px-4  md:gap-8 md:flex-row">
          <img src={assets.me} alt="me" className="w-44 h-64 rounded-4xl md:w-1/2 md:h-auto md:ml-[-100px] "></img>
          <div className="flex flex-col md:mt-[-1060px] ">
          <p className="font-bold ml-[-32px] md:ml-0">RAUSHAN KUMAR</p>
          <p className="text-gray-600 ml-[-32px] mt-[-10px] md:ml-0 md:mt-0">owner</p>
          </div>
        </div>
        <div class="max-w-3xl mx-auto text-center px-4 py-10">
  <h1 class="text-4xl font-bold mb-4">About Bloom</h1>
  <p class="text-gray-600 text-lg leading-relaxed p-5">
    At Bloom, we believe flowers aren’t just plants — they’re emotions. Our mission is to bring a little more color and joy into people’s lives through beautifully curated floral designs.
  </p>
  <p class="text-gray-600 p-5 text-lg leading-relaxed mt-4">
    Whether it’s a celebration, a small gesture of love, or simply a moment for yourself, Bloom helps you express it perfectly. Designed with love and care, our collections combine modern aesthetics with timeless nature.
  </p>
  <p class="text-gray-600 p-5 text-lg font-bold leading-relaxed mt-4">
    This project is a design-to-code practice made with React and Tailwind CSS, inspired by a flower startup concept.
  </p>
</div>

        </>
    );
};

export default About;
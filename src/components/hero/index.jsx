import React from "react";
import longArrow from '../../assets/icons/Arrow Icon.svg'

const Hero = () => {
  return (
    <div className="bg-darkBlue text-white w-full font-space-grotesk px-5">
      <div className="container mx-auto min-h-screen flex justify-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center max-w-5xl">
            <h1 className="text-[3rem] md:text-[6rem] lg:text-[10rem] leading-[3rem] md:leading-[6rem] lg:leading-[10rem] text-center font-bold">
              YOUR BEST
              <br />
              <span className="font-poppins font-light italic">IT</span>{" "}
              PARTNERS
            </h1>
            <p className="text-center leading-5 max-w-md md:max-w-xl lg:max-w-3xl font-light">
              From custom software development to cybersecurity, our team of
              experts is dedicated to delivering solutions that are tailored to
              your unique needs.
            </p>
            </div>

            <button className="border border-white px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
              Explore Now <img src={longArrow} alt="long arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

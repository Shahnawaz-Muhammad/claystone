import React from "react";
import { FaCheck } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import about from "../../assets/about.jpg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "../../../src/App.css";
const aboutus = () => {
  const arr = [
    {
      id: 1,
      img: about,
      twitterlogo: BsTwitter,
      facebooklogo: FaFacebookF,
      instalogo: BsInstagram,
      ldlogo: FaLinkedinIn,
    },
    {
      id: 2,
      img: about,
      twitterlogo: BsTwitter,
      facebooklogo: FaFacebookF,
      instalogo: BsInstagram,
      ldlogo: FaLinkedinIn,
    },
    {
      id: 3,
      img: about,
      twitterlogo: BsTwitter,
      facebooklogo: FaFacebookF,
      instalogo: BsInstagram,
      ldlogo: FaLinkedinIn,
    },
    {
      id: 4,
      img: about,
      twitterlogo: BsTwitter,
      facebooklogo: FaFacebookF,
      instalogo: BsInstagram,
      ldlogo: FaLinkedinIn,
    },
  ];
  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex-col w-[80%] lg:flex lg:flex-row lg:justify-between my-20 lg:w-[95%] xl:w-[90%] 2xl:w-[80%] ">
          <div className="lg:w-[55%] xl:w-[60%]  ">
            <div className="w-full h-full">
              <div>
                <p className="text-gradientStart font-bold text-[1.25rem]">
                  ABOUT US
                </p>
              </div>
              <div>
                <p className="text-[#091E3E] font-bold text-[2.5rem]   leading-[1.2] ">
                  The Best IT Solution With 10 Years of Experience
                </p>
              </div>
              <div className="mt-10">
                <p className="text-[#6B6A75] font-norma text-[1rem] leading-6 ">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                  tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor eirmod magna dolore erat amet
                </p>
              </div>
              <div className=" sm:flex  sm:gap-32 mt-5">
                <div className=" ">
                  <div className="flex items-center gap-4 sm:mt-0 mt-2">
                    <FaCheck className="text-gradientStart text-[1.25rem]"></FaCheck>
                    <p className="text-[1.25rem]">Award Winning</p>
                  </div>
                  <div className="flex items-center gap-4 sm:pt-2 sm:mt-0 mt-2">
                    <FaCheck className="text-gradientStart text-[1.25rem]"></FaCheck>
                    <p className="text-[1.25rem] ">Professional Staff</p>
                  </div>
                </div>
                <div className="  ">
                  <div className="flex items-center gap-4 sm:mt-0 mt-2">
                    <FaCheck className="text-gradientStart text-[1.25rem]"></FaCheck>
                    <p className="text-[1.25rem]">24/7 Support</p>
                  </div>
                  <div className="flex items-center gap-4 sm:pt-2 sm:mt-0 mt-2">
                    <FaCheck className="text-gradientStart text-[1.25rem]"></FaCheck>
                    <p className="text-[1.25rem]">Fair Prices</p>
                  </div>
                </div>
              </div>

              <div className="flex  gap-4 items-center mt-8">
                <div className=" flex  justify-center items-center w-[60px] h-[60px]  bg-blue">
                  <HiPhone className="text-[20px] text-[#fff] " />
                </div>
                <div>
                  <p className="text-[#091E3E] font-medium text-[1.25rem]">
                    Call to ask any question
                  </p>
                  <p className="text-blue font-medium text-[1.25rem]">
                    +012 345 6789
                  </p>
                </div>
              </div>

              <button className="bg-blue text-[#fff] mt-10 px-[48px] py-[16px] text-[1rem] font-medium rounded-sm ">
                Request A Quote
              </button>
            </div>
            {/* end */}
          </div>
          <div className="mt-5 lg:mt-0 lg:w-[44%] xl:w-[38%]">
            <img
              src={about}
              alt="none"
              className="h-full w-full rounded-sm "
            ></img>

            {/* end */}
          </div>
        </div>
        {/*second main div end */}
      </div>

      {/* Team Members  cards etc*/}
      <div className="my-20">
        <div>
          <div className="flex justify-center ">
            <p className="text-gradientStart font-bold text-[1.29rem] ">
              TEAM MEMBERS
            </p>
          </div>
          <div className="flex justify-center  ">
            <p className="text-darkBlue font-bold text-[1.5rem] sm:text-[2.5rem]  w-[34rem] leading-[1.2] text-center">
              Professional Stuffs Ready to Help Your Business
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-6 md:gap-2 w-[80%] lg:w-[95%] xl:w-[90%] 2xl:w-[80%]">
              {arr.map((data) => {
                console.log(data.logo);
                return (
                  <div className="bg-[#EEF9FF] ">
                    <div className=" relative overflow-hidden group  cursor-pointer rounded-sm">
                      <img
                        src={data.img}
                        className="w-full transform transition-transform duration-300 group-hover:scale-105 "
                      ></img>
                      {/* <div className='absolute'></div> */}
                      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-50 group-hover:bg-darkBlue transition-opacity gap-2 "></div>
                      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-90  transition-opacity gap-2 animate-snake-container">
                        <div className="flex  justify-center items-center w-[44px] h-[44px]  bg-gradientStart rounded-sm animate-snake-item animate-snake-item-1">
                          {React.createElement(data.twitterlogo, {
                            className: "text-white text-[20px]",
                          })}
                        </div>
                        <div className="flex  justify-center items-center w-[44px] h-[44px]  bg-gradientStart rounded-sm animate-snake-item animate-snake-item-2">
                          {" "}
                          {React.createElement(data.facebooklogo, {
                            className: "text-white text-[20px]",
                          })}
                        </div>
                        <div className="flex  justify-center items-center w-[44px] h-[44px]  bg-gradientStart rounded-sm animate-snake-item animate-snake-item-3">
                          {React.createElement(data.instalogo, {
                            className: "text-white text-[20px]",
                          })}
                        </div>
                        <div className="flex  justify-center items-center w-[44px] h-[44px]  bg-gradientStart rounded-sm animate-snake-item animate-snake-item-4">
                          {" "}
                          {React.createElement(data.ldlogo, {
                            className: "text-white text-[20px]",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className=" text-center py-4">
                        <p className="text-blue font-semibold leading-[1.2] text-[23px]">
                          Full Name
                        </p>
                        <p className="text-[#6B6A75] font-normal leading-[1.5] text-[16px]">
                          Designation
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* main div end end */}
    </div>
  );
};

export default aboutus;
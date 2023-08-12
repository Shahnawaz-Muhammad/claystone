import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import person1 from "../../assets/images/tom-johnson-rev.png";
import person2 from "../../assets/images/john-dov-rev.png";
import samsung from "../../assets/images/samsung.png"
import google from "../../assets/images/google.png"
import amazon from "../../assets/images/amazon.png"
import windows from "../../assets/images/windows.png"
import sony from "../../assets/images/sony.png"

const ClientsStories = () => {
  const images = [
    { id: 1, src: samsung, alt: "none" },
    { id: 2, src: google, alt: "none" },
    { id: 3, src: amazon, alt: "none" },
    { id: 4, src: windows, alt: "none" },
    { id: 5, src: sony, alt: "none" },
  ];

  return (
    <div className="bg-darkBlue text-white py-20">
      <div className="grid gap-[50px] lg:gap-[80px] w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <div className="flex justify-between items-center">
          <h3 className="font-space-grotesk text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#fff] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-semibold ">
            Client Stories
          </h3>
          <FaArrowRight className="text-[4rem]" />
        </div>
        <div className="flex flex-col  md:flex-row justify-between items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-orangePeel font-space-grotesk font-semibold">
              Amazing!
            </h1>
            <p>
              “WaveNet's cybersecurity solution gave us the peace of mind we
              needed to focus on our business. They took the time to understand
              our unique needs and created a solution that protected our
              sensitive data and ensured compliance with industry regulations.”
            </p>
            <div className="flex justify-end items-center gap-5">
              <div className="flex flex-col justify-between text-right">
                <h3>Tom Johnson</h3>
                <p>CIO of Mika Medika Healthcare</p>
              </div>
              <img src={person1} alt="review" className="w-16" />
            </div>
          </div>

          <div className="h-full w-1 bg-lightBlue my-10 md:mx-12 lg:mx-24"></div>

          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-orangePeel font-space-grotesk font-semibold">
              Best Service
            </h1>
            <p>
              “We were struggling to keep up with the demands of our growing
              business until we partnered with WaveNet. Their custom software
              development solution has helped us streamline our operations and
              improve efficiency, saving us time and money.”
            </p>
            <div className="flex justify-end items-center gap-5">
              <div className="flex flex-col justify-between text-right">
                <h3>John Doe</h3>
                <p>COO of DEF Manufacturing</p>
              </div>
              <img src={person2} alt="review" className="w-16" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <div className=" w-full max-w-screen-xl flex justify-between  bg-opacity-70 py-20 ">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },

                  640: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1289: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide className="w-full flex justify-between" key={image.id}>
                      <img src={image.src} alt="" className="mx-auto h-full" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientsStories;

import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import longArrow from "../../assets/icons/Arrow Icon.svg";

const AskQuestions = () => {
  const faqList = [
    {
      id: 1,
      title: "What services does WaveNet offer?",
      description:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.",
    },
    {
      id: 2,
      title: "Which IT solution is for my business?",
      description:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.",
    },
    {
      id: 3,
      title: "How much do the services cost?",
      description:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.",
    },
    {
      id: 4,
      title: "How do I get started with the IT solutions?",
      description:
        "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.",
    },
  ];

  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  return (
    <div className="bg-darkBlue text-white py-20">
      <div className=" w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between gap-10 h-full">
          <div className=" h-full  lg:w-1/2 flex-grow rounded-3xl  px-10  flex flex-row md:flex-col ">
            <div className="w-full flex flex-row lg:flex-col justify-between gap-5 py-5 md:h-[20rem] xl:h-[25rem]">
              <h3 className="  font-space-grotesk text-8xl md:text-5xl lg:text-6xl xl:text-8xl text-[#fff]  font-semibold ">
                Got Any Questions?
              </h3>

              <div>
                <button className="border border-white px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
                  Explore Now <img src={longArrow} alt="long arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="  h-full lg:w-1/2  flex-grow rounded-3xl  flex flex-col gap-8">
            <div className="flex flex-col items-center ">
              {faqList.map((listItem, index) => (
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="w-[100%] border-b border-b-light-blue"
                  key={index}
                >
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className="flex items-center  w-full md:text-lg py-8  font-normal justify-between text-gray-500 "
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() =>
                        setExpandedFAQIndex(
                          expandedFAQIndex === index ? null : index
                        )
                      }
                    >
                      <span className="text-2xl font-normal">
                        {listItem.title}
                      </span>
                      <div className="px-1 md:px-4">
                        {expandedFAQIndex === index ? (
                          <HiMinus className="w-8 text-light-blue " />
                        ) : (
                          <HiPlus className="w-8 text-light-blue  " />
                        )}
                      </div>
                    </button>
                  </h2>
                  {expandedFAQIndex === index && (
                    <div
                      id="accordion-collapse-body-1"
                      className=""
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className=" font-normal border-b-1 ">
                        <p className="mb-2  md:text-lg">
                          {listItem.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
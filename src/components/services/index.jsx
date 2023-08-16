import React, { useState } from "react";
import arrowicon from "../../assets/icons/Arrow Icon-2.png";
import shortArrowIcon from "../../assets/icons/Arrow Icon short.png";
import cyberpic from "../../assets/cyber.jpg"
const Service = () => {
  const arr = [
    { id: 1, services: "Web Development", content: "service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business operates securely and efficiently." },
    { id: 2, services: "Mobile Development", content: "Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business operates securely and efficiently." },
    { id: 3, services: "Cyber Security", content: "Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business operates securely and efficiently." },
    { id: 4, services: "Digital Marketing", content: "Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business operates securely and efficiently." },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleArrowClick = (id) => {
    
    if (expandedId === id) {
      setExpandedId(null);
    
    } else {
      setExpandedId(id);
     
    }
  };

  return (
    <div className="bg-lightBlue flex justify-center">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto my-40">
        <div className="flex justify-center  mb-28">
          <p className="text-darkBlue text-[70px] font-bold">Services</p>
        </div>
        {arr.map((data) => (
          <div key={data.id}>
            <div
              className="flex justify-between items-center mt-8 cursor-pointer"
              onClick={() => handleArrowClick(data.id)}
            >
               {expandedId === data.id ? null:<h1 className="text-darkBlue sm:text-4xl text-2xl font-light italic">
                {data.services}
              </h1>}
            {expandedId === data.id ? null:<img
                src={arrowicon}
                alt="none"
                className="text-darkBlue w-20"
              />}
              
            </div>
          
            {expandedId === data.id && (
              <div className="flex flex-col items-center  md:flex md:flex-row md:justify-between  cursor-pointer  "  onClick={() => handleArrowClick(data.id)} >
               <div className="w-[100%] md:w-[50%]">
               <h1 className="text-darkBlue lg:text-5xl text-3xl font-semibold font-space-grotesk">
                {data.services}
              </h1>
                <p className="text-darkBlue mt-4 font-medium">{data.content}</p>
                <img src={shortArrowIcon} className="mt-5 w-16"></img>
                </div>
                <div className="  h-52 w-[100%] md:w-[45%] ">
                    <img src={cyberpic} className="w-full h-full pt-5 md:pt-0 rounded-lg"></img>
                </div>
              </div>
            )}
              <hr className="text-darkBlue mt-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

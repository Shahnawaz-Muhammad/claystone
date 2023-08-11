import React, { useState } from "react";
import arrowicon from "../../assets/icons/Arrow Icon.png";
import cyberpic from "../../assets/cyber.jpg"
const Services = () => {
  const arr = [
    { id: 1, services: "Web Development", content: "Our cyber security service provides advanced protection for your data and systems against potential threats and attacks, ensuring your business operates securely and efficiently." },
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
      <div className="w-[90%]">
        <div className="flex justify-center mt-32 mb-28">
          <p className="text-darkBlue text-[70px] font-bold">Services</p>
        </div>
        {arr.map((data) => (
          <div key={data.id}>
            <div
              className="flex justify-between items-center mt-8 cursor-pointer"
              onClick={() => handleArrowClick(data.id)}
            >
               {expandedId === data.id ? null:<h1 className="text-darkBlue sm:text-5xl text-2xl font-normal">
                {data.services}
              </h1>}
            {expandedId === data.id ? null:<img
                src={arrowicon}
                alt="none"
                className="text-darkBlue sm:w-[100px] sm:h-8 w-[60px] h-4 transform"
              />}
              
            </div>
          
            {expandedId === data.id && (
              <div className="flex flex-col items-center  md:flex md:flex-row md:justify-between  cursor-pointer  "  onClick={() => handleArrowClick(data.id)} >
               <div className="w-[100%] md:w-[50%]">
               <h1 className="text-darkBlue lg:text-5xl text-3xl font-normal">
                {data.services}
              </h1>
                <p className="text-darkBlue mt-4 font-medium">{data.content}</p>
                <img src={arrowicon} className="mt-5"></img>
                </div>
                <div className="  h-52 w-[100%] md:w-[45%] ">
                    <img src={cyberpic} className="w-full h-full pt-5 md:pt-0"></img>
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

export default Services;

import React from "react";
import service from "../Images/service.png";

import { Link } from "react-router-dom";

const Services = ({ data }) => {
  

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-center text-4xl font-bold absolute z-40 ">
          SERVICES
        </h1>
        <img src={service} className="h-64 w-full" alt="..." />
      </div>
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto">
        <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full min-h-[300px] border-t-8 border-darkBlue py-6 services-box-shadow md:transition-transform duration-300 hover:scale-105 grid gap-1"
            >
              <div className=" w-100 flex justify-center">
                <img
                  src={item.icon}
                  className=" w-[92px] h-[92px] object-contain"
                  alt="..."
                />
              </div>
              <div className=" px-4 text-center flex flex-col justify-center">
                <h5 className="text-lg font-bold ">{item.title}</h5>
                <p className="mt-2 ">{item.description}</p>
                <Link
                  to={`/services/${item.id}`}
                  className="mt-2 text-xl font-bold text-darkBlue underline underline-offset-4"
                >
                  MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

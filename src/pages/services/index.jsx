import React, { useState } from "react";
import service from "../../assets/images/services.jpg";
import { AiOutlineCheck } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
const Services = ({ data }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setDisplayCount(data.length);
    setIsExpanded(true);
  };
  const handleShowLess = () => {
    setDisplayCount(3);
    setIsExpanded(false);
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center h-full">
      
        <h1 className="text-white text-center text-4xl font-bold absolute z-40">
          SERVICES
        </h1>
        <img src={service} className="img-height w-full object-cover z-10" alt="..." />
        <div className="absolute bg-[#000000] inset-0 opacity-80 z-20"></div>
      </div>
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto py-20">
        <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {data.map((item) => (
            <motion.div
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "483px" },
                  collapsed: { height: "330px" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={item.id}
              className="w-full rounded-lg border-t-8 border-darkBlue py-6 services-box-shadow md:transition-transform duration-300 hover:scale-105 grid gap-1"
            >
              <div className=" w-100 flex justify-center">
                <img
                  src={item.icon}
                  className=" w-[92px] h-[92px] object-contain"
                  alt="..."
                />
              </div>
              <div className=" px-4 flex flex-col justify-center">
                <h5 className="text-lg font-bold text-center text-darkBlue">
                  {item.title}
                </h5>
                {item.list && (
                  <ul className="overflow-hidden mt-1 text-base w-[244px] mx-auto text-darkBlue">
                    {item.list.slice(0, displayCount).map((point, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <AiOutlineCheck className="text-orangePeel" />
                        <span>{point.pointList}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {displayCount < data.length ? (
                  <div className="flex justify-center mt-4">
                    <span
                      onClick={handleShowMore}
                      className="text-linkBlue text-lg hover:shadow-sm cursor-pointer font-poppins font-semibold"
                    >
                      See all features
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center mt-4">
                    <span
                      onClick={handleShowLess}
                      className="text-linkBlue text-lg hover:shadow-sm cursor-pointer font-poppins font-semibold"
                    >
                      See less features
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

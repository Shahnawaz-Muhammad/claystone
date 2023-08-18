import React, { useEffect, useRef, useState } from "react";
import service from "../Images/service.png";
import { motion, useAnimation } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

const Services = ({ data }) => {
  const gridControls = useAnimation();
  const gridRef = useRef(null);

  const [displayCount, setDisplayCount] = useState(3); // Initial number of items to display
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const gridElement = gridRef.current;

    const handleScroll = () => {
      const { top: gridTop } = gridElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (gridTop < windowHeight * 3.5) {
        gridControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gridControls]);

  const gridItemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
        <img src={service} className="h-64 w-full" alt="..." />
      </div>
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto">
        <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <motion.div
              ref={gridRef}
              initial="hidden"
              animate={gridControls}
              variants={gridItemVariants}
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
              <div className=" px-4 flex flex-col justify-center">
                <h5 className="text-lg font-bold text-center text-darkBlue">
                  {item.title}
                </h5>
                {item.list && (
                  <ul
                    className={` ${
                      isExpanded ? "max-h-[500px]" : "max-h-[100px]"
                    }  overflow-hidden transition-max-height duration-300 ease-in-out mt-1 text-base w-[244px] mx-auto text-darkBlue`}
                  >
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
                      className=" text-linkBlue text-lg hover:shadow-sm cursor-pointer font-poppins font-semibold"
                    >
                      See all features
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-center mt-4">
                    <span
                      onClick={handleShowLess}
                      className=" text-linkBlue text-lg hover:shadow-sm cursor-pointer font-poppins font-semibold"
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

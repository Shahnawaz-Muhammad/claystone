import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function OurWork() {
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [successfulProjects, setSuccessfulProjects] = useState(0);
  const [handledCountries, setHandledCountries] = useState(0);
  const controls = useAnimation();
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  const targetSatisfiedClients = 98;
  const targetSuccessfulProjects = 500;
  const targetHandledCountries = 35;

  useEffect(() => {
    const interval = setInterval(() => {
      if (satisfiedClients < targetSatisfiedClients) {
        setSatisfiedClients(satisfiedClients + 1);
      }
      if (successfulProjects < targetSuccessfulProjects) {
        setSuccessfulProjects(successfulProjects + 1);
      }
      if (handledCountries < targetHandledCountries) {
        setHandledCountries(handledCountries + 1);
      }
    }, 10); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [satisfiedClients, successfulProjects, handledCountries]);

  useEffect(() => {
    const headingElement = headingRef.current;
    const contentElement = contentRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: contentTop } = contentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (headingTop  < windowHeight * 0.8) {
        controls.start("visible");
      }

      if (contentTop < windowHeight * 0.8) { 
        controls.start('visible');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const headingVariants = {
    hidden: { opacity: 0, textShadow: "none" },
    visible: {
      opacity: 1,
      textShadow: "0px 0px 8px rgba(173, 216, 230, 0.8)",
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const paragraphVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-lightBlue text-white py-20">
      <div className="max-w-[90%] lg:max-w-[95%] xl:max-w-[86%] mx-auto py-20">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headingVariants}
          className="w-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            ref={headingRef}
            className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 font-space-grotesk text-darkBlue"
          >
            We believe that{" "}
            <span className="italic font-light font-poppins">technology</span>{" "}
            can <span className="text-outline text-lightBlue">change</span> the
            world.
          </motion.h1>
          <motion.div
            ref={contentRef}
            variants={paragraphVariants}
            initial="hidden"
            animate={controls}
          >
            <p className="mt-4 max-w-5xl text-lg text-darkBlue">
              That's why we're committed to delivering innovative IT solutions
              to businesses of all sizes. Our team of experienced professionals
              is dedicated to helping you achieve your goals and thrive in a
              rapidly evolving digital landscape.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          ref={contentRef}
          variants={paragraphVariants}
          initial="hidden"
          animate={controls}
          className="flex items-center mt-10 md:mt-20 justify-between px-8 text-darkBlue"
        >
          <div className="mt-4 w-full flex flex-col justify-center items-center">
            <h1 className="mr-4 text-4xl md:text-5xl xl:text-6xl">
              {successfulProjects}+
            </h1>
            <p className="">Successful Projects</p>
          </div>

          <div className="w-full mb-8 md:mb-4  bg-darkBlue h-0.5 mr-2"></div>

          <div className="mt-4 w-full flex flex-col justify-center items-center">
            <h1 className="mr-4 text-4xl md:text-5xl xl:text-6xl">
              {satisfiedClients}%
            </h1>
            <p className="">Satisfied Clients</p>
          </div>

          <div className="w-full mb-8 md:mb-4  bg-darkBlue h-0.5"></div>

          <div className="mt-4 w-full flex flex-col justify-center items-center">
            <h1 className=" text-4xl md:text-5xl xl:text-6xl mr-4">
              {handledCountries}+
            </h1>
            <p className="">Handled Countries</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurWork;

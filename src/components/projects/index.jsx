import React, { useEffect, useRef, useState } from "react";
import project1 from "../../assets/images/192 1.png";
import project2 from "../../assets/images/tracking-app.jpg";
import { MdSpatialTracking } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";

const Projects = () => {
  const headingControls = useAnimation();
  const descControls = useAnimation();
  const projectControls = useAnimation();
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const projectRef = useRef(null);

  const cardData = [
    { id: 1, title: "Vehicle Tracking System" },
    { id: 2, title: "e-Commerce Echo System" },
    { id: 3, title: "Complain Management System " },
    { id: 4, title: "Building Control Systems" },
    { id: 5, title: "Smart Cities" },
    { id: 6, title: "Construction Management Systems" },
    { id: 7, title: "Ticketing Systems" },
    { id: 8, title: "CRM" },
  ];

  useEffect(() => {
    const headingElement = headingRef.current;
    const descElement = descRef.current;
    const projectElement = projectRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: descTop } = descElement.getBoundingClientRect();
      const { top: projectTop } = projectElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (descTop < windowHeight * 0.8) {
        descControls.start("visible");
      }

      if (projectTop < windowHeight * 0.8) {
        projectControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, descControls, projectControls]);
  const headingVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const descVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const projectVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    // Toggle the shadow after every 3 seconds
    const toggleShadowInterval = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 1000);

    return () => clearInterval(toggleShadowInterval);
  }, []);

  return (
    <div className="bg-darkBlue text-white pt-40 pb-16">
      <div className="grid gap-[50px] lg:gap-[80px] w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.h3
            ref={headingRef}
            initial="hidden"
            variants={headingVariants}
            animate={headingControls}
            className="w-full md:w-1/2 font-space-grotesk text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#fff] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-semibold "
          >
            Projects
          </motion.h3>
          <motion.p
            ref={descRef}
            initial="hidden"
            variants={descVariants}
            animate={descControls}
            className="w-full md:w-1/2"
          >
            As an IT company, we pride ourselves on delivering customized
            solutions that meet our clients' unique needs. Our projects
            highlight our expertise in web & mobile development, desktop
            application, devOps, and digital marketing.
          </motion.p>
        </div>

        <motion.div
          ref={projectRef}
          initial="hidden"
          variants={projectVariants}
          animate={projectControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full"
        >
          {cardData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`w-full  flex-grow rounded-3xl ${
                  index % 2 === 0 ? "bg-gradientStart" : "bg-orangePeel"
                } p-4  text-center flex flex-col gap-8 container-shadow ${
                  showShadow && index % 2 === 0
                    ? "shadow-visible"
                    : showShadow && index % 2 === 1
                    ? "shadow-visible-orange"
                    : "shadow-hidden"
                }`}
              >
                <div className="flex flex-col gap-5  items-center">
                  <div>
                    <MdSpatialTracking className="text-7xl" />
                    {/* <img src={project1} alt="" /> */}
                  </div>
                  <h3 className="text-4xl lg:text-3xl font-space-grotesk font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}

          {/* <div
            className={`w-full  flex-grow rounded-3xl bg-orangePeel p-10 lg:p-20 text-center flex flex-col gap-8 container-shadow ${
              showShadow ? "shadow-visible-orange" : "shadow-hidden"
            }`}
          >
            <div className="flex flex-col gap-5 items-center">
              <div>
              </div>
              <p>2023</p>
              <h3 className="text-4xl lg:text-5xl font-space-grotesk font-semibold">
                Tracking Application
              </h3>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

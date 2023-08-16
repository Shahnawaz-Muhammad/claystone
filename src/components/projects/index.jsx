import React, { useEffect, useRef } from "react";
import project1 from "../../assets/images/192 1.png";
import { useAnimation, motion } from "framer-motion";

const Projects = () => {
  const headingControls = useAnimation();
  const descControls = useAnimation();
  const projectControls = useAnimation();
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const projectRef = useRef(null);
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
  return (
    <div className="bg-darkBlue text-white pt-40 pb-20">
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
            highlight our expertise in web & mobile development, cloud
            computing, cybersecurity, and digital marketing.
          </motion.p>
        </div>

        <motion.div
          ref={projectRef}
          initial="hidden"
          variants={projectVariants}
          animate={projectControls}
          className="flex flex-col md:flex-row items-center gap-10 h-full"
        >
          <div className="w-full md:w-1/2 md:h-[30rem] xl:h-[35rem] flex-grow rounded-3xl bg-gradientStart px-10 py-12 flex flex-col justify-end">
            <div className="flex flex-col gap-5 pt-10">
              <div>
                <img src={project1} alt="" />
              </div>
              <p>2022</p>
              <h3 className="text-5xl font-space-grotesk font-semibold">
                Uwang Corp.
              </h3>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:h-[30rem] xl:h-[35rem] flex-grow rounded-3xl bg-orangePeel p-3 md:p-20 text-center flex flex-col gap-8 container-shadow">
            <p className="text-lg">CYBER SECURITY</p>
            <div>
              <h3 className="text-7xl md:text-4xl lg:text-7xl font-space-grotesk font-bold">
                Mika <br /> Medika
              </h3>
              <p className="font-normal text-md">
                Mika Medika Healthcare, a large hospital network, was concerned
                about the security of their patient data.
              </p>
            </div>
            <div>
              <button className="bg-white text-darkBlue px-12 py-3 md:px-9 md:py-2 xl:px-12 xl:py-3 rounded-xl shadow-md">
                Read Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

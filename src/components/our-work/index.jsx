import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const OurWork = () => {
  const controls = useAnimation();
  const headingRef = useRef(null);
  const contentRef = useRef(null); // Add a reference for the content block
  const statsRef = useRef(null); // Add a reference for the statistics block

  useEffect(() => {
    const headingElement = headingRef.current;
    const contentElement = contentRef.current; // Assign the content ref
    const statsElement = statsRef.current; // Assign the stats ref

    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: contentTop } = contentElement.getBoundingClientRect(); // Get the content's top position
      const { top: statsTop } = statsElement.getBoundingClientRect(); // Get the stats' top position
      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        controls.start('visible');
      }

      if (contentTop < windowHeight * 0.8) { // Trigger animation for content
        controls.start('visible');

      }

      if (statsTop < windowHeight * 0.8) { // Trigger animation for statistics
        controls.start('visible');

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const headingVariants = {
    hidden: { opacity: 0, textShadow: 'none' },
    visible: {
      opacity: 1,
      textShadow: '0px 0px 8px rgba(173, 216, 230, 0.8)',
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  // Apply similar variants for content and statistics animations

  return (
    <div className="bg-lightBlue text-white py-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={headingVariants}
        className="max-w-[90%] lg:max-w-[95%] xl:max-w-[86%] mx-auto py-20"
      >
        <div className="w-full flex flex-col justify-center items-center text-center">
          <motion.h1
            ref={headingRef}
            className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 font-space-grotesk text-darkBlue"
          >
            We believe that{" "}
            <span className="italic font-light font-poppins">technology</span>{" "}
            can <span className="text-outline text-lightBlue">change</span>{" "}
            the world.
          </motion.h1>
        </div>
      </motion.div>

      {/* Apply similar motion.div for content */}
      <motion.div
        ref={contentRef}
        variants={headingVariants}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="mt-4 max-w-5xl text-lg text-darkBlue">
          That's why we're committed to delivering innovative IT solutions to
          businesses of all sizes. Our team of experienced professionals is
          dedicated to helping you achieve your goals and thrive in a rapidly
          evolving digital landscape.
        </p>
      </motion.div>

      {/* Apply similar motion.div for statistics */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center mt-10 md:mt-20 justify-between px-8 text-darkBlue">
          {/* Rest of your statistics code */}
        </div>
      </motion.div>

      {/* Rest of your code */}
    </div>
  );
};

export default OurWork;


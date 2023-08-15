import ExpertiseAnimation from "../animation/expertiseAnimation";
import ResultAnimation from "../animation/resultAnimation";
import SolutionAnimation from "../animation/solutionAnimation";
import TechnolgyAnimation from "../animation/technologyAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const controls = useAnimation();
  const headingRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;

    const handleScroll = () => {
      const { top } = headingElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featuresData = [
    {
      img: <ExpertiseAnimation />,
      feature: "expertise",
      description:
        "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    },
    {
      img: <TechnolgyAnimation />,
      feature: "technology",
      description:
        "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
    },
    {
      img: <SolutionAnimation />,
      feature: "solutions",
      description:
        "We take a personalized approach to every project, working closely with you to understand your business and create solutions.",
    },
    {
      img: <ResultAnimation />,
      feature: "results",
      description:
        "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
    },
  ];
  return (
    <div className="bg-darkBlue text-white pb-[200px]">
      <div className="grid gap-[50px] lg:gap-[80px] w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#D9D9D9] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-bold"
        >
          <h3>
            Why <br />
            Choose Us?
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[68px]">
          {featuresData.map((data, index) => (
            <div key={index}>
              {data.img}
              <h6 className="text-[32px] leading-10 text font-semibold pt-16">
                {data.feature}
              </h6>
              <p className="text-[20] leading-[30px] pt-4">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

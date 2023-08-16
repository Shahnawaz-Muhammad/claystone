import Button from "../button";
import longArrow from "../../assets/icons/white-arrow-icon.png";

const ItSolutions = () => {
  return (
    <div>
      <h3 className="font-space-grotesk text-white text-5xl lg:text-7xl text-center leading-[5rem] lg:leading-[6rem] font-semibold">
        Need IT Solutions?
      </h3>
      <div className="flex items-center justify-center pb-16">
        <h3 className="font-space-grotesk text-white text-5xl lg:text-7xl leading-[5rem] lg:leading-[6rem] text-center  font-semibold">
          Let's&nbsp;
        </h3>
        <p className="font-poppins italic text-5xl lg:text-7xl text-white leading-[5rem] lg:leading-[6rem] font-light">
          start now.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="border border-white text-white px-6 py-3 md:px-7 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
          GET FREE CONSULTATION <img src={longArrow} alt="long arrow" />
        </button>
      </div>
    </div>
  );
};

export default ItSolutions;

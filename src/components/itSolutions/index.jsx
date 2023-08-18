import longArrow from "../../assets/icons/white-arrow-icon.png";

const ItSolutions = () => {
  return (
    <div className="bg-lightBlue">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto   py-[10rem]">
        <h3 className="font-space-grotesk text-darkBlue text-5xl lg:text-7xl text-center leading-[5rem] lg:leading-[6rem] font-semibold">
          Need IT Solutions?
        </h3>
        <div className="flex items-center justify-center">
          <h3 className="font-space-grotesk text-darkBlue text-5xl lg:text-7xl leading-[5rem] lg:leading-[6rem] text-center  font-semibold">
            Let's&nbsp;
          </h3>
          <p className="font-poppins italic text-5xl lg:text-7xl text-darkBlue leading-[5rem] lg:leading-[6rem] font-light">
            start now.
          </p>
        </div>
        <div className="flex justify-center my-20">
          <button className="border border-darktext-darkBlue text-darkBlue px-6 py-3 md:px-7 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
            GET FREE CONSULTATION <img src={longArrow} alt="long arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItSolutions;

import Button from "../button";
import whiteArrowIcon from "../../assets/icons/white-arrow-icon.png"

const ItSolutions = () => {
  return (
    <div>
      <h3 className="font-space-grotesk text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center leading-[110px] font-bold">
        Need IT Solutions?
      </h3>
      <div className="flex items-center justify-center pb-16">
        <h3 className="font-space-grotesk text-white text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center leading-[110px] font-bold">
          Let's&nbsp;
        </h3>
        <p className="font-poppins italic text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-white leading-[150px]">
          start now.
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          text="get free consultation"
          textColor="text-white"
          src={whiteArrowIcon}
          border="border border-white"
        />
      </div>
    </div>
  );
};

export default ItSolutions;

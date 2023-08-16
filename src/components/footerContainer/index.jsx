import Footer from "../footer";
import ItSolutions from "../itSolutions";

const FooterContainer = () => {
  return (
    <div className="bg-darkBlue">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto space-y-[223px] pt-40">
        <ItSolutions />
        <Footer />
      </div>
    </div>
  );
};

export default FooterContainer;

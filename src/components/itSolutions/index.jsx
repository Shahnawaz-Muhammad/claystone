import Button from "../button";

const ItSolutions = () => {
  return (
    <div>
      <h3 className="font-space-grotesk text-white text-[100px] text-center leading-[110px] font-bold">
        Need IT Solutions?
      </h3>
      <div className="flex items-center justify-center pb-16">
        <h3 className="font-space-grotesk text-white text-[100px] text-center leading-[110px] font-bold">
          Let's&nbsp;
        </h3>
        <p className="font-poppins italic text-[100px] text-white leading-[150px]">
          start now.
        </p>
      </div>
      <div className="flex justify-center">
        <Button
          text="get free consultation"
          width="w-[367px]"
          hoverEffects="hover:text-darkblue hover:bg-white"
          textColor="text-white"
          border="border border-white"
        />
      </div>
    </div>
  );
};

export default ItSolutions;

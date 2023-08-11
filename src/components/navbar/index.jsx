import React from "react";
import claystonelogo from "../../assets/claystone-logo.png";
const Navbar = () => {
  const arr = [
    { id: 1, name: "ABOUT US" },
    { id: 1, name: "SERVICES" },
    { id: 1, name: "PRICING" },
    { id: 1, name: "BLOG" },
    { id: 1, name: "CONTACT" },
  ];

  return (
    <div className="bg-darkBlue flex justify-center z-30">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%]  flex items-center  justify-between py-5 ">
        <div>
          <img
            src={claystonelogo}
            className="w-[200px] h-[32px]"
            alt="none"
          ></img>
        </div>
        <div className=" items-center gap-6 lg:gap-14 xl:gap-16 hidden md:flex">
          {arr.map((data) => {
            return (
              <div className="text-white text-base" id={data.id}>
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
        <div className=" border-2 flex items-center">
          <button className="text-white border-[1px] text-base border-white rounded-[5px] h-[48px] w-[100px]">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

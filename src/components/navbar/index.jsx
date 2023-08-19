import React from "react";
import claystonelogo from "../../assets/claystone-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const arr = [
    { id: 1, name: "HOME", url: "/" },
    { id: 2, name: "ABOUT US", url: "/about" },
    { id: 3, name: "SERVICES", url: "/services" },
    // { id: 4, name: "BLOG", url: "/blog" },
    { id: 4, name: "CONTACT", url: "/contact" },
  ];

  return (
    <div className="bg-darkBlue flex justify-center z-30">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%]  flex items-center  justify-between h-[87px] ">
        <div>
          <Link to="/">
            {" "}
            <img
              src={claystonelogo}
              className="w-[200px] h-[32px]"
              alt="none"
            />
          </Link>
        </div>
        <div className="items-center gap-6 lg:gap-14 xl:gap-16 hidden md:flex">
          {arr.map((data) => {
            return (
              <div className="text-white text-base" key={data.id}>
                <Link to={data.url}>
                  <p>{data.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="border-2 flex items-center">
          <button className="text-white border-[1px] text-base border-white rounded-[5px] h-[48px] w-[100px]">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

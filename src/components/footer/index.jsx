import claystonetextLogo from "../../assets/claystone-text-logo.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import arrowIcon from "../../assets/icons/arrow-icon.png";
import ItSolutions from "../itSolutions";

const Footer = () => {
  const socialIcons = [
    {
      icon: instagramIcon,
      href: "#",
      alt: "instagram icon",
    },
    {
      icon: facebookIcon,
      href: "#",
      alt: "facebook icon",
    },
    {
      icon: twitterIcon,
      href: "#",
      alt: "twitter icon",
    },
  ];

  const exploreData = [
    {
      link: "about us",
      href: "/about",
    },
    {
      link: "services",
      href: "/services",
    },
    
    {
      link: "contact",
      href: "/contact",
    },
  ];

  
  return (
    <div className="bg-darkBlue">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto py-20">
        <div className="grid gap-20  overflow-hidden">
          <div className="grid grid-cols-12 gap-8 lg:gap-4">
            <div className="col-span-12 lg:col-span-5">
              <div className="grid gap-10">
                <img
                  src={claystonetextLogo}
                  className="w-80 xs:w-[449px] h-[64px] object-contain"
                  alt="claystone text logo"
                />
                <div className="flex space-x-[64px]">
                  {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.href}>
                      <img
                        src={icon.icon}
                        className="w-[32px] h-[32px] object-contain"
                        alt={icon.alt}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <div>
                <div className="grid gap-4">
                  <h6 className="font-poppins font-semibold text-[20px] text-white leading-[30px]">
                    Explore
                  </h6>
                  <ul className="grid gap-3">
                    {exploreData.map((explore, index) => (
                      <li key={index}>
                        <a
                          href={explore.href}
                          className="font-poppins md:text-base text-lightBlue capitalize"
                        >
                          {explore.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="col-span-12 sm:col-span-4 lg:col-span-2">
              <div>
                <div className="grid gap-4">
                  <h6 className="font-poppins font-semibold text-[20px] text-white leading-[30px]">
                    Contact
                  </h6>
                  <div>
                    <ul className="grid gap-3">
                      {contactData.map((contact, index) => (
                        <li key={index}>
                          <a
                            href={contact.href}
                            className="font-poppins md:text-base text-lightBlue capitalize"
                          >
                            {contact.link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-span-12 lg:col-span-4">
              <h6 className="font-poppins font-semibold text-[20px] text-white leading-[30px]">
                Newsletter
              </h6>
              <p className="font-poppins md:text-base text-lightBlue pt-6">
                Subscribe to our newsletter to stay informed about our latest
                products, services, and promotions. Feel free to unsubscribe
                anytime!
              </p>
              <div className="relative pt-[43px]">
                <div className="bg-darkBlue border border-lightBlue rounded-[5px] w-[100%] pl-5 h-12 flex items-center">
                  <div className="absolute inset-y-0 right-4 top-7 flex items-center h-20">
                    <img src={arrowIcon} className="w-6"/>
                  </div>
                  <input
                    type="text"
                    className="text-[20px] text-white leading-[30px] bg-darkBlue focus:outline-none w-[80%]"
                    placeholder="Enter Your Email Address ..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <hr className=" border-white " />
            <div className="md:flex md:justify-between space-y-4 md:space-y-0">
              <p className="font-poppins text-[16px] leading-[26px] text-white">
                Copyright © 2023 for Claystone Tech. All rights reserved.
              </p>
              <div className="flex">
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  Terms & Condition&nbsp;&nbsp;
                </p>
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  |&nbsp;&nbsp;
                </p>
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

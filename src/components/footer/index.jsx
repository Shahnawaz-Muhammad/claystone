import claystonetextLogo from "../../assets/claystone-text-logo.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import arrowIcon from "../../assets/icons/arrow-icon.png";

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
      href: "#",
    },
    {
      link: "services",
      href: "#",
    },
    {
      link: "pricing",
      href: "#",
    },
    {
      link: "blog",
      href: "#",
    },
    {
      link: "contact",
      href: "#",
    },
  ];

  const contactData = [
    {
      link: "email",
      href: "#",
    },
    {
      link: "phone",
      href: "#",
    },
    {
      link: "address",
      href: "#",
    },
    {
      link: "social media",
      href: "#",
    },
  ];
  return (
      <div className="grid gap-20 pb-20 overflow-hidden">
      <div className="grid grid-cols-12 gap-8 lg:gap-4">
        <div className="col-span-12 lg:col-span-4">
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

        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <div>
            <div className="grid gap-4">
              <h6 className="font-poppins font-semibold text-[32px] text-white leading-[40px]">
                Explore
              </h6>
              <ul className="grid gap-3">
                {exploreData.map((explore, index) => (
                  <li key={index}>
                    <a
                      href={explore.href}
                      className="font-poppins text-[20px] text-white leading-[30px] capitalize"
                    >
                      {explore.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <div>
            <div className="grid gap-4">
              <h6 className="font-poppins font-semibold text-[32px] text-white leading-[40px]">
                Contact
              </h6>
              <div>
                <ul className="grid gap-3">
                  {contactData.map((contact, index) => (
                    <li key={index}>
                      <a
                        href={contact.href}
                        className="font-poppins text-[20px] text-white leading-[30px] capitalize"
                      >
                        {contact.link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <h6 className="font-poppins font-semibold text-[32px] text-white leading-[40px]">
            Newsletter
          </h6>
          <p className="font-poppins text-[20px] text-white leading-[30px] pt-6">
            Subscribe to our newsletter to stay informed about our latest
            products, services, and promotions. Feel free to unsubscribe
            anytime!
          </p>
          <div className="relative pt-[43px]">
            <div className="bg-darkBlue border border-lightBlue rounded-[5px] w-[100%] pl-10 h-20 flex items-center">
              <div className="absolute inset-y-0 right-6 top-11 flex items-center h-20">
                <img src={arrowIcon} />
              </div>
              <input
                type="text"
                className="text-[20px] text-white leading-[30px] bg-darkBlue focus:outline-none w-[75%]"
                placeholder="Enter Your Email Address ..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
      <hr className="h-[1px] border-white " />
      <div className="md:flex md:justify-between space-y-4 md:space-y-0">
        <p className="font-poppins text-[16px] leading-[26px] text-white">
          Copyright © 2023 for WaveNet. All rights reserved.
        </p>
        <div className="flex">
          <p className="font-poppins text-[16px] leading-[26px] text-white">Terms & Condition&nbsp;&nbsp;</p>
          <p className="font-poppins text-[16px] leading-[26px] text-white">|&nbsp;&nbsp;</p>
          <p className="font-poppins text-[16px] leading-[26px] text-white">Privacy Policy</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Footer;

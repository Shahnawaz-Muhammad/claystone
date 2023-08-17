import React, { useState } from "react";
import bg from "../Images/service.png";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import contactImg from "../../assets/images/windows.png `";
import ContactForm from "../../components/forms/contact-form";

const Contact = () => {
  const [openContactForm, setOpenContactForm] = useState(false)

  const handleOpenForm = ()=> {
    setOpenContactForm(!openContactForm)
  }
  return (
    <div className="bg-darkBlue text-black py-20">
      <div className=" max-w-[90%] lg:max-w-[95%] xl:max-w-[86%] mx-auto ">
        <h1 className="text-4xl font-space-grotesk font-bold uppercase text-white text-center">
          Contact Us
        </h1>
        <div className=" px-10 py-20 w-full">
          <div className="flex flex-col md:flex-row w-full gap-2 lg:gap-8">
            <div className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-darkBlue rounded-lg relative bottomBorder after:rounded-b-lg">
              <h1 className="text-2xl font-semibold text-blue">We're here</h1>
              <p>Our door is always open for a good cup of tea</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <FiPhoneCall className="w-8 text-blue" />{" "}
                  <span className="w-full">051-8737170</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsEnvelope className="w-8 text-blue" />{" "}
                  <span className="w-full">info@Claystone.pk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineLocationOn className="w-8 text-blue" />
                  <span className="w-full">
                    2nd floor, Sikandar Arcade near Meezan Bank, phase 7 Bahria
                    Town Rawalpindi, Pakistan
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-darkBlue rounded-lg relative bottomBorder after:rounded-b-lg">
              <img src={contactImg} alt="" className="w-32 -mt-5" />
              <h1 className="text-xl font-semibold text-darkBlue">
                Contact Our Support
              </h1>
              <p>
                Our Support Team is just a phone call away, to answer your
                queries
              </p>
              <button className="border-2 border-blue px-10 py-1  text-darkBlue rounded-full" onClick={handleOpenForm}>
                Contact
              </button>
            </div>
            {/* <div className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-blue rounded-lg relative bottomBorder after:rounded-b-lg"></div> */}
          </div>
        </div>
      

      <ContactForm setOpenContactForm={setOpenContactForm} openContactForm={openContactForm}/>
      </div>
    </div>
  );
};

export default Contact;

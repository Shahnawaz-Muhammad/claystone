import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {  addDoc, collection} from "firebase/firestore"; 
import db from '../../firebaseConfig';
import { toast } from "react-toastify";
const ContactForm = ({ openContactForm, setOpenContactForm }) => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputValues = (event) => {
    const value = event.target.value;
    setInputValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    if(inputValue.firstName!==""&&inputValue.lastName!==""&&inputValue.email!==""&&inputValue.phone!==""&&inputValue.message!==""){

    
     
      await addDoc(collection(db, "ContactForm"), {
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        email: inputValue.email,
        phone: inputValue.phone,
        message: inputValue.message,
      });
      toast.success('Data added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000, 
      });

      setInputValue({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setOpenContactForm(false)
    } else {
      toast.error('An error occurred. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000, 
      });
    }


   
  };

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 ${
        openContactForm ? "block" : "hidden"
      } z-50 bg-darkBlue bg-opacity-80 backdrop-blur-sm w-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`}
    >
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-darkBlue rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpenContactForm(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-bold text-darkBlue dark:text-white my-5 text-center underline">
              Send your Queries
            </h3>

            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={inputValue.firstName}
                    onChange={handleInputValues}
                    placeholder="Firstname"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={inputValue.lastName}
                    onChange={handleInputValues}
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    name="email"
                    type="email"
                    value={inputValue.email}
                    onChange={handleInputValues}
                    placeholder="Email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone"
                    type="number"
                    name="phone"
                    value={inputValue.phone}
                    onChange={handleInputValues}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="message"
                    name="message"
                    type="text"
                    value={inputValue.message}
                    onChange={handleInputValues}
                    placeholder="Message"
                  />
                  {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                </div>
              </div>

              <button
                type="submit"
                className="mb-6 inline-block w-full rounded bg-darkBlue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
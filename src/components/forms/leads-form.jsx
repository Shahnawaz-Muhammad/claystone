import React, { useState } from "react";

const LeadsForm = ({ openLeadsForm, setOpenLeadsForm }) => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedCategory: "default",
    selectedTechnology: "default",
    otherTechnology: "",
  });

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const getTechnologyOptions = () => {
    if (inputValue.selectedCategory === "web") {
      return ["React", "ASP.Net", "PHP", "WordPress", "Other"];
    } else if (inputValue.selectedCategory === "desktop") {
      return ["Windows", "Linux", "MacOS", "Other"];
    } else if (inputValue.selectedCategory === "mobile") {
      return ["Flutter", "React Native", "Android", "IOS", "Other"];
    } else if (inputValue.selectedCategory === "server") {
      return ["Django", "Java", "Node.js", "Other"];
    } else if (inputValue.selectedCategory === "ai") {
      return ["Python", "R-Language", "Other"];
    }
    return [];
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Input Values:", inputValue);

    setInputValue({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedCategory: "",
      selectedTechnology: "",
      otherTechnology: "",
    });
    setOpenLeadsForm(false);
  };

  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      className={`fixed top-0 left-0 right-0 ${
        openLeadsForm ? "block" : "hidden"
      } z-50 bg-darkBlue bg-opacity-80 backdrop-blur-sm w-full flex justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`}
    >
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-darkBlue rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setOpenLeadsForm(false)}
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
          </button>{" "}
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="firstName"
                    name="firstName"
                    value={inputValue.firstName}
                    onChange={handleInputValues}
                    type="text"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="lastName"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleInputValues}
                    type="text"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="email"
                    name="email"
                    type="email"
                    value={inputValue.email}
                    onChange={handleInputValues}
                    placeholder="Email"
                  />
                </div>

                {/* <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required> */}

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div className="w-full md:w-1/2 px-3    ">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select a Category
                  </label>
                  <select
                    id="categories"
                    name="selectedCategory"
                    value={inputValue.selectedCategory}
                    onChange={handleInputValues}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Category</option>
                    <option value="web">Web Application</option>
                    <option value="desktop">Desktop Application</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="server">Serverside Application</option>
                    <option value="ai">
                      Machine Learning / Artificial Intelligence
                    </option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 px-3    ">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Technology
                  </label>
                  <select
                    id="technologies"
                    name="selectedTechnology"
                    value={inputValue.selectedTechnology}
                    onChange={handleInputValues}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Technology</option>
                    {getTechnologyOptions().map((tech) => (
                      <option key={tech} value={tech}>
                        {tech}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {inputValue.selectedTechnology === "Other" && (
                <div className="w-full my-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Other
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="otherTechnology"
                    type="text"
                    name="otherTechnology"
                    value={inputValue.otherTechnology}
                    onChange={handleInputValues}
                    placeholder="Enter Other Technology"
                  />
                </div>
              )}
              <button
                type="submit"
                //  onClick={handleFormSubmit}
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

export default LeadsForm;

import React, { useState } from "react";

export const Address = ({ onNext }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="w-full mx-40 my-10">
      <div className="shadow-md border-2 rounded-md p-4 px-8 w-full pb-10">
        <h1 className="text-lg mb-6">Address</h1>
        <div className="flex w-full gap-4">
          <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address line 1
            </label>
            <input
              className=""
              type="text"
              id="firstName"
              name="firstName"
              //   value={firstName}
              //   onChange={(e) => setFirstName(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="flex flex-col border rounded-lg p-2 w-full">
            <label
              htmlFor="dob"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address line 2
            </label>
            <input
              type="date"
              id="email"
              name="email"
              //   value={dateOfBirth}
              //   onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder=""
              className=""
            />
          </div>
          <button className="text-4xl mx-4" onClick={handleClick}>
            {show ? "-" : "+"}
          </button>
        </div>
        {show && (
          <div className="flex w-full gap-4 mt-6">
            <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address line 1
              </label>
              <input
                className=""
                type="text"
                id="firstName"
                name="firstName"
                //   value={firstName}
                //   onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="flex flex-col border rounded-lg p-2 w-full">
              <label
                htmlFor="dob"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address line 2
              </label>
              <input
                type="date"
                id="email"
                name="email"
                //   value={dateOfBirth}
                //   onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder=""
                className=""
              />
            </div>
            <button className="text-4xl mx-4">+</button>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-10 bg-blue-500 p-4 text-white rounded"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

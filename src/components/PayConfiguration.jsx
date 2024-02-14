import { useState } from "react";

export const PayConfiguration = ({ onNext, step }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full mx-40 my-10">
      <div className="shadow-md border-2 rounded-md p-4 px-8 w-full pb-10">
        <h1 className="text-lg mb-6">Pay Configuration</h1>
        <div className="flex w-full gap-4">
          <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Level 1 Approvers
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
            <div className="flex gap-2">
              {["ravi", "Ram", "vishal Raj", "Abhi", "Rahul Raj"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 p-2 px-4 rounded-full flex justify-center items-center"
                  >
                    {item}{" "}
                    <span className=" border-black rounded-full ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {show && (
          <div className="flex flex-col border rounded-lg p-2 px-4 w-full mt-8">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Level 1 Approvers
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
            <div className="flex gap-2">
              {["ravi", "Ram", "vishal Raj", "Abhi", "Rahul Raj"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 p-2 px-4 rounded-full flex justify-center items-center"
                  >
                    {item}{" "}
                    <span className=" border-black rounded-full ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        <button
          className="text-md rounded-md my-6 text-blue-600 text-center bg-blue-100 w-full p-2 hover:bg-blue-200"
          onClick={() => setShow(true)}
        >
          Add New Level
        </button>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-10 bg-blue-500 p-4 text-white rounded "
          onClick={onNext}
        >
          {step === 3 && "Finish"}
        </button>
      </div>
    </div>
  );
};

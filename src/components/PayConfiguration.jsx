import React from "react";

export const PayConfiguration = ({ onNext, step }) => {
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
          </div>
        </div>
        <button className="text-md rounded-md my-6 text-blue-600 text-center bg-blue-100 w-full p-2 hover:bg-blue-200">
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

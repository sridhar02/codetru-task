import { useState } from "react";

export const GeneralDetails = ({ onNext }) => {
  const [steps, setSteps] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const stepStatus = [
    { id: 1, completed: steps >= 1, title: "General Details" },
    { id: 2, completed: steps >= 2, title: "Address" },
  ];

  const handleNext = () => {
    if (steps === 1) {
      setSteps(steps + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="w-full mx-40 my-10">
      <div className="flex gap-6 mb-10 justify-between">
        {stepStatus.map((s) => (
          <div key={s.id} className="flex-1 items-center gap-4">
            {s.id < 3 && (
              <div
                className={`w-full border-2 *:
                ${s.completed ? "border-blue-500" : "bg-gray-200"}
            `}
              />
            )}
          </div>
        ))}
      </div>

      {steps === 1 && (
        <div className="shadow-md border-2 rounded-md p-4 px-8 w-full pb-10">
          <h1 className="text-lg mb-6">Basic Details</h1>
          <div className="flex w-full gap-4">
            <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                className=""
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Vishal"
              />
            </div>
            <div className="flex flex-col border rounded-lg p-2 w-full">
              <label
                htmlFor="dob"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="email"
                name="email"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="dd.mm.yyyy"
                className=""
              />
            </div>
          </div>
        </div>
      )}
      {steps === 2 && (
        <div className="shadow-md border-2 rounded-md p-4 px-8 w-full">
          <h1 className="text-lg mb-6">Contact Details</h1>
          <div className="flex w-full gap-4">
            <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Vishal@123.com"
                className="focus:border-none "
              />
            </div>
            <div className="flex flex-col border rounded-lg p-2 px-4 w-full">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile Number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="9457891325"
                maxLength={10}
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button
          className="px-10 bg-blue-500 p-4 text-white rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

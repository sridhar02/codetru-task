import React, { useState } from "react";
import { Address } from "./Address";
import { GeneralDetails } from "./GeneralDetails";
import { PayConfiguration } from "./PayConfiguration";
import { CheckCircleIcon } from "@heroicons/react/solid"; // Importing icons from Heroicons

const StepIndicator1 = ({ step }) => {
  const stepStatus = [
    { id: 1, completed: step > 1, title: "General Details" },
    { id: 2, completed: step > 2, title: "Address" },
    { id: 3, completed: step > 3, title: "Pay Configuration" },
  ];

  return (
    <div className="flex justify-center space-x-2 mb-4">
      {stepStatus.map((s) => (
        <div key={s.id} className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              s.completed ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            {s.completed ? "✓" : step === s.id ? "•" : ""}
          </div>
          <span>{s.title}</span>
          {s.id < 3 && <div className="w-48 border-2" />}
        </div>
      ))}
    </div>
  );
};

const StepIndicator = ({ step }) => {
  const steps = [
    { id: 1, name: "General Details", completed: step > 1 },
    { id: 2, name: "Address", completed: step > 2 },
    { id: 3, name: "Pay Configuration", completed: step > 3 },

    // Add more steps as needed
  ];

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.name} className="flex items-center">
          <div
            className={`border-2 border-blue-600 p-2 rounded-full ${
              step.completed && "bg-blue-600"
            }`}
          >
            {step.completed ? (
              <CheckCircleIcon className="w-6 h-6 text-white" />
            ) : (
              <div className={`w-6 h-6 rounded-full ${"bg-blue-600"}`} />
            )}
          </div>

          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
          <span className="mx-2 text-blue-600">{step.name}</span>
          {step.id < 3 && <div className="w-40 border-2 mx-2" />}
        </div>
      ))}
      {/* <div className="w-6 h-6 rounded-full border-2 border-blue-600"></div>{" "} */}
      {/* This is for the last step if it's not completed */}
    </div>
  );
};

// Your existing form components (GeneralDetails, Address, PayConfiguration) go here

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="mt-10 w-full">
      <StepIndicator step={step} />
      <div className="flex justify-center w-full">
        {step === 1 && <GeneralDetails onNext={nextStep} />}
        {step === 2 && <Address onNext={nextStep} />}
        {step === 3 && (
          <PayConfiguration
            onSubmit={() => alert("Form Submitted")}
            step={step}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;

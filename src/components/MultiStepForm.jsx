import React, { useState } from "react";
import { Address } from "./Address";
import { GeneralDetails } from "./GeneralDetails";
import { PayConfiguration } from "./PayConfiguration";

const StepIndicator = ({ step }) => {
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

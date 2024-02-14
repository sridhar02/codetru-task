import { useState, Fragment } from "react";
import { Address } from "./Address";
import { GeneralDetails } from "./GeneralDetails";
import { PayConfiguration } from "./PayConfiguration";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

const StepIndicator = ({ step }) => {
  const steps = [
    { id: 1, name: "General Details", completed: step > 1 },
    { id: 2, name: "Address", completed: step > 2 },
    { id: 3, name: "Pay Configuration", completed: step > 3 },
  ];

  return (
    <div className="flex items-center justify-center">
      {steps.map((step) => (
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
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  console.log(step);

  const nextStep = () => {
    if (step === 3) {
      setIsOpen(true);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };
  // const prevStep = () => setStep((prevStep) => prevStep - 1);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="mt-10 w-full">
        <StepIndicator step={step} />
        <div className="flex justify-center w-full">
          {step === 1 && <GeneralDetails onNext={nextStep} />}
          {step === 2 && <Address onNext={nextStep} />}
          {step === 3 && <PayConfiguration onNext={nextStep} step={step} />}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" flex flex-col justify-center items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <img
                    src="/assets/success.svg"
                    alt=""
                    className="h-40 w-40 my-5"
                  />
                  <div className="mt-2 ">
                    <p className="text-xl  text-center text-green-700 mb-4">
                      Congratulations
                    </p>
                    <p>Invite Link Successfully Sent to Rahul Raj</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500  px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MultiStepForm;

import { useState } from "react";

export const SidebarItem = ({ iconPath, title, expanded }) => {
  const [isOpen, setIsOpen] = useState("");

  return (
    <div
      className={`flex items-center space-x-2 p-2 cursor-pointer w-full hover:rounded-md hover:p-2 ${
        isOpen ? " flex-col justify-start" : ""
      }`}
    >
      <div className="flex items-center">
        <img src={iconPath} alt="" className="h-6 w-6" />
        {expanded && <span className="text-lg text-black pl-4">{title}</span>}
        {title === "Sales" && (
          <div onClick={() => setIsOpen(!isOpen)}>
            <img
              src="/assets/arrow.svg"
              className={`rotate-90 ${expanded ? "ml-36" : ""}`}
            />{" "}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-8 border-l-2 border-blue-600 w-full px-2 ml-36 mt-6">
          <p className="hover:bg-blue-600 hover:p-2 hover:text-white rounded-md px-4">
            Payments
          </p>
          <p className="hover:bg-blue-600 hover:p-2 hover:text-white rounded-md px-4">
            Bills
          </p>
        </div>
      )}
    </div>
  );
};

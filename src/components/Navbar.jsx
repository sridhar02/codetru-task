import React, { useState } from "react";

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full flex py-4 p-2 justify-between pr-10 mt-6">
      <div className="flex-1/2" />
      <div className="flex items-center bg-white shadow-md rounded-md overflow-hidden w-7/12">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search or Jump to..."
          className="px-4 py-2 w-full rounded-l-full focus:outline-none"
        />
        <button className="px-4 text-gray-600">
          <img src="/src/assets/search.svg" alt="Search" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <img
          src="/src/assets/bell.svg"
          alt="bell icon"
          className="p-2 border-2 rounded-md w-14 h-14"
        />
        <img src="/src/assets/user.svg" alt="user icon" className="h-14 w-14" />
      </div>
    </div>
  );
};
